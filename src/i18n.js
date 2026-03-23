const FLAGS = { ro: '🇷🇴', en: '🇬🇧', de: '🇩🇪', it: '🇮🇹', fr: '🇫🇷' };
const CODES = { ro: 'RO', en: 'EN', de: 'DE', it: 'IT', fr: 'FR' };

const translationData = {
  ro: {
    'nav.about': 'DESPRE MINE',
    'nav.brands': 'CLIENȚI',
    'nav.projects': 'PROIECTE',
    'nav.contact': 'CONTACT',
    'hero.greeting': 'BINE AI VENIT',
    'hero.description': 'Un Graphic Designer pasionat de crearea unor identități vizuale memorabile și experiențe digitale care inspiră 🎨',
    'hero.cta': 'CONTACTEAZĂ-MĂ',
    'projects.title': 'PROIECTE',
    'about.title': 'DESPRE MINE',
    'about.line1': 'De la strategie de brand până la producție video,',
    'about.line2': 'transform idei în identități vizuale puternice, website-uri și campanii care performează.',
    'about.line3': 'Branding, web design, graphic design, video — tot ce ține de creative marketing,',
    'about.line4': 'într-un singur loc.',
    'about.line5': 'Hai să construim ceva memorabil împreună.',
    'about.cta': 'CONTACTEAZĂ-MĂ',
    'services.title': 'SERVICII',
    'reviews.title': 'RECENZII',
    'brands.tag': 'CLIENȚI',
    'contact.title': 'CONTACT',
    'contact.description': 'Ai un proiect în minte? Hai să discutăm!',
    'contact.name_placeholder': 'Nume',
    'contact.email_placeholder': 'Email-ul tău',
    'contact.message_placeholder': 'Mesajul tău...',
    'contact.cta_button': 'TRIMITE UN MESAJ',
    'contact.success': 'Mesajul a fost trimis cu succes! ✓',
    'contact.error': 'Eroare la trimitere. Încearcă din nou.',
    'footer.rights': 'Toate drepturile rezervate.'
  },
  en: {
    'nav.about': 'ABOUT ME',
    'nav.brands': 'CLIENTS',
    'nav.projects': 'PROJECTS',
    'nav.contact': 'CONTACT',
    'hero.greeting': 'WELCOME',
    'hero.description': 'A Graphic Designer passionate about crafting memorable visual identities and inspiring digital experiences 🎨',
    'hero.cta': 'CONTACT ME',
    'projects.title': 'PROJECTS',
    'about.title': 'ABOUT ME',
    'about.line1': 'From brand strategy to video production,',
    'about.line2': 'I turn ideas into powerful visual identities, websites, and high-performing campaigns.',
    'about.line3': 'Branding, web design, graphic design, video — everything creative marketing,',
    'about.line4': 'all in one place.',
    'about.line5': 'Let\'s build something memorable together.',
    'about.cta': 'CONTACT ME',
    'services.title': 'SERVICES',
    'reviews.title': 'REVIEWS',
    'brands.tag': 'CLIENTS',
    'contact.title': 'CONTACT',
    'contact.description': 'Have a project in mind? Let\'s talk!',
    'contact.name_placeholder': 'Name',
    'contact.email_placeholder': 'Your email',
    'contact.message_placeholder': 'Your message...',
    'contact.cta_button': 'SEND A MESSAGE',
    'contact.success': 'Message sent successfully! ✓',
    'contact.error': 'Error sending. Please try again.',
    'footer.rights': 'All rights reserved.'
  },
  de: {
    'nav.about': 'ÜBER MICH',
    'nav.brands': 'KUNDEN',
    'nav.projects': 'PROJEKTE',
    'nav.contact': 'KONTAKT',
    'hero.greeting': 'WILLKOMMEN',
    'hero.description': 'Ein Grafikdesigner mit Leidenschaft für einprägsame visuelle Identitäten und inspirierende digitale Erlebnisse 🎨',
    'hero.cta': 'KONTAKTIERE MICH',
    'projects.title': 'PROJEKTE',
    'about.title': 'ÜBER MICH',
    'about.line1': 'Von der Markenstrategie bis zur Videoproduktion,',
    'about.line2': 'verwandle ich Ideen in starke visuelle Identitäten, Websites und leistungsstarke Kampagnen.',
    'about.line3': 'Branding, Webdesign, Grafikdesign, Video — alles rund um kreatives Marketing,',
    'about.line4': 'an einem Ort.',
    'about.line5': 'Lass uns etwas Unvergessliches aufbauen.',
    'about.cta': 'KONTAKTIERE MICH',
    'services.title': 'DIENSTLEISTUNGEN',
    'reviews.title': 'BEWERTUNGEN',
    'brands.tag': 'KUNDEN',
    'contact.title': 'KONTAKT',
    'contact.description': 'Hast du ein Projekt im Kopf? Lass uns reden!',
    'contact.name_placeholder': 'Name',
    'contact.email_placeholder': 'Deine E-Mail',
    'contact.message_placeholder': 'Deine Nachricht...',
    'contact.cta_button': 'NACHRICHT SENDEN',
    'contact.success': 'Nachricht erfolgreich gesendet! ✓',
    'contact.error': 'Fehler beim Senden. Bitte versuche es erneut.',
    'footer.rights': 'Alle Rechte vorbehalten.'
  },
  it: {
    'nav.about': 'CHI SONO',
    'nav.brands': 'CLIENTI',
    'nav.projects': 'PROGETTI',
    'nav.contact': 'CONTATTO',
    'hero.greeting': 'BENVENUTO',
    'hero.description': 'Un Graphic Designer appassionato nel creare identità visive memorabili ed esperienze digitali che ispirano 🎨',
    'hero.cta': 'CONTATTAMI',
    'projects.title': 'PROGETTI',
    'about.title': 'CHI SONO',
    'about.line1': 'Dalla strategia di brand alla produzione video,',
    'about.line2': 'trasformo idee in identità visive potenti, siti web e campagne performanti.',
    'about.line3': 'Branding, web design, graphic design, video — tutto il creative marketing,',
    'about.line4': 'in un unico posto.',
    'about.line5': 'Costruiamo qualcosa di memorabile insieme.',
    'about.cta': 'CONTATTAMI',
    'services.title': 'SERVIZI',
    'reviews.title': 'RECENSIONI',
    'brands.tag': 'CLIENTI',
    'contact.title': 'CONTATTO',
    'contact.description': 'Hai un progetto in mente? Parliamone!',
    'contact.name_placeholder': 'Nome',
    'contact.email_placeholder': 'La tua email',
    'contact.message_placeholder': 'Il tuo messaggio...',
    'contact.cta_button': 'INVIA UN MESSAGGIO',
    'contact.success': 'Messaggio inviato con successo! ✓',
    'contact.error': 'Errore durante l\'invio. Riprova.',
    'footer.rights': 'Tutti i diritti riservati.'
  },
  fr: {
    'nav.about': 'À PROPOS',
    'nav.brands': 'CLIENTS',
    'nav.projects': 'PROJETS',
    'nav.contact': 'CONTACT',
    'hero.greeting': 'BIENVENUE',
    'hero.description': 'Un Graphic Designer passionné par la création d\'identités visuelles mémorables et d\'expériences numériques inspirantes 🎨',
    'hero.cta': 'CONTACTEZ-MOI',
    'projects.title': 'PROJETS',
    'about.title': 'À PROPOS',
    'about.line1': 'De la stratégie de marque à la production vidéo,',
    'about.line2': 'je transforme les idées en identités visuelles fortes, sites web et campagnes performantes.',
    'about.line3': 'Branding, web design, graphic design, vidéo — tout le marketing créatif,',
    'about.line4': 'en un seul endroit.',
    'about.line5': 'Construisons quelque chose de mémorable ensemble.',
    'about.cta': 'CONTACTEZ-MOI',
    'services.title': 'SERVICES',
    'reviews.title': 'AVIS',
    'brands.tag': 'CLIENTS',
    'contact.title': 'CONTACT',
    'contact.description': 'Vous avez un projet en tête ? Parlons-en !',
    'contact.name_placeholder': 'Nom',
    'contact.email_placeholder': 'Votre email',
    'contact.message_placeholder': 'Votre message...',
    'contact.cta_button': 'ENVOYER UN MESSAGE',
    'contact.success': 'Message envoyé avec succès ! ✓',
    'contact.error': 'Erreur lors de l\'envoi. Veuillez réessayer.',
    'footer.rights': 'Tous droits réservés.'
  }
};

let currentLang = 'ro';

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
