const layout = require('./layout');

const icons = {
  leaf: '<path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15M5 19c3-5 6-8 10-10"/>',
  sprout: '<path d="M12 21v-9M12 12c0-4-3-6-7-6 0 4 3 6 7 6zM12 14c0-3 2-5 6-5 0 3-2 5-6 5z"/>',
  heart: '<path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11z"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5M9 7h6"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 11.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
};
const icon = (name, cls = 'ico') => {
  const px = cls === 'ico--xs' ? 14 : cls === 'ico--sm' ? 16 : 24;
  return `<svg class="${cls}" width="${px}" height="${px}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || ''}</svg>`;
};

const list = items => `<ul class="ticks">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;

const home = () => layout({
  title: 'GAFOH Sri Lanka | Global Alliance for Food and One Health',
  description: 'GAFOH Sri Lanka is a non-profit organization uniting communities, agriculture, and science to advance the One Health framework and sustainable food security.',
  path: '/',
  body: `
<section class="hero">
  <div class="wrap hero__in">
    <div class="hero__badge">
      <span class="badge-dot"></span>
      <span>Non-Governmental &middot; Non-Profit Initiative &middot; Sri Lanka</span>
    </div>
    <h1 class="hero__title">
      Better tomorrow <em>for all</em> through One Health.
    </h1>
    <p class="hero__lead">
      We unite scientific experts, agricultural producers, and local communities to safeguard food security, human well-being, and ecological balance across Sri Lanka.
    </p>
    <div class="hero__actions">
      <a class="btn btn--gold" href="#about">
        <span>Explore our mission</span>
        ${icon('arrow', 'ico--sm')}
      </a>
      <a class="btn btn--ghost-white" href="/support">Support our work</a>
      <a class="btn btn--ghost-white" href="#contact">Schedule consultation</a>
    </div>

    <div class="hero__stats">
      <div class="stat-item">
        <span class="stat-num">03</span>
        <span class="stat-label"><strong>Interlinked Domains</strong>Human, Animal &amp; Earth</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">08</span>
        <span class="stat-label"><strong>Strategic Pillars</strong>Community to National</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">100%</span>
        <span class="stat-label"><strong>Community-Driven</strong>Empowerment &amp; Mentorship</span>
      </div>
    </div>
  </div>
</section>

<!-- Vision, Mission, Revival Grid -->
<section class="section section--editorial" id="about">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">Strategic Direction</p>
      <h2>Founded on purpose, built for resilience</h2>
    </div>

    <div class="editorial-grid">
      <article class="editorial-card">
        <div class="editorial-card__tag">
          <span class="editorial-card__num">01</span>
          <span class="editorial-card__icon">${icon('eye')}</span>
        </div>
        <h3>Our Vision</h3>
        <p>A promising and equitable future for every community across Sri Lanka — regardless of age, ethnicity, caste, creed, religion, gender, or civil status. We strive for a society where everyone unlocks their potential and builds a fulfilling, dignified life.</p>
        <div class="card-footer">Quality &amp; Equity Commitment</div>
      </article>

      <article class="editorial-card">
        <div class="editorial-card__tag">
          <span class="editorial-card__num">02</span>
          <span class="editorial-card__icon">${icon('flag')}</span>
        </div>
        <h3>Our Mission</h3>
        <p>Fostering active environmental stewardship, food sovereignty, and community health through hands-on education, sustainable agricultural mentorship, grassroots advocacy, and ethical public service.</p>
        <div class="card-footer">Grassroots Stewardship</div>
      </article>

      <article class="editorial-card">
        <div class="editorial-card__tag">
          <span class="editorial-card__num">03</span>
          <span class="editorial-card__icon">${icon('chart')}</span>
        </div>
        <h3>Economic Revival</h3>
        <p>As Sri Lanka navigates macroeconomic recovery, GAFOH actively supports localized revitalization through entrepreneurial incubation, agricultural value chains, and direct access to regional and international markets.</p>
        <div class="card-footer">Sustainable Enterprise</div>
      </article>
    </div>
  </div>
</section>

<!-- Deep Dive: The One Health Framework -->
<section class="section section--tinted">
  <div class="wrap">
    <div class="split split--align-center">
      <div>
        <p class="eyebrow">The Core Philosophy</p>
        <h2 class="section-title">The One Health connection: People, animals, planet.</h2>
        <div class="prose">
          <p class="lead-text">
            Human health does not exist in isolation. It is inextricably bound to the food we cultivate, the animals we raise, and the soils and water systems that sustain us.
          </p>
          <p>
            The <strong>Global Alliance for Food and One Health (GAFOH Sri Lanka)</strong> is dedicated to integrating this tripartite paradigm into national and global food systems. When ecosystems degrade or agricultural practices become toxic, community health collapses. By solving systemic root causes, we build permanent resilience.
          </p>
        </div>
      </div>

      <div class="diagram-card">
        <div class="diagram-head">
          <div>
            <p class="eyebrow" style="margin:0 0 4px">Framework Overview</p>
            <h3 style="margin:0">One Health Triad</h3>
          </div>
          <span class="badge badge--green">Interconnected</span>
        </div>
        <div class="triad-display">
          <div class="triad-node" style="--accent:var(--leaf)">
            <span class="triad-icon" style="background:rgba(47,158,87,.12);color:var(--leaf)">${icon('heart')}</span>
            <div>
              <h4>Human Health</h4>
              <p>Nutrition, food safety, geriatric care, community equity</p>
            </div>
          </div>
          <div class="triad-node" style="--accent:var(--gold)">
            <span class="triad-icon" style="background:rgba(201,162,39,.12);color:var(--gold)">${icon('sprout')}</span>
            <div>
              <h4>Sustainable Ag</h4>
              <p>Regenerative farming, water conservation, IPM, agroforestry</p>
            </div>
          </div>
          <div class="triad-node" style="--accent:var(--green)">
            <span class="triad-icon" style="background:rgba(27,107,58,.12);color:var(--green)">${icon('globe')}</span>
            <div>
              <h4>Environment</h4>
              <p>Biodiversity, climate resilience, AMR prevention, soil vitality</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mini-features mini-features--full">
      <div class="mini-feat">
        <span class="feat-bubble feat-bubble--green">${icon('leaf')}</span>
        <div>
          <strong>Ecological Integrity</strong>
          <span>Preserving biodiversity, fertile soils, and clean watersheds.</span>
        </div>
      </div>
      <div class="mini-feat">
        <span class="feat-bubble feat-bubble--gold">${icon('heart')}</span>
        <div>
          <strong>Human Well-being</strong>
          <span>Nutrition security, food safety, and chronic disease reduction.</span>
        </div>
      </div>
      <div class="mini-feat">
        <span class="feat-bubble feat-bubble--ink">${icon('shield')}</span>
        <div>
          <strong>Biosecurity &amp; Zoonoses</strong>
          <span>Surveillance against cross-species pathogen spillover.</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 8 Key Pillars -->
