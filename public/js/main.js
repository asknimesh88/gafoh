const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => { if (e.target.closest('a')) { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); } });

document.querySelectorAll('[role=tab]').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('[role=tab]').forEach(t => {
    const isSelected = t === tab;
    t.setAttribute('aria-selected', isSelected);
    t.classList.toggle('active', isSelected);
  });
  document.querySelectorAll('.tab-panel, .panel').forEach(p => {
    const isMatch = p.id === tab.dataset.tab;
    p.hidden = !isMatch;
    p.classList.toggle('active', isMatch);
  });
}));

const form = document.getElementById('contact-form');
if (form) form.addEventListener('submit', async e => {
  e.preventDefault();
  const status = form.querySelector('.status');
  const btn = form.querySelector('button');
  btn.disabled = true;
  status.className = 'status';
  status.textContent = 'Sending...';
  try {
    const res = await fetch(form.action, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
    const data = await res.json();
    if (!res.ok) throw new Error(data.errors?.[0]?.message || data.error || 'Something went wrong.');
    form.reset();
    status.className = 'status ok';
    status.textContent = 'Thank you! We will get back to you soon.';
  } catch (err) {
    status.className = 'status err';
    status.textContent = err.message || 'Something went wrong. Please try again.';
  }
  btn.disabled = false;
});
