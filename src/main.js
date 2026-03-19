import './style.css';
import { initI18n } from './i18n.js';

// ===== PROJECT DATA =====
const projects = [
  { title: 'BGS – National Campaign', category: 'Visual Development', client: 'BGS', url: 'https://www.behance.net/gallery/245553355/BGS-National-Campaign-Visual-Development', imgs: ['/assets/gallery1.png', '/assets/gallery2.png'] },
  { title: 'SpaceDev Logo Design', category: 'Branding / Logo', client: 'SpaceDev', url: 'https://www.behance.net/gallery/245064453/SpaceDev-Logo-Design', imgs: ['/assets/gallery3.png', '/assets/gallery4.png'] },
  { title: 'Oradea Parking App', category: 'Tutorial Series', client: 'Primăria Oradea', url: 'https://www.behance.net/gallery/245062349/Oradea-Parking-App-Official-Tutorial-Series', imgs: ['/assets/gallery5.png', '/assets/gallery6.png'] }
];

const reviews = [
  { text: 'Vlad a transformat complet identitatea vizuală a brandului nostru. Profesionalism și creativitate la cel mai înalt nivel!', name: 'Alexandru M.', role: 'CEO, Tech Startup', initials: 'AM' },
  { text: 'Colaborarea cu Vlad a fost excepțională. A înțeles perfect viziunea noastră și a livrat un design care a depășit așteptările.', name: 'Maria D.', role: 'Marketing Manager', initials: 'MD' },
  { text: 'Design-urile lui Vlad sunt mereu creative și profesionale. Recomand cu încredere pentru orice proiect de branding sau UI/UX!', name: 'Cristian P.', role: 'Founder, E-commerce', initials: 'CP' }
];

const services = [
  { title: 'BRANDING & IDENTITATE VIZUALĂ', description: 'Crearea de logo-uri, identități vizuale complete și ghiduri de brand care definesc și diferențiază afacerea ta pe piață.' },
  { title: 'WEB DESIGN & UI/UX', description: 'Design de site-uri web și interfețe intuitive, orientate către conversie, cu focus pe experiența utilizatorului.' },
  { title: 'GRAPHIC DESIGN & CAMPANII', description: 'Materiale vizuale pentru campanii publicitare, social media și print — de la concept la execuție.' },
  { title: 'MOTION GRAPHICS & ANIMAȚIE', description: 'Animații de logo, motion graphics pentru social media și conținut video dinamic pentru brandurile tale.' }
];

const brands = [
  'BGS', 'ShopBGS', 'Origo', 'Brewzeus', 'Absolut', 'Havana',
  "Ballantine's", 'Chivas', 'Steam Coffee Shop', 'Trofic Food',
  'Huawei', 'SpaceDev', 'Primăria Oradea', 'Napoleon Games', 'Superbet'
];

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initProjects();
  initReviews();
  initServices();
  initBrandsRow();
  initNavbar();
  initCursorTracking();
  initScrollDrivenRows();
  initScrollReveal();
  initI18n();
});

// ===== RENDER PROJECTS =====
function initProjects() {
  const container = document.getElementById('projectsShowcase');
  if (!container) return;
  container.innerHTML = projects.map((p, i) => `
    <a href="${p.url}" target="_blank" rel="noopener" class="project-card" style="--i:${i + 1}">
      <div class="project-card-header">
        <div class="project-card-left">
          <span class="project-number">${String(i + 1).padStart(2, '0')}</span>
          <div class="project-card-meta">
            <span class="project-category">${p.category}</span>
            <h3 class="project-title">${p.client}</h3>
          </div>
        </div>
        <span class="project-live-btn">LIVE PROJECT</span>
      </div>
      <div class="project-card-images">
        <div class="project-card-img"><img src="${p.imgs[0]}" alt="${p.title}" /></div>
        <div class="project-card-img"><img src="${p.imgs[1]}" alt="${p.title}" /></div>
      </div>
    </a>
  `).join('');
}

