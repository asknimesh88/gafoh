const express = require('express');
const compression = require('compression');
const fs = require('fs');
const path = require('path');
const pages = require('./views/pages');

const app = express();
const PORT = process.env.PORT || 3000;
const MESSAGES = path.join(__dirname, 'data', 'messages.jsonl');

app.disable('x-powered-by');
app.use(compression());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false, limit: '10kb' }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '7d' }));

for (const [route, render] of Object.entries(pages)) {
  if (route.startsWith('/')) app.get(route, (req, res) => res.send(render()));
}

// ponytail: in-memory rate limit + file storage; swap for SMTP/DB if volume grows
const hits = new Map();
app.post('/api/contact', (req, res) => {
  const ip = req.ip;
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(t => now - t < 3600e3);
  if (recent.length >= 5) return res.status(429).json({ error: 'Too many messages, try again later.' });

  const { name = '', email = '', segment = '', message = '', website = '' } = req.body;
  if (website) return res.json({ ok: true }); // honeypot filled: pretend success
  if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email) || !message.trim()) {
    return res.status(400).json({ error: 'Please fill in your name, a valid email and a message.' });
  }

  recent.push(now);
  hits.set(ip, recent);
  const entry = { at: new Date().toISOString(), name: name.trim().slice(0, 100), email: email.trim().slice(0, 150), segment: String(segment).slice(0, 50), message: message.trim().slice(0, 2000) };
  fs.mkdirSync(path.dirname(MESSAGES), { recursive: true });
  fs.appendFile(MESSAGES, JSON.stringify(entry) + '\n', err => {
    if (err) return res.status(500).json({ error: 'Could not save your message.' });
    res.json({ ok: true });
  });
});

app.use((req, res) => res.status(404).send(pages.notFound()));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
