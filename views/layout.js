const nav = [
  ['/#about', 'About'],
  ['/#focus', 'What we do'],
  ['/#pillars', 'Pillars'],
  ['https://local.projects.gafoh.org/', 'Projects'],
  ['/support', 'Donate'],
  ['/#contact', 'Contact'],
];

const layout = ({ title, description, body, path = '' }) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="theme-color" content="#1b6b3a">
<link rel="icon" href="/img/favicon.png">
<link rel="stylesheet" href="/css/style.css?v=10">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="header">
  <div class="wrap header__in">
    <a class="brand" href="/"><img src="/img/logo.png" alt="" width="46" height="46"><span>GAFOH <small>Sri Lanka</small></span></a>
    <button class="burger" aria-label="Menu" aria-expanded="false" aria-controls="menu"><span></span></button>
    <nav id="menu" class="menu">
      ${nav.map(([href, label]) => {
        const base = href.startsWith('http') ? href : href.split('#')[0];
        const here = base && base === path ? ' aria-current="page"' : '';
        return `<a href="${href}"${here}>${label}</a>`;
      }).join('')}
      <a class="btn btn--sm" href="/#contact">Get in touch</a>
    </nav>
  </div>
</header>
<main id="main">${body}</main>
<footer class="footer">
  <div class="wrap footer__main">
    <div class="footer__brand">
      <a class="brand brand--light" href="/"><img src="/img/logo.png" alt="" width="48" height="48"><span>GAFOH <small>Sri Lanka</small></span></a>
      <p class="footer__tagline">Uniting communities, science, and agriculture for a resilient, equitable tomorrow across Sri Lanka.</p>
      <span class="footer__pill">Non-Governmental &middot; Non-Profit</span>
    </div>
    <div class="footer__col">
      <h5 class="footer__heading">Explore</h5>
      <ul class="footer__links">
        <li><a href="/#about">About GAFOH</a></li>
        <li><a href="/#pillars">Our Pillars</a></li>
        <li><a href="/#focus">Focus Areas</a></li>
        <li><a href="https://local.projects.gafoh.org/">Ongoing Projects</a></li>
        <li><a href="https://downloads.gafoh.org/">Downloads</a></li>
      </ul>
    </div>
    <div class="footer__col">
      <h5 class="footer__heading">Contact</h5>
      <ul class="footer__links">
        <li>Pannipitiya, Colombo District<br>Western Province, Sri Lanka 10132</li>
        <li><a href="tel:+940773957649">+94 077 3957649</a></li>
        <li><a href="mailto:info@gafoh.org">info@gafoh.org</a></li>
      </ul>
    </div>
    <div class="footer__col">
      <h5 class="footer__heading">Get Involved</h5>
      <p class="footer__cta-text">Partner with us to build resilient food systems and healthier communities.</p>
      <a class="btn btn--gold" href="/support">Donate Now</a>
      <a class="btn btn--ghost-white" href="/#contact">Get in touch</a>
    </div>
  </div>
  <div class="wrap footer__legal">
    <span>&copy; ${new Date().getFullYear()} GAFOH Sri Lanka. All rights reserved.</span>
    <span><a href="/legal-notice">Legal notice</a> &middot; <a href="/privacy">Privacy Policy</a></span>
  </div>
</footer>
<script src="/js/main.js" defer></script>
</body>
</html>`;

module.exports = layout;
