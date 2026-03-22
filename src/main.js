import './style.css';
import { initI18n } from './i18n.js';

const services = [
  { title: 'BRANDING & VISUAL IDENTITY', img: '/assets/Servicii/1.png' },
  { title: 'WEB DESIGN & DEVELOPMENT', img: '/assets/Servicii/2.png' },
  { title: 'GRAPHIC DESIGN & CAMPAIGNS', img: '/assets/Servicii/3.png' },
  { title: 'VIDEO PRODUCTION & EDITING', img: '/assets/Servicii/4.png' }
];

const reviews = [
  { text: 'Ne-a făcut logo-ul și tot brandul de la zero. Sincer, nu mă așteptam să fie chiar atât de bine — toți clienții ne întreabă cine ne-a făcut identitatea.', name: 'Alexandru M.', role: 'CEO, Tech Startup', initials: 'AM' },
  { text: 'Am trecut prin 3 designeri înainte de Vlad. El a fost singurul care a prins exact ce voiam fără să-i explic de 10 ori. Rapid, curat, fără bătăi de cap.', name: 'Maria D.', role: 'Marketing Manager', initials: 'MD' },
  { text: 'Lucrez cu el de vreo 2 ani deja. De fiecare dată livrează peste ce cer. Materialele pentru social media arată bestial, nu am ce zice.', name: 'Cristian P.', role: 'Founder, E-commerce', initials: 'CP' },
  { text: 'Ne-a refăcut tot site-ul și identitatea vizuală. Am primit feedback doar pozitiv de la partenerii noștri. Recomand fără ezitare.', name: 'Ioana R.', role: 'Director Creativ', initials: 'IR' },
  { text: 'Site-ul pe care ni l-a făcut arată de 10 ori mai bine decât competiția. Plus că a venit cu idei proprii, nu a așteptat doar brief-ul.', name: 'Andrei S.', role: 'Owner, Digital Agency', initials: 'AS' },
  { text: 'Am avut un deadline imposibil pentru un pitch și Vlad a reușit să livreze tot pachetul vizual în 3 zile. Calitate top, chiar și sub presiune.', name: 'Elena T.', role: 'Brand Manager', initials: 'ET' },
  { text: 'Ne-a făcut un video promo care a strâns 50k vizualizări organic. Nu credeam că o să iasă ceva atât de profi din bugetul nostru mic.', name: 'Dan V.', role: 'Co-founder, SaaS', initials: 'DV' },
  { text: 'Tipul face treabă bună și nu complică lucrurile. Asta e rar. Îi zici ce vrei, înțelege repede, și primești ceva mișto.', name: 'Laura B.', role: 'Owner, Boutique Hotel', initials: 'LB' },
  { text: 'A fost singura persoană care ne-a convins că rebrandingul merită. Și a avut dreptate — vânzările online au crescut cu 30% după schimbare.', name: 'Mihai C.', role: 'CEO, Retail Brand', initials: 'MC' }
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
  initBrandsRow();
  initNavbar();
  initCursorTracking();
  initScrollDrivenRows();
  initI18n();
  initAboutTitleParticles();
  initScrollReveal();
  initAboutFloatingObjects();
  initReviewsDrag();

  // Re-apply particles after language change
  document.addEventListener('languageChange', () => {
    setTimeout(() => initAboutTitleParticles(), 50);
  });
});

// ===== ABOUT TITLE — PARTICLE ASSEMBLY =====
function initAboutTitleParticles() {
  const title = document.querySelector('.about-title');
  if (!title) return;

  // Get current text (may already be translated)
  const text = title.textContent;
  title.innerHTML = '';
  title.classList.remove('visible');

  [...text].forEach((char, i) => {
    const span = document.createElement('span');
    span.classList.add('char');
    span.textContent = char === ' ' ? '\u00A0' : char;

    // Random scatter: big offsets, random rotation, random scale
    const randX = (Math.random() - 0.5) * 600;
    const randY = (Math.random() - 0.5) * 400;
    const randRotate = (Math.random() - 0.5) * 120;
    const randScale = 0.3 + Math.random() * 0.5;

    span.style.transform = `translate(${randX}px, ${randY}px) rotate(${randRotate}deg) scale(${randScale})`;
    span.style.transitionDelay = `${i * 0.04}s`;

    title.appendChild(span);
  });
}

