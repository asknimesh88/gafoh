const fs = require('fs');
const path = require('path');
const pages = require('./views/pages');

const dist = path.join(__dirname, 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist);

const routes = {
  '/':             'index.html',
  '/support':      'support/index.html',
  '/legal-notice': 'legal-notice/index.html',
  '/privacy':      'privacy/index.html',
  '/clinic':       'clinic/index.html',
  '/research':     'research/index.html',
};

for (const [route, file] of Object.entries(routes)) {
  const render = pages[route];
  if (!render) continue;
  const outPath = path.join(dist, file);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, render());
  console.log(`✓ ${file}`);
}

// 404 page
const notFoundPath = path.join(dist, '404.html');
fs.writeFileSync(notFoundPath, pages.notFound());
console.log('✓ 404.html');

// Copy public/ assets into dist/
const copyDir = (src, dest) => {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    entry.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
};
copyDir(path.join(__dirname, 'public'), dist);
console.log('✓ public/ assets copied');
console.log(`\nBuild complete → dist/`);
