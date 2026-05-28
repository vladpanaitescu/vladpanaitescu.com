import './style.css';
import { initI18n, getCurrentLang, translationData } from './i18n.js';

// ===== CARSPOTTING LINKS DATA =====
const carspottingCards = [
  {
    title: "Facebook Group",
    subtitle: "Car Spotting Group",
    cover: "/Images/covers/facebook_cover.png",
    url: "https://www.facebook.com/groups/1193097344457913",
    owner: ""
  },
  {
    title: "TikTok Profile",
    subtitle: "Car Spotting TikTok",
    cover: "/Images/covers/tiktok_cover.png",
    url: "https://www.tiktok.com/@vlad.panaitescu",
    owner: ""
  },
  {
    type: 'pair',
    items: [
      {
        subtitle: "Play Carguessr for free!",
        cover: "/Images/covers/appstore_cover.png",
        url: "https://apps.apple.com/ro/app/carguessr-car-quiz-trivia/id6745273769",
        owner: ""
      },
      {
        subtitle: "Play Carguessr for free!",
        cover: "/Images/covers/googleplay_cover.png",
        url: "https://play.google.com/store/apps/details?id=com.micomtechnologies.carguessr",
        owner: ""
      }
    ]
  },
  {
    title: "carVertical Partner",
    subtitle: "Use CARSPOTTING for 20% off.",
    cover: "/Images/covers/carvertical_new_cover.png",
    url: "https://www.carvertical.com/ro/landing/v3?utm_source=aff&a=67f503b2388f6&b=0eb206ae&chan=2&voucher=carspotting",
    owner: ""
  }
];

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  const hero = document.getElementById('hero');
  const navbar = document.getElementById('navbar');
  if (hero) hero.style.opacity = '0';
  if (navbar) navbar.style.opacity = '0';

  initCarspottingGrid();
  initStatsCounter();
  initNavbar();
  initScrollReveal();
  initI18n();

  function revealSite() {
    const loader = document.getElementById('loaderOverlay');
    if (loader) loader.classList.add('hidden');
    setTimeout(() => {
      if (hero) { hero.style.transition = 'opacity 1s ease'; hero.style.opacity = '1'; }
      if (navbar) { navbar.style.transition = 'opacity 1s ease 0.3s'; navbar.style.opacity = '1'; }
    }, 100);
  }

  if (document.readyState === 'complete') {
    revealSite();
  } else {
    window.addEventListener('load', revealSite);
    setTimeout(revealSite, 8000);
  }
});

// ===== GRID rendering =====
function initCarspottingGrid() {
  const grid = document.getElementById('carspottingGrid');
  if (!grid) return;

  grid.innerHTML = carspottingCards.map((c, i) => {
    if (c.type === 'pair') {
      const inner = c.items.map((item, j) => `
        <a href="${item.url}" target="_blank" rel="noopener" class="project-grid-card pair-card reveal" data-card-index="${i}-${j}">
          <img class="project-grid-card-cover" src="${item.cover}" alt="${item.subtitle}" loading="eager" />
          <div class="project-grid-card-info">
            <div class="project-grid-card-title">${item.subtitle}</div>
            <div class="project-grid-card-owner">${item.owner}</div>
          </div>
        </a>`).join('');
      return `<div class="pair-wrapper">${inner}</div>`;
    }
    return `
    <a href="${c.url}" target="_blank" rel="noopener" class="project-grid-card reveal" data-card-index="${i}">
      <img class="project-grid-card-cover" src="${c.cover}" alt="${c.subtitle}" loading="eager" />
      <div class="project-grid-card-info">
        <div class="project-grid-card-title">${c.subtitle}</div>
        <div class="project-grid-card-owner">${c.owner}</div>
      </div>
    </a>`;
  }).join('');
}

// ===== STATS COUNTER ANIMATION =====
function initStatsCounter() {
  const counters = document.querySelectorAll('.stats-card-num, .stats-total-num');
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        animateCounter(target);
        obs.unobserve(target);
      }
    });
  }, { threshold: 0.1 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'), 10);
  const duration = 2000; // 2 seconds
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease-out cubic for a premium, deceleration curve feel
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    
    const currentValue = Math.floor(start + easeProgress * (target - start));
    
    // Format with commas/dots based on standard formatting
    el.textContent = currentValue.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(update);
}

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelectorAll('.nav-links');
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.forEach(nl => nl.classList.toggle('open'));
    document.body.classList.toggle('menu-open');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      navLinks.forEach(nl => nl.classList.remove('open'));
      document.body.classList.remove('menu-open');
    });
  });

  langBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
  });

  document.addEventListener('click', () => langDropdown?.classList.remove('open'));

  document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      setLanguage(option.dataset.lang);
      langDropdown.classList.remove('open');
    });
  });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}

// ===== LANGUAGE GLOBAL HOOK =====
window.setLanguage = function (lang) {
  document.dispatchEvent(new CustomEvent('languageChange', { detail: { lang } }));
};