// ===== RENDER SERVICES (in projects section) =====
function initProjects() {
  const container = document.getElementById('projectsShowcase');
  if (!container) return;
  container.innerHTML = services.map((s, i) => `
    <a href="#contact" class="project-card" style="--i:${i + 1}">
      <span class="project-number">${String(i + 1).padStart(2, '0')}</span>
      <div class="project-card-content">
        <h3 class="project-title">${s.title}</h3>
        <div class="project-card-images">
          <div class="project-card-img"><img src="${s.img}" alt="${s.title}" /></div>
        </div>
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
  const reviewsTrack = document.getElementById('reviewsTrack');
  const heroBottomRow = document.querySelector('.hero-bottom-row');
  const brandsTitle = document.getElementById('brandsTitle');
  const avatarContainer = document.getElementById('avatarContainer');

  if (!brandsRow && !galleryRow1 && !galleryRow2 && !reviewsTrack) return;

  // Row 1 starts further left, Row 2 starts further right
  const initialOffset1 = -800;
  const initialOffset2 = 0;

  let ticking = false;

  function updateScroll() {
    const scrollY = window.scrollY;
    const tilt = -2;

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

    // Reviews: scroll LEFT relative to section position + user drag offset
    if (reviewsTrack) {
      const reviewsSection = reviewsTrack.closest('.reviews');
      const sectionTop = reviewsSection.getBoundingClientRect().top + scrollY;
      const relativeScroll = scrollY - sectionTop + window.innerHeight;
      const dragOffset = parseFloat(reviewsTrack.dataset.dragOffset || 0);
      if (relativeScroll > 0) {
        reviewsTrack.style.transform = `translateX(${200 + relativeScroll * -0.4 + dragOffset}px)`;
      }
    }

    // Hero bottom → Brands title transition (when avatar scrolls out)
    if (avatarContainer && heroBottomRow && brandsTitle) {
      const avatarRect = avatarContainer.getBoundingClientRect();
      const avatarBottom = avatarRect.bottom;
      // Start transition when avatar is near top of viewport, complete faster
      const progress = Math.min(1, Math.max(0, (200 - avatarBottom) / 200));
      
      // Fade out hero bottom row
      heroBottomRow.style.opacity = 1 - progress;
      heroBottomRow.style.transform = `translateY(${-progress * 30}px) scale(${1 - progress * 0.1})`;
      
      // Fade in brands title
      brandsTitle.style.opacity = progress;
      brandsTitle.style.transform = `translateY(${(1 - progress) * 20}px) rotate(-2deg)`;
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

  document.querySelectorAll('.reveal, .section-mega-title, .service-item, .review-card, .project-item, .contact-inner, .about-text-block, .about-title').forEach(el => {
    if (!el.classList.contains('reveal') && !el.classList.contains('about-title')) el.classList.add('reveal');
    observer.observe(el);
  });
}

// ===== ABOUT FLOATING OBJECTS — SCROLL-DRIVEN =====
function initAboutFloatingObjects() {
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;

  const floatingObjs = aboutSection.querySelectorAll('.floating-obj');
  if (!floatingObjs.length) return;

  // Config: direction per object (negative = from left, positive = from right)
  const objConfig = [
    { offsetX: -500 },  // obj--1: comes from left
    { offsetX: 500 },   // obj--2: comes from right
    { offsetX: 500 },   // obj--3: comes from right
    { offsetX: -500 },  // obj--4: comes from left
  ];

  // Set initial state: fully off-screen
  floatingObjs.forEach((obj, i) => {
    const config = objConfig[i] || { offsetX: -500 };
    obj.style.transform = `translateX(${config.offsetX}px)`;
    obj.style.opacity = '0';
  });

  let ticking = false;

  function updateFloatingObjects() {
    const rect = aboutSection.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Calculate progress: 0 when section top enters viewport bottom, 1 when section top reaches viewport top
    const progress = Math.min(1, Math.max(0, (windowH - rect.top) / (windowH + rect.height * 0.3)));

    // Ease function for smoother feel
    const eased = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    floatingObjs.forEach((obj, i) => {
      const config = objConfig[i] || { offsetX: -500 };
      const currentX = config.offsetX * (1 - eased);
      obj.style.transform = `translateX(${currentX}px)`;
      obj.style.opacity = `${eased}`;
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateFloatingObjects);
      ticking = true;
    }
  }, { passive: true });

  // Initial update
  updateFloatingObjects();
}

// ===== LANGUAGE =====
window.setLanguage = function (lang) {
  document.dispatchEvent(new CustomEvent('languageChange', { detail: { lang } }));
};

// ===== REVIEWS DRAG/SWIPE =====
function initReviewsDrag() {
  const track = document.getElementById('reviewsTrack');
  if (!track) return;

  let isDown = false;
  let startX;
  let startOffset;

  function onStart(x) {
    isDown = true;
    track.style.cursor = 'grabbing';
    startX = x;
    startOffset = parseFloat(track.dataset.dragOffset || 0);
  }

  function onMove(x) {
    if (!isDown) return;
    const walk = x - startX;
    track.dataset.dragOffset = startOffset + walk;
  }

  function onEnd() {
    isDown = false;
    track.style.cursor = 'grab';
  }

  track.style.cursor = 'grab';

  // Mouse events
  track.addEventListener('mousedown', (e) => { e.preventDefault(); onStart(e.pageX); });
  window.addEventListener('mousemove', (e) => { if (isDown) { e.preventDefault(); onMove(e.pageX); } });
  window.addEventListener('mouseup', onEnd);

  // Touch events
  track.addEventListener('touchstart', (e) => onStart(e.touches[0].pageX), { passive: true });
  track.addEventListener('touchmove', (e) => onMove(e.touches[0].pageX), { passive: true });
  track.addEventListener('touchend', onEnd);
}
