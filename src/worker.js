export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (request.method === 'POST' && url.pathname === '/api/contact') {
      return handleContact(request, env);
    }

    // All other requests: serve static assets
    return env.ASSETS.fetch(request);
  },
};

async function handleContact(request, env) {
  const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request.' }), { status: 400, headers });
  }

  const { name = '', email = '', segment = '', message = '', website = '' } = body;

  // Honeypot
  if (website) return new Response(JSON.stringify({ ok: true }), { headers });

  if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email) || !message.trim()) {
    return new Response(JSON.stringify({ error: 'Please fill in your name, a valid email and a message.' }), { status: 400, headers });
  }

  const payload = {
    sender: { name: 'Support [GAFOH Sri Lanka]', email: 'support@gafoh.org' },
    replyTo: { email: 'info@gafoh.org' },
    to: [{ email: 'info@gafoh.org', name: 'GAFOH Sri Lanka' }],
    subject: `Website enquiry from ${name.trim().slice(0, 80)}`,
    htmlContent: `
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      ${segment ? `<p><strong>Topic:</strong> ${esc(segment)}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${esc(message).replace(/\n/g, '<br>')}</p>
    `,
    textContent: `Name: ${name}\nEmail: ${email}${segment ? `\nTopic: ${segment}` : ''}\n\nMessage:\n${message}`,
  };

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': env.BREVO_API_KEY,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.text();
    const keyPresent = !!env.BREVO_API_KEY;
    return new Response(JSON.stringify({ error: err, keyPresent }), { status: 500, headers });
  }

  return new Response(JSON.stringify({ ok: true }), { headers });
}

function esc(str) {
  return String(str).slice(0, 2000)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
