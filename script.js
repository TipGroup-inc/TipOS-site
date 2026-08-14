const header = document.querySelector('[data-header]');
const progress = document.querySelector('.scroll-progress span');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = [...document.querySelectorAll('.site-nav a')];
const sections = [...document.querySelectorAll('main section[id]')];

function updateScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
  header?.classList.toggle('scrolled', window.scrollY > 30);
  progress?.style.setProperty('--scroll', `${percent}%`);
}

function closeMenu() {
  toggle?.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('open');
}

toggle?.addEventListener('click', () => {
  const isOpen = toggle.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  nav?.classList.toggle('open', isOpen);
});

navLinks.forEach((link) => link.addEventListener('click', closeMenu));

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

window.addEventListener('scroll', updateScroll, { passive: true });
window.addEventListener('resize', updateScroll);
updateScroll();

if (window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
  });

  document.querySelectorAll('.magnetic').forEach((button) => {
    button.addEventListener('pointermove', (event) => {
      const box = button.getBoundingClientRect();
      const x = (event.clientX - box.left - box.width / 2) * 0.12;
      const y = (event.clientY - box.top - box.height / 2) * 0.12;
      button.style.transform = `translate(${x}px, ${y}px)`;
    });
    button.addEventListener('pointerleave', () => { button.style.transform = ''; });
  });

  const terminal = document.querySelector('[data-tilt]');
  terminal?.addEventListener('pointermove', (event) => {
    const box = terminal.getBoundingClientRect();
    const rotateY = ((event.clientX - box.left) / box.width - 0.5) * 4;
    const rotateX = ((event.clientY - box.top) / box.height - 0.5) * -4;
    terminal.style.transform = `rotate(0deg) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(-8px)`;
  });
  terminal?.addEventListener('pointerleave', () => { terminal.style.transform = ''; });
}

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