<section class="section" id="pillars">
  <div class="wrap">
    <div class="section-head section-head--center">
      <p class="eyebrow">Action Framework</p>
      <h2>Our Eight Foundational Pillars</h2>
      <p class="subtitle">A multi-sectoral approach delivering tangible interventions across urban and rural communities.</p>
    </div>

    <div class="pillars-index">
      ${[
        {
          no: '01',
          title: 'Community Volunteerism',
          desc: 'Mobilizing and equipping local youth and community organizers to drive civic action and mutual aid networks.',
          tag: 'Social Action'
        },
        {
          no: '02',
          title: 'One Health Consultations',
          desc: 'Providing specialized technical advisory to policy makers, institutions, and agricultural cooperatives.',
          tag: 'Technical Advisory'
        },
        {
          no: '03',
          title: 'Family Food Security',
          desc: 'Guiding vulnerable households in micro-farming, home gardening, and family-level nutritional sufficiency.',
          tag: 'Food Sovereignty'
        },
        {
          no: '04',
          title: 'Enterprise & Market Linkages',
          desc: 'Incubating sustainable community enterprises and connecting local producers to international market channels.',
          tag: 'Economic Revival'
        },
        {
          no: '05',
          title: 'Elder & Geriatric Care',
          desc: 'Dedicated nutrition support, medical checkup coordination, and dignity programs for elderly citizens.',
          tag: 'Care & Dignity'
        },
        {
          no: '06',
          title: 'Educational Consultations',
          desc: 'Curating vocational syllabi, specialized academic seminars, and community workshops on sustainable systems.',
          tag: 'Education'
        },
        {
          no: '07',
          title: 'Project Management',
          desc: 'End-to-end execution, monitoring, and impact evaluation for NGO and community development programs.',
          tag: 'Implementation'
        },
        {
          no: '08',
          title: 'Disability Mentoring',
          desc: 'Inclusive vocational training, accessible food-growing technologies, and advocacy for disabled individuals.',
          tag: 'Inclusion'
        }
      ].map(p => `
        <div class="pillar-box">
          <div class="pillar-box__top">
            <span class="pillar-box__num">${p.no}</span>
            <span class="pillar-box__tag">${p.tag}</span>
          </div>
          <h4>${p.title}</h4>
          <p>${p.desc}</p>
        </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- Focus Areas -->
<section class="section section--dark" id="focus">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow eyebrow--gold">Core Competencies</p>
      <h2 class="text-white">Four Areas of Focus</h2>
      <p class="subtitle text-light">Our research paradigms, practices, and intervention programs across four interconnected domains.</p>
    </div>

    <div class="focus-sections">

      <div class="focus-section" id="agri">
        <div class="focus-section__hd">
          <span class="focus-section__bubble focus-section__bubble--1">${icon('sprout')}</span>
          <div class="focus-section__label">
            <span class="focus-section__num">01</span>
            <span class="focus-section__name">Agriculture</span>
          </div>
        </div>
        <div class="tab-panel__split">
          <div>
            <h3>Empowering regenerative, high-yield agriculture</h3>
            <p>Our agricultural initiatives merge traditional Sri Lankan cultivation wisdom with cutting-edge agro-ecological techniques. We equip farmers to reduce dependency on chemical inputs while increasing yields and soil fertility.</p>
            <div class="focus-points">
              <div class="focus-point">
                <strong>Soil Restoration</strong>
                <span>Enhancing organic matter, microbial life, and natural nitrogen fixation.</span>
              </div>
              <div class="focus-point">
                <strong>Nutrient-Dense Crops</strong>
                <span>Prioritizing indigenous and climate-adapted grains, pulses, and tubers.</span>
              </div>
            </div>
          </div>
          <div class="tab-panel__callout">
            <h4>Key Agricultural Objectives</h4>
            <ul class="clean-list">
              <li>Low-cost natural bio-fertilizer production</li>
              <li>Micro-irrigation &amp; rainwater catchment</li>
              <li>Seed bank preservation of heritage varieties</li>
              <li>Smallholder cooperative empowerment</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="focus-section" id="sus">
        <div class="focus-section__hd">
          <span class="focus-section__bubble focus-section__bubble--2">${icon('leaf')}</span>
          <div class="focus-section__label">
            <span class="focus-section__num">02</span>
            <span class="focus-section__name">Sustainability</span>
          </div>
        </div>
        <div class="tab-panel__split">
          <div>
            <h3>The 10-Point Sustainability Standard</h3>
            <p>Sustainable agriculture produces nutritious food and fiber in a manner that is environmentally responsible, economically viable, and socially equitable over generations.</p>
            <div class="tags-grid">
              ${[
                'Crop rotation & diversification',
                'Conservation tillage',
                'Integrated pest management (IPM)',
                'Watershed & irrigation stewardship',
                'Agroforestry & mixed farming',
                'Soil health & microbial vitality',
                'Ethical livestock welfare',
                'Clean energy & waste repurposing',
                'Fair community labor & equity',
                'One Health verification standards'
              ].map(t => `<div class="tag-pill">${icon('check', 'ico--xs')}<span>${t}</span></div>`).join('')}
            </div>
          </div>
          <div class="tab-panel__callout">
            <h4>Long-Term Impact</h4>
            <p>By balancing productivity with preservation, we secure resilient regional agro-ecosystems that buffer communities against climate volatility.</p>
          </div>
        </div>
      </div>

      <div class="focus-section" id="health">
        <div class="focus-section__hd">
          <span class="focus-section__bubble focus-section__bubble--3">${icon('heart')}</span>
          <div class="focus-section__label">
            <span class="focus-section__num">03</span>
            <span class="focus-section__name">Health &amp; Safety</span>
          </div>
        </div>
        <div class="tab-panel__split">
          <div>
            <h3>Biosecurity, Nutrition, and One Health Vectors</h3>
            <p>Human health is inseparable from animal welfare and environmental safety. We address the root drivers of epidemic risk and chronic malnutrition.</p>
            <div class="defs-grid">
              <div class="def-card">
                <h5>Nutrition &amp; Food Security</h5>
                <p>Ensuring balanced, bio-available micronutrient access across vulnerable socioeconomic demographics.</p>
              </div>
              <div class="def-card">
                <h5>Zoonotic Disease Prevention</h5>
                <p>Active surveillance and risk reduction at the human-wildlife-livestock interface (e.g., Avian Flu, Leptospirosis).</p>
              </div>
              <div class="def-card">
                <h5>Antimicrobial Resistance (AMR)</h5>
                <p>Combating excessive antibiotic usage in agriculture through strict biosecurity and herbal therapeutics.</p>
              </div>
              <div class="def-card">
                <h5>Food Safety &amp; Supply Integrity</h5>
                <p>Preventing post-harvest contamination, toxic pesticide residues, and improper cold chain management.</p>
              </div>
            </div>
          </div>
          <div class="tab-panel__callout">
            <h4>Policy &amp; Governance</h4>
            <p>GAFOH advises governmental agencies and NGOs on drafting regulations anchored in verified One Health principles.</p>
          </div>
        </div>
      </div>

      <div class="focus-section" id="know">
        <div class="focus-section__hd">
          <span class="focus-section__bubble focus-section__bubble--4">${icon('book')}</span>
          <div class="focus-section__label">
            <span class="focus-section__num">04</span>
            <span class="focus-section__name">Knowledge Transfer</span>
          </div>
        </div>
        <div class="tab-panel__split">
          <div>
            <h3>Knowledge Sharing &amp; Demonstration Centers</h3>
            <p>Theory translates into reality through participatory field schools, live farming demonstrations, and open-source project documentation.</p>
            <div class="action-box">
              <p>We invite educators, agricultural extension officers, and university researchers to collaborate on localized pilot programs.</p>
              <div class="btn-group">
                <a class="btn btn--primary" href="https://local.projects.gafoh.org/" target="_blank" rel="noopener">
                  <span>Explore Ongoing Field Projects</span>
                  ${icon('arrow', 'ico--sm')}
                </a>
                <a class="btn btn--ghost" href="https://downloads.gafoh.org/" target="_blank" rel="noopener">
                  <span>Download Resource Guides</span>
                </a>
              </div>
            </div>
          </div>
          <div class="tab-panel__callout">
            <h4>Field Workshops</h4>
            <p>Custom demonstrations on organic compost, micro-scale drip setups, and livestock health can be scheduled upon request.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Callout Banner -->
<section class="banner-cta">
  <div class="wrap banner-cta__in">
    <div>
      <p class="eyebrow eyebrow--gold">Get Involved</p>
      <h2>Support sustainable transformation in Sri Lanka</h2>
      <p>Whether through charitable contributions, institutional partnerships, or community volunteerism, every effort amplifies our impact.</p>
    </div>
    <div class="banner-cta__btns">
      <a class="btn btn--gold" href="/support">Support Our Mission</a>
      <a class="btn btn--ghost-white" href="#contact">Contact Our Team</a>
    </div>
  </div>
</section>

<!-- Contact & Timetable Section -->
<section class="section" id="contact">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">Connect With Us</p>
      <h2>Get in Touch &amp; Book Consultations</h2>
      <p class="subtitle">Have questions regarding our programs, field demonstrations, or partnership opportunities? Reach out today.</p>
    </div>

    <div class="contact-grid">
      <div class="contact-info">
        <div class="info-card info-card--dark">
          <h3>Office &amp; Headquarters</h3>
          <p class="address-block">
            <strong>City Office</strong><br>
            Pannipitiya, Colombo District<br>
            Western Province, Sri Lanka 10132
          </p>
          <p class="address-block" style="margin-top:14px">
            <strong>Head Office</strong><br>
            101, Rideevita Road, Maragala<br>
            Hiramadagama, Rathnapura RN 70296
          </p>

          <div class="quick-contacts">
            <a class="contact-link" href="tel:+94702488090">
              <span class="icon-bubble">${icon('phone', 'ico--sm')}</span>
              <span>+94 70 248 8090</span>
            </a>
            <a class="contact-link" href="tel:+94453134949">
              <span class="icon-bubble">${icon('phone', 'ico--sm')}</span>
              <span>+94 (45) 313 4949</span>
            </a>
            <a class="contact-link" href="mailto:info@gafoh.org">
              <span class="icon-bubble">${icon('mail', 'ico--sm')}</span>
              <span>info@gafoh.org</span>
            </a>
          </div>
        </div>

        <div class="schedule-card">
          <div class="schedule-card__head">
            <h4>Consultation Timetable</h4>
            <span class="badge badge--green">Open Mon &ndash; Fri</span>
          </div>
          <table class="hours-table">
            <tr>
              <th>Monday</th>
              <td><span class="time-slot">09:00 &ndash; 11:00 AM</span><span class="time-slot">01:00 &ndash; 03:00 PM</span></td>
            </tr>
            <tr>
              <th>Tuesday</th>
              <td><span class="time-slot">10:00 AM &ndash; 12:00 PM</span><span class="time-slot">02:00 &ndash; 04:00 PM</span></td>
            </tr>
            <tr>
              <th>Wednesday</th>
              <td><span class="time-slot">08:30 AM &ndash; 01:00 PM</span><span class="time-slot">02:00 &ndash; 04:00 PM</span></td>
            </tr>
            <tr>
              <th>Thursday</th>
              <td><span class="time-slot">08:30 AM &ndash; 01:00 PM</span><span class="time-slot">01:00 &ndash; 04:00 PM</span></td>
            </tr>
            <tr>
              <th>Friday</th>
              <td><span class="time-slot">09:30 &ndash; 11:00 AM</span><span class="time-slot">01:00 &ndash; 03:00 PM</span></td>
            </tr>
            <tr class="closed-row">
              <th>Sat &amp; Sun</th>
              <td><span class="closed-tag">Closed for Field Operations</span></td>
            </tr>
          </table>
        </div>
      </div>

      <div class="contact-form-wrap">
        <form class="form" id="contact-form" method="post" action="https://formspree.io/f/REPLACE_WITH_YOUR_ID" novalidate>
          <div class="form-head">
            <h3>Send an Official Message</h3>
            <p>Fill out the form below. We typically respond within 1–2 business days.</p>
          </div>

          <div class="form-row">
            <label>
              <span>Your Name <abbr title="required">*</abbr></span>
              <input name="name" type="text" autocomplete="name" required maxlength="100" placeholder="e.g. Dr. Kasun Perera">
            </label>
            <label>
              <span>Email Address <abbr title="required">*</abbr></span>
              <input name="email" type="email" autocomplete="email" required maxlength="150" placeholder="kasun@example.com">
            </label>
          </div>

          <label>
            <span>Nature of Inquiry</span>
            <select name="segment">
              <option value="General enquiry">General Inquiry &amp; Information</option>
              <option value="Agriculture related">Agriculture &amp; Sustainable Cultivation</option>
              <option value="Livestock demonstrations">Livestock Demonstrations &amp; Care</option>
              <option value="Academics & Research">Academics, Research &amp; One Health Training</option>
              <option value="Partnership & Donation">Partnership, NGO Collaboration &amp; Grants</option>
            </select>
          </label>

          <label>
            <span>Detailed Message <abbr title="required">*</abbr></span>
            <textarea name="message" rows="5" required maxlength="2000" placeholder="Please describe how we can assist or collaborate..."></textarea>
          </label>

          <!-- Honeypot -->
          <input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">

          <div class="form-footer">
            <button class="btn btn--primary btn--submit" type="submit">
              <span>Transmit Message</span>
              ${icon('arrow', 'ico--sm')}
            </button>
            <p class="privacy-note">By submitting, you agree to our <a href="/privacy">Privacy Policy</a>.</p>
          </div>
          <p class="status" role="status" aria-live="polite"></p>
        </form>
      </div>
    </div>
  </div>
</section>`,
});

