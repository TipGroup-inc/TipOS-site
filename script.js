const header = document.querySelector('[data-header]');
const progress = document.querySelector('.scroll-progress span');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const menuBackdrop = document.querySelector('.menu-backdrop');
const navLinks = [...document.querySelectorAll('.site-nav a')];
const sections = [...document.querySelectorAll('main section[id]')];

let scrollScheduled = false;

function updateScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progressValue = max > 0 ? window.scrollY / max : 0;
  header?.classList.toggle('scrolled', window.scrollY > 30);
  progress?.style.setProperty('--scroll', String(progressValue));
  scrollScheduled = false;
}

function scheduleScrollUpdate() {
  if (scrollScheduled) return;
  scrollScheduled = true;
  window.requestAnimationFrame(updateScroll);
}

function setMenu(open) {
  toggle?.classList.toggle('open', open);
  toggle?.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('open', open);
  menuBackdrop?.classList.toggle('visible', open);
  menuBackdrop?.setAttribute('aria-hidden', String(!open));
  menuBackdrop?.toggleAttribute('tabindex', !open);
  document.body.classList.toggle('menu-open', open);
}

function closeMenu() {
  setMenu(false);
}

toggle?.addEventListener('click', () => {
  setMenu(!nav?.classList.contains('open'));
});

menuBackdrop?.addEventListener('click', closeMenu);
navLinks.forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -42px' });

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
    });
  }, { rootMargin: '-35% 0px -52% 0px', threshold: 0 });

  sections.forEach((section) => sectionObserver.observe(section));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}

window.addEventListener('scroll', scheduleScrollUpdate, { passive: true });
window.addEventListener('resize', scheduleScrollUpdate);
updateScroll();

const startedAt = Date.now();
function updateUptime() {
  const target = document.querySelector('[data-uptime]');
  if (!target) return;
  const elapsed = Math.floor((Date.now() - startedAt) / 1000);
  const hours = String(Math.floor(elapsed / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
  const seconds = String(elapsed % 60).padStart(2, '0');
  target.textContent = `UPTIME ${hours}:${minutes}:${seconds}`;
}

updateUptime();
window.setInterval(updateUptime, 1000);
