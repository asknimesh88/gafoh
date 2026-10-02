const nav = [
  ['/#about', 'About'],
  ['/#focus', 'What we do'],
  ['/#pillars', 'Pillars'],
  ['https://local.projects.gafoh.org/', 'Projects'],
  ['/clinic', 'Clinic'],
  ['/research', 'Research'],
  ['/support', 'Donate'],
  ['/#contact', 'Contact'],
];

const BASE = 'https://www.gafoh.org';

const orgSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Global Alliance for Food and One Health (GAFOH) Sri Lanka',
  alternateName: 'GAFOH Sri Lanka',
  url: BASE,
  logo: `${BASE}/img/logo.png`,
  description: 'GAFOH Sri Lanka is a non-profit NGO uniting communities, agriculture, and science to advance the One Health framework and sustainable food security.',
  telephone: ['+94702488090', '+94453134949'],
  email: 'info@gafoh.org',
  address: [
    { '@type': 'PostalAddress', streetAddress: 'Pannipitiya', addressLocality: 'Colombo District', addressRegion: 'Western Province', postalCode: '10132', addressCountry: 'LK' },
    { '@type': 'PostalAddress', streetAddress: '101, Rideevita Road, Maragala', addressLocality: 'Hiramadagama', addressRegion: 'Rathnapura', postalCode: '70296', addressCountry: 'LK' }
  ],
  sameAs: ['https://github.com/asknimesh88/gafoh']
});

const layout = ({ title, description, body, path = '', schema = '' }) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="theme-color" content="#1b6b3a">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${BASE}${path === '/' ? '' : path}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:type" content="website">
<meta property="og:url" content="${BASE}${path === '/' ? '' : path}">
<meta property="og:site_name" content="GAFOH Sri Lanka">
<meta property="og:locale" content="en_LK">
<meta property="og:image" content="${BASE}/img/logo.png">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<link rel="icon" href="/img/favicon.png">
<link rel="stylesheet" href="/css/style.css?v=15">
<script type="application/ld+json">${schema || orgSchema}</script>
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
        <li><strong style="color:rgba(255,255,255,.7)">City Office</strong><br>Pannipitiya, Colombo District<br>Western Province, Sri Lanka 10132</li>
        <li><strong style="color:rgba(255,255,255,.7)">Head Office</strong><br>101, Rideevita Road, Maragala<br>Hiramadagama, Rathnapura RN 70296</li>
        <li><a href="tel:+94702488090">+94 70 248 8090</a></li>
        <li><a href="tel:+94453134949">+94 (45) 313 4949</a></li>
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