const support = () => layout({
  title: 'Support Us | GAFOH Sri Lanka',
  description: 'Your donation, no matter the size, can create a ripple effect of positive change in local food systems and communities.',
  path: '/support',
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Philanthropic Partnership</p>
    <h1>Support Our Work</h1>
  </div>
</section>
<section class="section">
  <div class="wrap prose prose--narrow">
    <p class="lead-text">Dear supporters, partners, and community members: we have an extraordinary opportunity to come together and make a tangible impact across vulnerable communities in Sri Lanka.</p>
    <p>Countless individuals and rural families face multifaceted challenges across food inflation, climatic volatility, and limited nutritional access. They rely on sustained grassroots mentorship, educational resources, and agricultural support for hope, dignity, and a resilient tomorrow.</p>

    <div class="highlight-box">
      <strong>Your partnership, regardless of size, catalyzes sustainable change at the ground level.</strong>
    </div>

    <h3>How to Contribute</h3>
    <p>Direct automated online payment processing is currently in setup. To contribute funds, provide equipment/seeds, or discuss institutional grant funding, please reach out directly:</p>

    <div class="contact-card-simple">
      <p><strong>GAFOH Sri Lanka Administration</strong></p>
      <p style="margin:4px 0"><strong style="font-size:.85rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted)">City Office</strong><br>
      Pannipitiya, Colombo District<br>
      Western Province, Sri Lanka 10132</p>
      <p style="margin:4px 0"><strong style="font-size:.85rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted)">Head Office</strong><br>
      101, Rideevita Road, Maragala<br>
      Hiramadagama, Rathnapura RN 70296</p>
      <p style="margin-top:8px">Email: <a href="mailto:info@gafoh.org">info@gafoh.org</a><br>
      Phone: <a href="tel:+94702488090">+94 70 248 8090</a> / <a href="tel:+94453134949">+94 (45) 313 4949</a></p>
    </div>

    <p><a class="btn btn--primary" href="/#contact">Send a direct message</a></p>
  </div>
</section>`,
});

const doc = (title, sections, path) => layout({
  title: `${title} | GAFOH Sri Lanka`,
  description: `${title} documentation for GAFOH Sri Lanka`,
  path,
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Official Documentation</p>
    <h1>${title}</h1>
  </div>
</section>
<section class="section">
  <div class="wrap prose prose--narrow">
    ${sections}
    <div style="margin-top: 2rem;">
      <a class="btn btn--secondary" href="/">Return to Homepage</a>
    </div>
  </div>
</section>`,
});

