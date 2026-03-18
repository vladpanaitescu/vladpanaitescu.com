const FLAGS = { ro: '🇷🇴', en: '🇬🇧', de: '🇩🇪', it: '🇮🇹', fr: '🇫🇷' };
const CODES = { ro: 'RO', en: 'EN', de: 'DE', it: 'IT', fr: 'FR' };

const translationData = {
  ro: {
    'nav.about': 'DESPRE MINE',
    'nav.brands': 'CLIENȚI',
    'nav.projects': 'PROIECTE',
    'nav.contact': 'CONTACT',
    'hero.greeting': 'SALUT, SUNT',
    'hero.description': 'Un Graphic Designer pasionat de crearea unor identități vizuale memorabile și experiențe digitale care inspiră 🎨',
    'hero.cta': 'CONTACTEAZĂ-MĂ',
    'projects.title': 'PROIECTE',
    'about.title': 'DESPRE MINE',
    'about.line1': 'Cu peste 5 ani de experiență în design,',
    'about.line2': 'sunt specializat în branding, web design și user experience.',
    'about.line3': 'Îmi place să colaborez cu business-uri care vor să iasă în evidență',
    'about.line4': 'și să își prezinte cea mai bună parte.',
    'about.line5': 'Hai să creăm ceva extraordinar împreună!',
    'about.cta': 'CONTACTEAZĂ-MĂ',
    'services.title': 'SERVICII',
    'reviews.title': 'RECENZII',
    'brands.tag': 'COLABORĂRI',
    'contact.title': 'CONTACT',
    'contact.description': 'Ai un proiect în minte? Hai să discutăm!',
    'contact.cta_button': 'TRIMITE UN MESAJ',
    'footer.rights': 'Toate drepturile rezervate.'
  },
  en: {
    'nav.about': 'ABOUT ME',
    'nav.brands': 'CLIENTS',
    'nav.projects': 'PROJECTS',
    'nav.contact': 'CONTACT',
    'hero.greeting': 'HI, I\'M',
    'hero.description': 'A Graphic Designer passionate about crafting memorable visual identities and inspiring digital experiences 🎨',
    'hero.cta': 'CONTACT ME',
    'projects.title': 'PROJECTS',
    'about.title': 'ABOUT ME',
    'about.line1': 'With over 5 years of experience in design,',
    'about.line2': 'I specialize in branding, web design, and user experience.',
    'about.line3': 'I love collaborating with businesses that want to stand out',
    'about.line4': 'and showcase their best side.',
    'about.line5': 'Let\'s create something amazing together!',
    'about.cta': 'CONTACT ME',
    'services.title': 'SERVICES',
    'reviews.title': 'REVIEWS',
    'brands.tag': 'COLLABORATIONS',
    'contact.title': 'CONTACT',
    'contact.description': 'Have a project in mind? Let\'s talk!',
    'contact.cta_button': 'SEND A MESSAGE',
    'footer.rights': 'All rights reserved.'
  },
  de: {
    'nav.about': 'ÜBER MICH',
    'nav.brands': 'KUNDEN',
    'nav.projects': 'PROJEKTE',
    'nav.contact': 'KONTAKT',
    'hero.greeting': 'HALLO, ICH BIN',
    'hero.description': 'Ein Grafikdesigner mit Leidenschaft für einprägsame visuelle Identitäten und inspirierende digitale Erlebnisse 🎨',
    'hero.cta': 'KONTAKTIERE MICH',
    'projects.title': 'PROJEKTE',
    'about.title': 'ÜBER MICH',
    'about.line1': 'Mit über 5 Jahren Erfahrung im Design,',
    'about.line2': 'bin ich spezialisiert auf Branding, Webdesign und User Experience.',
    'about.line3': 'Ich arbeite gerne mit Unternehmen zusammen, die herausstechen wollen',
    'about.line4': 'und ihre beste Seite zeigen möchten.',
    'about.line5': 'Lass uns etwas Außergewöhnliches schaffen!',
    'about.cta': 'KONTAKTIERE MICH',
    'services.title': 'DIENSTLEISTUNGEN',
    'reviews.title': 'BEWERTUNGEN',
    'brands.tag': 'ZUSAMMENARBEIT',
    'contact.title': 'KONTAKT',
    'contact.description': 'Hast du ein Projekt im Kopf? Lass uns reden!',
    'contact.cta_button': 'NACHRICHT SENDEN',
    'footer.rights': 'Alle Rechte vorbehalten.'
  },
  it: {
    'nav.about': 'CHI SONO',
    'nav.brands': 'CLIENTI',
    'nav.projects': 'PROGETTI',
    'nav.contact': 'CONTATTO',
    'hero.greeting': 'CIAO, SONO',
    'hero.description': 'Un Graphic Designer appassionato nel creare identità visive memorabili ed esperienze digitali che ispirano 🎨',
    'hero.cta': 'CONTATTAMI',
    'projects.title': 'PROGETTI',
    'about.title': 'CHI SONO',
    'about.line1': 'Con oltre 5 anni di esperienza nel design,',
    'about.line2': 'sono specializzato in branding, web design e user experience.',
    'about.line3': 'Mi piace collaborare con aziende che vogliono distinguersi',
    'about.line4': 'e mostrare il loro lato migliore.',
    'about.line5': 'Creiamo qualcosa di straordinario insieme!',
    'about.cta': 'CONTATTAMI',
    'services.title': 'SERVIZI',
    'reviews.title': 'RECENSIONI',
    'brands.tag': 'COLLABORAZIONI',
    'contact.title': 'CONTATTO',
    'contact.description': 'Hai un progetto in mente? Parliamone!',
    'contact.cta_button': 'INVIA UN MESSAGGIO',
    'footer.rights': 'Tutti i diritti riservati.'
  },
  fr: {
    'nav.about': 'À PROPOS',
    'nav.brands': 'CLIENTS',
    'nav.projects': 'PROJETS',
    'nav.contact': 'CONTACT',
    'hero.greeting': 'SALUT, JE SUIS',
    'hero.description': 'Un Graphic Designer passionné par la création d\'identités visuelles mémorables et d\'expériences numériques inspirantes 🎨',
    'hero.cta': 'CONTACTEZ-MOI',
    'projects.title': 'PROJETS',
    'about.title': 'À PROPOS',
    'about.line1': 'Avec plus de 5 ans d\'expérience en design,',
    'about.line2': 'je suis spécialisé en branding, web design et expérience utilisateur.',
    'about.line3': 'J\'aime collaborer avec des entreprises qui veulent se démarquer',
    'about.line4': 'et montrer leur meilleur côté.',
    'about.line5': 'Créons quelque chose d\'extraordinaire ensemble !',
    'about.cta': 'CONTACTEZ-MOI',
    'services.title': 'SERVICES',
    'reviews.title': 'AVIS',
    'brands.tag': 'COLLABORATIONS',
    'contact.title': 'CONTACT',
    'contact.description': 'Vous avez un projet en tête ? Parlons-en !',
    'contact.cta_button': 'ENVOYER UN MESSAGE',
    'footer.rights': 'Tous droits réservés.'
  }
};

let currentLang = 'ro';

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
