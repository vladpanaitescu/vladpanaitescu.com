const FLAGS = { ro: '🇷🇴', en: '🇬🇧', de: '🇩🇪', it: '🇮🇹', fr: '🇫🇷' };
const CODES = { ro: 'RO', en: 'EN', de: 'DE', it: 'IT', fr: 'FR' };

const translationData = {
  ro: {
    'nav.projects': 'PROIECTE',
    'nav.carspotting': 'CAR SPOTTING',
    'nav.contact': 'CONTACT',
    'nav.home': 'ACASĂ',
    'hero.greeting': 'BINE AI VENIT',
    'hero.description': 'Un Graphic Designer pasionat de crearea unor identități vizuale memorabile și experiențe digitale care inspiră 🎨',
    'hero.cta': 'CONTACTEAZĂ-MĂ',
    'projects.title': 'PROIECTE',
    'about.title': 'DESPRE MINE',
    'about.line1': 'Since 2021, I turn ideas into visuals that capture attention and drive results.',
    'about.line2': 'I\'ve created some of the most viral digital content online and collaborated with international brands to tell their stories in distinctive, memorable ways.',
    'about.line3': '',
    'about.line4': '',
    'about.line5': 'Hai să pornim un nou ciclu împreună.',
    'about.cta': 'CONTACTEAZĂ-MĂ',
    'services.title': 'SERVICII',
    'reviews.title': 'RECENZII',
    'brands.tag': 'CLIENȚI',
    'contact.title': 'CONTACT',
    'contact.description': 'Ai un proiect în minte? Hai să discutăm!',
    'contact.call': 'SUNĂ-MĂ',
    'footer.rights': 'Toate drepturile rezervate.',
    'community.title': 'COMUNITATE',
    'community.subtitle': 'Descoperă una dintre cele mai mari comunități multi-canal de pasionați auto din lume, creată chiar de mine.',
    'community.members': 'Followeri',
    'community.views': 'Vizualizări',
    'behance.label': 'VEZI PORTOFOLIUL COMPLET',
    'behance.tagline': 'Vrei să vezi mai mult?',
    'carspotting.greeting': 'WELCOME TO CAR SPOTTING',
    'carspotting.description': 'the biggest car enthusiast community',
    'carspotting.stats_title': 'IMPACTUL COMUNITĂȚII',
    'carspotting.stats_subtitle': 'Peste jumătate de milion de pasionați auto uniți pe toate platformele noastre.',
    'carspotting.total_followers': 'Total Urmăritori'
  },
  en: {
    'nav.projects': 'PROJECTS',
    'nav.carspotting': 'CAR SPOTTING',
    'nav.contact': 'CONTACT',
    'nav.home': 'HOME',
    'hero.greeting': 'WELCOME',
    'hero.description': 'A Graphic Designer passionate about crafting memorable visual identities and inspiring digital experiences 🎨',
    'hero.cta': 'CONTACT ME',
    'projects.title': 'PROJECTS',
    'about.title': 'ABOUT ME',
    'about.line1': 'Since 2021, I turn ideas into visuals that capture attention and drive results.',
    'about.line2': 'I\'ve created some of the most viral digital content online and collaborated with international brands to tell their stories in distinctive, memorable ways.',
    'about.line3': '',
    'about.line4': '',
    'about.line5': 'Let\'s start a new cycle together.',
    'about.cta': 'CONTACT ME',
    'services.title': 'SERVICES',
    'reviews.title': 'REVIEWS',
    'brands.tag': 'CLIENTS',
    'contact.title': 'CONTACT',
    'contact.description': 'Have a project in mind? Let\'s talk!',
    'contact.call': 'CALL ME',
    'footer.rights': 'All rights reserved.',
    'community.title': 'COMMUNITY',
    'community.subtitle': 'Check out one of the world\'s largest multi-channel community for car enthusiasts, created by yours truly.',
    'community.members': 'Followers',
    'community.views': 'Views',
    'behance.label': 'VIEW FULL PORTFOLIO',
    'behance.tagline': 'Want to see more?',
    'carspotting.greeting': 'WELCOME TO CAR SPOTTING',
    'carspotting.description': 'the biggest car enthusiast community',
    'carspotting.stats_title': 'COMMUNITY IMPACT',
    'carspotting.stats_subtitle': 'Over half a million car enthusiasts united across all our platforms.',
    'carspotting.total_followers': 'Total Followers'
  },
  de: {
    'nav.projects': 'PROJEKTE',
    'nav.carspotting': 'CAR SPOTTING',
    'nav.contact': 'KONTAKT',
    'nav.home': 'STARTSEITE',
    'hero.greeting': 'WILLKOMMEN',
    'hero.description': 'Ein Grafikdesigner mit Leidenschaft für einprägsame visuelle Identitäten und inspirierende digitale Erlebnisse 🎨',
    'hero.cta': 'KONTAKTIERE MICH',
    'projects.title': 'PROJEKTE',
    'about.title': 'ÜBER MICH',
    'about.line1': 'Seit 2021 verwandle ich Ideen in Visuals, die Aufmerksamkeit erregen und Ergebnisse liefern.',
    'about.line2': 'Ich habe einige der viralsten digitalen Inhalte erstellt und mit internationalen Marken zusammengearbeitet, um ihre Geschichten auf unverwechselbare Weise zu erzählen.',
    'about.line3': '',
    'about.line4': '',
    'about.line5': 'Lasst uns einen neuen Zyklus starten.',
    'about.cta': 'KONTAKTIERE MICH',
    'services.title': 'DIENSTLEISTUNGEN',
    'reviews.title': 'BEWERTUNGEN',
    'brands.tag': 'KUNDEN',
    'contact.title': 'KONTAKT',
    'contact.description': 'Hast du ein Projekt im Kopf? Lass uns reden!',
    'contact.call': 'RUF MICH AN',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'community.title': 'GEMEINSCHAFT',
    'community.subtitle': 'Entdecke eine der weltweit größten Multi-Channel-Communitys für Autobegeisterte, gegründet von mir persönlich.',
    'community.members': 'Follower',
    'community.views': 'Aufrufe',
    'behance.label': 'PORTFOLIO ANSEHEN',
    'behance.tagline': 'Möchtest du mehr sehen?',
    'carspotting.greeting': 'WELCOME TO CAR SPOTTING',
    'carspotting.description': 'the biggest car enthusiast community',
    'carspotting.stats_title': 'GEMEINSCHAFTS-IMPACT',
    'carspotting.stats_subtitle': 'Über eine halbe Million Autobegeisterte auf allen unseren Plattformen vereint.',
    'carspotting.total_followers': 'Follower Gesamt'
  },
  it: {
    'nav.projects': 'PROGETTI',
    'nav.carspotting': 'CAR SPOTTING',
    'nav.contact': 'CONTATTO',
    'nav.home': 'HOME',
    'hero.greeting': 'BENVENUTO',
    'hero.description': 'Un Graphic Designer appassionato nel creare identità visive memorabili ed esperienze digitali che ispirano 🎨',
    'hero.cta': 'CONTATTAMI',
    'projects.title': 'PROGETTI',
    'about.title': 'CHI SONO',
    'about.line1': 'Dal 2021, trasformo idee in visual che catturano l\'attenzione e generano risultati.',
    'about.line2': 'Ho creato alcuni dei contenuti digitali più virali online e ho collaborato con brand internazionali per raccontare le loro storie in modi distintivi e memorabili.',
    'about.line3': '',
    'about.line4': '',
    'about.line5': 'Iniziamo un nouvo ciclo insieme.',
    'about.cta': 'CONTATTAMI',
    'services.title': 'SERVIZI',
    'reviews.title': 'RECENSIONI',
    'brands.tag': 'CLIENTI',
    'contact.title': 'CONTATTO',
    'contact.description': 'Hai un progetto in mente? Parliamone!',
    'contact.call': 'CHIAMAMI',
    'footer.rights': 'Tutti i diritti riservati.',
    'community.title': 'COMUNITÀ',
    'community.subtitle': 'Scopri una delle più grandi comunità multi-canale al mondo per appassionati di auto, creata dal sottoscritto.',
    'community.members': 'Follower',
    'community.views': 'Visualizzazioni',
    'behance.label': 'VEDI IL PORTFOLIO COMPLETO',
    'behance.tagline': 'Vuoi vedere di più?',
    'carspotting.greeting': 'WELCOME TO CAR SPOTTING',
    'carspotting.description': 'the biggest car enthusiast community',
    'carspotting.stats_title': 'IMPATTO DELLA COMUNITÀ',
    'carspotting.stats_subtitle': 'Oltre mezzo milione di appassionati di auto uniti su tutte le nostre piattaforme.',
    'carspotting.total_followers': 'Follower Totali'
  },
  fr: {
    'nav.projects': 'PROJETS',
    'nav.carspotting': 'CAR SPOTTING',
    'nav.contact': 'CONTACT',
    'nav.home': 'ACCUEIL',
    'hero.greeting': 'BIENVENUE',
    'hero.description': 'Un Graphic Designer passionné par la création d\'identités visuelles mémorables et d\'expériences numériques inspirantes 🎨',
    'hero.cta': 'CONTACTEZ-MOI',
    'projects.title': 'PROJETS',
    'about.title': 'À PROPOS DE MOI',
    'about.line1': 'Depuis 2021, je transforme des idées en visuels qui captent l\'attention et génèrent des résultats.',
    'about.line2': 'J\'ai créé certains des contenus numériques les plus viraux en ligne et collaboré avec des marques internationales pour raconter leurs histoires de manière distinctive et mémorable.',
    'about.line3': '',
    'about.line4': '',
    'about.line5': 'Lançons un nouveau cycle ensemble.',
    'about.cta': 'CONTACTEZ-MOI',
    'services.title': 'SERVICES',
    'reviews.title': 'AVIS',
    'brands.tag': 'CLIENTS',
    'contact.title': 'CONTACT',
    'contact.description': 'Vous avez un projet en tête ? Parlons-en !',
    'contact.call': 'APPELEZ-MOI',
    'footer.rights': 'Tous droits réservés.',
    'community.title': 'COMMUNAUTÉ',
    'community.subtitle': 'Découvrez l\'une des plus grandes communautés multi-canal au monde pour les passionnés d\'automobile, créée par votre serviteur.',
    'community.members': 'Abonnés',
    'community.views': 'Vues',
    'behance.label': 'VOIR LE PORTFOLIO COMPLET',
    'behance.tagline': 'Envie d\'en voir plus ?',
    'carspotting.greeting': 'WELCOME TO CAR SPOTTING',
    'carspotting.description': 'the biggest car enthusiast community',
    'carspotting.stats_title': 'IMPACT DE LA COMMUNAUTÉ',
    'carspotting.stats_subtitle': 'Plus d\'un demi-million de passionnés d\'automobile unis sur toutes nos plateformes.',
    'carspotting.total_followers': 'Total Abonnés'
  }
};

let currentLang = 'en';

export function getCurrentLang() { return currentLang; }
export { translationData };

export function initI18n() {
  const saved = localStorage.getItem('vp-lang');
  if (saved && translationData[saved]) currentLang = saved;

  applyTranslations(currentLang);
  updateLangUI(currentLang);

  document.addEventListener('languageChange', (e) => {
    const lang = e.detail.lang;
    if (translationData[lang]) {
      currentLang = lang;
      localStorage.setItem('vp-lang', lang);
      applyTranslations(lang);
      updateLangUI(lang);
    }
  });
}

function applyTranslations(lang) {
  const data = translationData[lang];
  if (!data) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (data[key]) el.textContent = data[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (data[key]) el.placeholder = data[key];
  });
  document.documentElement.lang = lang;
}

function updateLangUI(lang) {
  const flagEl = document.getElementById('currentLangFlag');
  const codeEl = document.getElementById('currentLangCode');
  if (flagEl) flagEl.textContent = FLAGS[lang] || '🌐';
  if (codeEl) codeEl.textContent = CODES[lang] || lang.toUpperCase();
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === currentLang);
  });
}