const legalNotice = () => doc('Legal Notice', `
<h2>Operator &amp; Governance</h2>
<p><strong>GAFOH Sri Lanka (Global Alliance for Food and One Health)</strong><br>
Pannipitiya, Colombo, Sri Lanka 10132<br>
Phone: <a href="tel:+94702488090">+94 70 248 8090</a> / <a href="tel:+94453134949">+94 (45) 313 4949</a><br>
Email: <a href="mailto:info@gafoh.org">info@gafoh.org</a></p>

<h2>Terms of Use</h2>
<p>This legal notice governs the use of www.gafoh.org. By accessing this website, visitors explicitly agree to adhere to these terms and conditions.</p>

<h3>Information Authenticity</h3>
<p>All content is provided strictly for educational and public-benefit informational purposes. While we maintain rigorous standards of accuracy, we make no explicit warranty regarding instantaneous completeness or operational applicability without tailored technical consultation.</p>

<h3>Intellectual Property</h3>
<p>Unless otherwise noted, all educational resources, reports, brand marks, and technical frameworks are proprietary to GAFOH Sri Lanka. Non-commercial reproduction for academic or educational usage is permitted provided appropriate attribution is maintained.</p>
<p>&copy; ${new Date().getFullYear()} GAFOH Sri Lanka. All rights reserved.</p>
`, '/legal-notice');