// ===== RENDER REVIEWS =====
function initReviews() {
  const track = document.getElementById('reviewsTrack');
  if (!track) return;
  track.innerHTML = reviews.map((r) => `
    <div class="review-card reveal">
      <div class="review-stars">${'<span class="review-star">★</span>'.repeat(5)}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-author">
        <div class="review-avatar">${r.initials}</div>
        <div>
          <div class="review-author-name">${r.name}</div>
          <div class="review-author-role">${r.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== RENDER SERVICES =====
function initServices() {
  const container = document.getElementById('servicesList');
  if (!container) return;
  container.innerHTML = services.map((s, i) => `
    <div class="service-item reveal">
      <span class="service-number">${String(i + 1).padStart(2, '0')}</span>
      <div class="service-content">
        <h3>${s.title}</h3>
        <p>${s.description}</p>
      </div>
    </div>
  `).join('');
}

// ===== RENDER BRANDS ROW =====
function initBrandsRow() {
  const row = document.getElementById('brandsRow');
  if (!row) return;
  // Double the brands so we have enough to fill scrolling
  const doubled = [...brands, ...brands, ...brands];
  row.innerHTML = doubled.map(b => `<span class="brand-item">${b}</span>`).join('');
}

// ===== SCROLL-DRIVEN HORIZONTAL MOVEMENT =====
function initScrollDrivenRows() {
  const brandsRow = document.getElementById('brandsRow');
  const galleryRow1 = document.getElementById('galleryRow1');
  const galleryRow2 = document.getElementById('galleryRow2');

  if (!brandsRow && !galleryRow1 && !galleryRow2) return;

  // Center the gallery rows initially (negative offset so they're partially off-screen)
  const initialOffset1 = -400;
  const initialOffset2 = -200;

  let ticking = false;

  function updateScroll() {
    const scrollY = window.scrollY;
    const tilt = -2; // same angle for all rows

    // Brands: scroll LEFT
    if (brandsRow) {
      brandsRow.style.transform = `translateX(${scrollY * -0.5}px) rotate(${tilt}deg)`;
    }

    // Gallery row 1: scroll RIGHT
    if (galleryRow1) {
      galleryRow1.style.transform = `translateX(${initialOffset1 + scrollY * 0.4}px) rotate(${tilt}deg)`;
    }

    // Gallery row 2: scroll LEFT
    if (galleryRow2) {
      galleryRow2.style.transform = `translateX(${initialOffset2 + scrollY * -0.3}px) rotate(${tilt}deg)`;
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateScroll);
      ticking = true;
    }
  }, { passive: true });

  // Initial position
  updateScroll();
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
    updateActiveNav();
  });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.forEach(nl => nl.classList.toggle('open'));
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      navLinks.forEach(nl => nl.classList.remove('open'));
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

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY + 200;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (scrollY >= top && scrollY < top + height) {
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      link?.classList.add('active');
    }
  });
}

// ===== CURSOR TRACKING — OPPOSITE TRANSLATE =====
function initCursorTracking() {
  const avatar = document.getElementById('avatar3d');
  if (!avatar) return;
  let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
  const maxMove = 18; // max pixels to shift
  window.addEventListener('mousemove', (e) => {
    // Normalized cursor position from center of viewport: -1 to 1
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;
    // Move in opposite direction
    targetX = -nx * maxMove;
    targetY = -ny * maxMove;
  });
  function animate() {
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;
    avatar.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(animate);
  }
  animate();
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

  document.querySelectorAll('.reveal, .section-mega-title, .service-item, .review-card, .project-item, .contact-inner, .about-text-block').forEach(el => {
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
    observer.observe(el);
  });
}

// ===== LANGUAGE =====
window.setLanguage = function(lang) {
  document.dispatchEvent(new CustomEvent('languageChange', { detail: { lang } }));
};