const privacy = () => doc('Privacy Policy', `
<h2>Data Protection Commitment</h2>
<p>GAFOH Sri Lanka values the confidentiality and digital security of our stakeholders, donors, and community members. We process personal details strictly in accordance with recognized privacy standards and ethical data stewardship.</p>

<h2>Data Controller</h2>
<p>GAFOH Sri Lanka<br>
Pannipitiya, Colombo, Sri Lanka 10132 / Hiramadagama, Rathnapura RN 70296<br>
Email: <a href="mailto:info@gafoh.org">info@gafoh.org</a></p>

<h2>Information Collected via Inquiries</h2>
<p>When communicating via our contact forms or email, your submitted data (name, email address, message details, and organization) is stored solely to address your query and facilitate engagement. We never sell, lease, or distribute private information to third-party marketing entities.</p>

<h2>Server Logs &amp; Analytics</h2>
<p>Standard server access logs (IP address, browser type, timestamp) may be monitored purely for network security, diagnostics, and prevention of malicious automated traffic.</p>

<h2>Your Data Rights</h2>
<p>You may request verification, modification, or complete deletion of your recorded contact records at any time by contacting our data coordinator at <a href="mailto:info@gafoh.org">info@gafoh.org</a>.</p>
`, '/privacy');

const notFound = () => layout({
  title: 'Page Not Found | GAFOH Sri Lanka',
  description: 'The requested resource could not be found.',
  path: '',
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">HTTP 404 Error</p>
    <h1>Page Not Found</h1>
  </div>
</section>
<section class="section">
  <div class="wrap prose prose--narrow">
    <p>The page or resource you are searching for does not exist or has been relocated.</p>
    <p><a class="btn btn--primary" href="/">Return to Homepage</a></p>
  </div>
</section>`,
});

const clinicSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'VeterinaryCare',
  name: 'V Pet Care Animal Clinic',
  description: 'A full-service veterinary clinic offering consultations, surgical procedures, pharmaceutical dispensary, and boarding facilities under GAFOH Animal Care and Support Services.',
  url: 'https://www.gafoh.org/clinic',
  image: [
    'https://www.gafoh.org/img/clinic/clinic-reception-display.jpg',
    'https://www.gafoh.org/img/clinic/clinic-pharmacy-shelves.jpg',
    'https://www.gafoh.org/img/clinic/clinic-surgical-table.jpg'
  ],
  telephone: '+94702488090',
  email: 'info@gafoh.org',
  parentOrganization: { '@type': 'NGO', name: 'Global Alliance for Food and One Health (GAFOH) Sri Lanka', url: 'https://www.gafoh.org' }
});

const clinic = () => layout({
  title: 'V Pet Care Animal Clinic | GAFOH Animal Care & Support Services',
  description: 'V Pet Care Animal Clinic — full-service veterinary care including consultations, surgical services, a pharmaceutical dispensary, and animal boarding, under GAFOH Animal Care and Support Services.',
  path: '/clinic',
  schema: clinicSchema,
  body: `
<section class="page-head page-head--green">
  <div class="wrap">
    <p class="eyebrow eyebrow--gold">Animal Care &amp; Support Services</p>
    <h1>V Pet Care Animal Clinic</h1>
    <p class="page-head__sub">Compassionate, professional veterinary care for the animals in your life.</p>
  </div>
</section>

<section class="section section--tinted">
  <div class="wrap">
    <div class="split split--align-center">
      <div>
        <p class="eyebrow">About the Clinic</p>
        <h2>A trusted partner in animal health</h2>
        <div class="prose">
          <p class="lead-text">V Pet Care Animal Clinic operates under GAFOH's Animal Care and Support Services, bringing professional veterinary expertise and compassionate animal welfare together in one accessible facility.</p>
          <p>Our clinic provides a full spectrum of services — from routine wellness consultations and preventive care to surgical procedures and in-house pharmaceutical dispensary. We are equipped to care for companion animals including dogs and cats, with dedicated facilities for examination, treatment, and boarding.</p>
          <p>As part of GAFOH's One Health commitment, animal welfare is treated as inseparable from human and environmental health. V Pet Care reflects this ethos: healthy animals, healthy families, healthy communities.</p>
        </div>
      </div>
      <div class="clinic-badge-wrap">
        <div class="diagram-card">
          <div class="diagram-head">
            <div>
              <p class="eyebrow" style="margin:0 0 4px">Under GAFOH</p>
              <h3 style="margin:0">Animal Care &amp; Support</h3>
            </div>
            <span class="badge badge--green">Active</span>
          </div>
          <div class="triad-display">
            <div class="triad-node" style="--accent:var(--leaf)">
              <span class="triad-icon" style="background:rgba(47,158,87,.12);color:var(--leaf)">${icon('heart')}</span>
              <div><h4>Compassionate Care</h4><p>Animal welfare at the core of every consultation</p></div>
            </div>
            <div class="triad-node" style="--accent:var(--gold)">
              <span class="triad-icon" style="background:rgba(201,162,39,.12);color:var(--gold)">${icon('shield')}</span>
              <div><h4>Professional Services</h4><p>Qualified veterinary staff and proper clinical facilities</p></div>
            </div>
            <div class="triad-node" style="--accent:var(--green)">
              <span class="triad-icon" style="background:rgba(27,107,58,.12);color:var(--green)">${icon('globe')}</span>
              <div><h4>One Health Aligned</h4><p>Animal health as part of community and environmental health</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head section-head--center">
      <p class="eyebrow">Our Facility</p>
      <h2>Inside V Pet Care Animal Clinic</h2>
      <p class="subtitle">A glimpse into our clinical spaces, pharmacy, and animal care facilities.</p>
    </div>
    <div class="clinic-gallery">
      <figure class="clinic-gallery__item clinic-gallery__item--wide">
        <img src="/img/clinic/clinic-reception-display.jpg" alt="V Pet Care Animal Clinic reception area showing a wall-mounted medication cabinet and open shelf stocked with veterinary products, supplements, and pet food" loading="lazy" width="900" height="675">
        <figcaption>Reception &amp; Product Display</figcaption>
      </figure>
      <figure class="clinic-gallery__item">
        <img src="/img/clinic/clinic-pharmacy-shelves.jpg" alt="Pharmacy shelving unit at V Pet Care stocked with veterinary supplements, pet food brands including Petcal, Petliv, Pet AMINO, and grooming products" loading="lazy" width="450" height="600">
        <figcaption>Pharmaceutical &amp; Supplement Dispensary</figcaption>
      </figure>
      <figure class="clinic-gallery__item">
        <img src="/img/clinic/clinic-surgical-table.jpg" alt="Stainless steel veterinary examination and surgical table at V Pet Care Animal Clinic with surgical instruments including scissors and forceps laid out" loading="lazy" width="450" height="600">
        <figcaption>Examination &amp; Surgical Suite</figcaption>
      </figure>
      <figure class="clinic-gallery__item">
        <img src="/img/clinic/clinic-kennels.jpg" alt="Animal boarding kennels and holding cages at V Pet Care Animal Clinic with stainless steel wash station visible in the background" loading="lazy" width="450" height="600">
        <figcaption>Boarding &amp; Kennel Facilities</figcaption>
      </figure>
      <figure class="clinic-gallery__item">
        <img src="/img/clinic/clinic-waiting-area.jpg" alt="V Pet Care Animal Clinic waiting area with a large framed print of dogs and cats, wall-mounted fan, and adjacent medication cabinet" loading="lazy" width="450" height="600">
        <figcaption>Client Waiting Area</figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="section section--tinted">
  <div class="wrap">
    <div class="section-head section-head--center">
      <p class="eyebrow">What We Offer</p>
      <h2>Clinical Services</h2>
      <p class="subtitle">Comprehensive veterinary services designed to keep your animals healthy at every stage of life.</p>
    </div>
    <div class="pillars-index">
      <div class="pillar-box">
        <div class="pillar-box__top"><span class="pillar-box__num">01</span><span class="pillar-box__tag">Wellness</span></div>
        <h4>Veterinary Consultations</h4>
        <p>Routine health check-ups, vaccination planning, parasite control, and preventive care advice from qualified veterinary professionals.</p>
      </div>
      <div class="pillar-box">
        <div class="pillar-box__top"><span class="pillar-box__num">02</span><span class="pillar-box__tag">Surgery</span></div>
        <h4>Surgical Services</h4>
        <p>Minor and major surgical procedures carried out in our dedicated surgical suite equipped with proper instrumentation and sterile protocols.</p>
      </div>
      <div class="pillar-box">
        <div class="pillar-box__top"><span class="pillar-box__num">03</span><span class="pillar-box__tag">Pharmacy</span></div>
        <h4>Pharmaceutical Dispensary</h4>
        <p>In-clinic dispensary stocking veterinary medicines, supplements, prescription diets, grooming products, and specialty pet nutrition brands.</p>
      </div>
      <div class="pillar-box">
        <div class="pillar-box__top"><span class="pillar-box__num">04</span><span class="pillar-box__tag">Boarding</span></div>
        <h4>Animal Boarding &amp; Kenneling</h4>
        <p>Safe, supervised boarding facilities for dogs and cats, with proper kennel accommodation and sanitation standards.</p>
      </div>
    </div>
  </div>
</section>

<section class="banner-cta">
  <div class="wrap banner-cta__in">
    <div>
      <p class="eyebrow eyebrow--gold">Book an Appointment</p>
      <h2>Bring your animal in for a consultation</h2>
      <p>Contact us to schedule a veterinary consultation, surgical assessment, or boarding arrangement at V Pet Care Animal Clinic.</p>
    </div>
    <div class="banner-cta__btns">
      <a class="btn btn--gold" href="tel:+94702488090">Call +94 70 248 8090</a>
      <a class="btn btn--ghost-white" href="/#contact">Send a Message</a>
    </div>
  </div>
</section>`,
});

const researchSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'GAFOH Research Ethics & Compliance Services',
  description: 'Independent research ethics review, compliance guidance, and responsible research support under the One Health framework by GAFOH Sri Lanka.',
  url: 'https://www.gafoh.org/research',
  provider: { '@type': 'NGO', name: 'Global Alliance for Food and One Health (GAFOH) Sri Lanka', url: 'https://www.gafoh.org' },
  serviceType: ['Research Ethics Review', 'Research Compliance Guidance', 'Ethical Compliance Reports', 'Research Oversight', 'Animal Research Ethics', 'One Health Assessment'],
  areaServed: { '@type': 'Country', name: 'Sri Lanka' },
  priceSpecification: [
    { '@type': 'PriceSpecification', name: 'Foreign-funded projects', price: 100, priceCurrency: 'USD' },
    { '@type': 'PriceSpecification', name: 'Locally funded projects', price: 25000, priceCurrency: 'LKR' },
    { '@type': 'PriceSpecification', name: 'Local volunteer/student/community research', price: 10000, priceCurrency: 'LKR' }
  ]
});

const research = () => layout({
  title: 'Research Ethics & Compliance | GAFOH Sri Lanka',
  description: 'GAFOH Sri Lanka provides independent research ethics review, compliance guidance, and responsible research support aligned with One Health principles for researchers, institutions, and project partners.',
  path: '/research',
  schema: researchSchema,
  body: `

<!-- ── Hero ──────────────────────────────────────────────────── -->
<section class="research-hero">
  <div class="wrap research-hero__in">
    <p class="eyebrow eyebrow--gold">Global Alliance for Food and One Health — GAFOH</p>
    <h1>Research and<br>Research Review</h1>
    <p class="research-hero__sub">Research Ethics, Compliance &amp; Responsible Research</p>
    <p class="research-hero__lead">Promoting responsible research for healthier people, healthier animals and a healthier environment.</p>
    <div class="research-hero__links">
      <a class="research-hero__contact" href="mailto:info@gafoh.org">${icon('mail', 'ico--sm')}<span>info@gafoh.org</span></a>
      <a class="research-hero__contact" href="tel:+94702488090">${icon('phone', 'ico--sm')}<span>+94 70 248 8090</span></a>
    </div>
  </div>
</section>

<!-- ── About ─────────────────────────────────────────────────── -->
<section class="section">
  <div class="wrap">
    <div class="research-about">
      <p class="eyebrow">Our Approach</p>
      <p class="research-about__lead">At Global Alliance for Food and One Health (GAFOH), we support researchers, institutions, organizations and project partners in planning and conducting research that is scientifically sound, ethically responsible, socially appropriate and aligned with One Health principles.</p>
      <p class="research-about__body">Our approach recognizes that the health and wellbeing of people, animals, food systems and the environment are interconnected. We therefore encourage responsible research practices that consider scientific integrity, animal welfare, human and community wellbeing, environmental responsibility and public-health implications throughout the research lifecycle.</p>
      <div class="research-pillars">
        <div class="research-pillar">
          <span class="research-pillar__icon" style="background:rgba(47,158,87,.1);color:var(--leaf)">${icon('heart')}</span>
          <strong>People</strong><span>Human wellbeing &amp; community</span>
        </div>
        <div class="research-pillar">
          <span class="research-pillar__icon" style="background:rgba(201,162,39,.1);color:var(--gold)">${icon('sprout')}</span>
          <strong>Animals</strong><span>Welfare &amp; ethical use</span>
        </div>
        <div class="research-pillar">
          <span class="research-pillar__icon" style="background:rgba(27,107,58,.1);color:var(--green)">${icon('globe')}</span>
          <strong>Environment</strong><span>Food systems &amp; ecosystems</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── Services ──────────────────────────────────────────────── -->
<section class="section section--tinted" id="services">
  <div class="wrap">
    <div class="section-head section-head--center">
      <p class="eyebrow">Service Portfolio</p>
      <h2>What We Provide</h2>
      <p class="subtitle">Comprehensive support across the full research lifecycle — from proposal design to dissemination.</p>
    </div>
    <div class="research-grid">

      <article class="research-card">
        <div class="research-card__head">
          <span class="research-card__icon" style="background:rgba(47,158,87,.1);color:var(--leaf)">${icon('eye')}</span>
          <div><span class="research-card__num">01</span><h4 class="research-card__name">Research Proposal Review</h4></div>
        </div>
        <p>Independent technical and methodological review of research proposals, study protocols, project designs and research instruments to identify scientific, ethical, operational and One Health considerations before implementation.</p>
      </article>

      <article class="research-card">
        <div class="research-card__head">
          <span class="research-card__icon" style="background:rgba(201,162,39,.1);color:var(--gold)">${icon('shield')}</span>
          <div><span class="research-card__num">02</span><h4 class="research-card__name">Research Ethics &amp; Compliance Guidance</h4></div>
        </div>
        <p>Guidance on ethical principles, responsible research practices, animal welfare, human-participant considerations, informed consent, confidentiality, risk assessment, biosafety, environmental considerations and relevant institutional or regulatory requirements.</p>
      </article>

      <article class="research-card">
        <div class="research-card__head">
          <span class="research-card__icon" style="background:rgba(27,107,58,.1);color:var(--green)">${icon('book')}</span>
          <div><span class="research-card__num">03</span><h4 class="research-card__name">Ethical Compliance Reports</h4></div>
        </div>
        <p>Preparation of structured ethical and responsible-research compliance assessments identifying areas of compliance, potential ethical concerns, required safeguards and recommendations for improvement.</p>
      </article>

      <article class="research-card">
        <div class="research-card__head">
          <span class="research-card__icon" style="background:rgba(22,36,27,.07);color:var(--green-d)">${icon('chart')}</span>
          <div><span class="research-card__num">04</span><h4 class="research-card__name">Project Monitoring &amp; Research Oversight</h4></div>
        </div>
        <p>Periodic monitoring and review of research and development projects to assess implementation against approved protocols, ethical commitments, project objectives, risk-management measures and responsible research standards.</p>
      </article>

      <article class="research-card">
        <div class="research-card__head">
          <span class="research-card__icon" style="background:rgba(47,158,87,.1);color:var(--leaf)">${icon('heart')}</span>
          <div><span class="research-card__num">05</span><h4 class="research-card__name">Responsible Animal Research</h4></div>
        </div>
        <p>Guidance on the ethical and scientific use of animals in research, including animal welfare, appropriate study design, reduction of unnecessary animal use, humane procedures and responsible management of experimental animals.</p>
      </article>

      <article class="research-card">
        <div class="research-card__head">
          <span class="research-card__icon" style="background:rgba(201,162,39,.1);color:var(--gold)">${icon('users')}</span>
          <div><span class="research-card__num">06</span><h4 class="research-card__name">Social &amp; Community Research Ethics</h4></div>
        </div>
        <p>Guidance for studies involving communities, households, farmers, workers and other social groups, with emphasis on dignity, voluntary participation, informed consent, privacy, confidentiality, cultural sensitivity and minimization of potential harm.</p>
      </article>

      <article class="research-card">
        <div class="research-card__head">
          <span class="research-card__icon" style="background:rgba(27,107,58,.1);color:var(--green)">${icon('globe')}</span>
          <div><span class="research-card__num">07</span><h4 class="research-card__name">Public Health &amp; One Health Assessment</h4></div>
        </div>
        <p>Assessment of research and projects for potential implications for animal health, human health, food safety, environmental health and emerging One Health risks.</p>
      </article>

      <article class="research-card">
        <div class="research-card__head">
          <span class="research-card__icon" style="background:rgba(22,36,27,.07);color:var(--green-d)">${icon('flag')}</span>
          <div><span class="research-card__num">08</span><h4 class="research-card__name">Research Integrity &amp; Good Research Practice</h4></div>
        </div>
        <p>Support for researchers in strengthening transparency, accountability, appropriate data management, responsible authorship, conflict-of-interest management, reporting practices and research integrity.</p>
      </article>

      <article class="research-card">
        <div class="research-card__head">
          <span class="research-card__icon" style="background:rgba(47,158,87,.1);color:var(--leaf)">${icon('arrow')}</span>
          <div><span class="research-card__num">09</span><h4 class="research-card__name">Responsible Research Guidance</h4></div>
        </div>
        <p>Practical advice throughout the research lifecycle—from concept development and protocol preparation to implementation, monitoring, analysis, reporting and dissemination.</p>
      </article>

    </div>
  </div>
</section>

<!-- ── Fees ──────────────────────────────────────────────────── -->
<section class="section section--dark" id="fees">
  <div class="wrap">
    <div class="section-head section-head--center">
      <p class="eyebrow eyebrow--gold">Transparent Pricing</p>
      <h2 class="text-white">Nominal Service Fees</h2>
      <p class="subtitle text-light" style="max-width:680px;margin-inline:auto">Global Alliance for Food and One Health (GAFOH) Sri Lanka, a private consultancy organization. We work as a team to support and serve communities across Sri Lanka. As part of our activities, GAFOH also considers research proposals for ethical compliance review. We charge only a nominal fee for this service:</p>
    </div>
    <div class="research-fees research-fees--dark">
      <div class="fee-card fee-card--dark">
        <div class="fee-card__type">Foreign-Funded Projects</div>
        <div class="fee-card__amount">USD 100</div>
        <p class="fee-card__note">Per proposal or ethical compliance assessment</p>
      </div>
      <div class="fee-card fee-card--dark fee-card--featured-dark">
        <div class="fee-card__type">Locally Funded Projects</div>
        <div class="fee-card__amount">LKR 25,000</div>
        <p class="fee-card__note">Per proposal or ethical compliance assessment</p>
      </div>
      <div class="fee-card fee-card--dark">
        <div class="fee-card__type">Local Volunteer / Student Research / Low Income Community Based Projects</div>
        <div class="fee-card__amount">LKR 10,000</div>
        <p class="fee-card__note">Per proposal or ethical compliance assessment</p>
      </div>
    </div>
    <p class="research-fee-note" style="color:rgba(255,255,255,.65)">We are pleased to consider supporting worthwhile, community-oriented research projects that demonstrate scientific merit, ethical responsibility and meaningful potential to benefit communities, animal health, public health and the environment.</p>
  </div>
</section>

<!-- ── Disclaimer ─────────────────────────────────────────────── -->
<section class="section">
  <div class="wrap">
    <div class="disclaimer-box">
      <div class="disclaimer-box__icon">${icon('shield')}</div>
      <div>
        <h3 class="disclaimer-box__title">Important Disclaimer</h3>
        <p>GAFOH research ethics and compliance services provide independent technical and responsible-research guidance. Where formal ethical approval, regulatory authorization or institutional clearance is legally or institutionally required, researchers remain responsible for obtaining approval from the appropriate recognized ethics review committee, regulatory authority or institution if necessary.</p>
      </div>
    </div>
  </div>
</section>

<!-- ── CTA ────────────────────────────────────────────────────── -->
<section class="banner-cta">
  <div class="wrap banner-cta__in">
    <div>
      <p class="eyebrow eyebrow--gold">Submit a Proposal</p>
      <h2>Ready to begin the review process?</h2>
      <p>Contact our team to discuss your research proposal, clarify requirements, or initiate an ethical compliance assessment.</p>
    </div>
    <div class="banner-cta__btns">
      <a class="btn btn--gold" href="mailto:info@gafoh.org">Email Us</a>
      <a class="btn btn--ghost-white" href="/#contact">Send a Message</a>
    </div>
  </div>
</section>`,
});

module.exports = { '/': home, '/support': support, '/legal-notice': legalNotice, '/privacy': privacy, '/clinic': clinic, '/research': research, notFound };
