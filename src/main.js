import './style.css';
import { initI18n, getCurrentLang, translationData } from './i18n.js';

// ===== BEHANCE PROJECTS DATA — matched exactly to Behance profile =====
const projects = [
  {
    "id": "video-ai-workflows",
    "title": "Creative Video Production & AI Workflows",
    "cover": "/Images/covers/video-ai-workflows.jpg",
    "tags": [
      "Video Production",
      "AI Workflows",
      "Creative Direction"
    ],
    "behanceUrl": "https://www.behance.net/gallery/249790317/Creative-Video-Production-AI-Workflows",
    "content": [
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/I944b4qR75p/embed?api_key=behance1&bgcolor=%23191919"
      }
    ]
  },
  {
    "id": "bgs-video-production",
    "title": "BGS — Video Campaign Production",
    "cover": "/Images/covers/bgs-video-production.png",
    "tags": [
      "Video Production",
      "Creative Direction",
      "Campaign Design"
    ],
    "behanceUrl": "https://www.behance.net/gallery/245553355/BGS-Grup-National-Campaign-Visual-Development",
    "content": [
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/CzFULJhAiry/embed?api_key=behance1&bgcolor=%23191919"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/6skZFR-V-JW/embed?api_key=behance1&bgcolor=%23191919"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/-3ZRr38d2NV/embed?api_key=behance1&bgcolor=%23191919"
      }
    ]
  },
  {
    "id": "profructta",
    "title": "Profructta — Beverage Commercial Production Pipeline",
    "cover": "/Images/covers/profructta.jpg",
    "tags": [
      "3D",
      "Video Production",
      "Commercial"
    ],
    "behanceUrl": "https://www.behance.net/gallery/248964487/Profructta-Beverage-Commercial-Production-Pipeline",
    "content": [
      {
        "type": "image",
        "src": "/Images/projects/profructta/image_1.jpg"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/8685njzonh3/embed?api_key=behance1&bgcolor=%23191919"
      }
    ]
  },
  {
    "id": "oradea-parking",
    "title": "Oradea Parking App – Official Tutorial Series",
    "cover": "/Images/covers/oradea-parking.jpg",
    "tags": [
      "Video Production",
      "Motion Graphics",
      "Concept Development"
    ],
    "behanceUrl": "https://www-behance.net/gallery/245062349/Oradea-Parking-App-Official-Tutorial-Series",
    "content": [
      {
        "type": "text",
        "html": "<div>Residential Parking App – Oradea</div><div>Tutorial Video Series</div>",
        "align": "center"
      },
      {
        "type": "text",
        "html": "<div>A complete end-to-end production of three tutorial videos designed to support user onboarding for the Oradea Residential Parking Application.</div><div>The project required translating a functional municipal platform into a clear, structured and accessible visual experience.</div><div>I led the entire creative process, including:</div><div>• Concept development and information architecture<br>• Scriptwriting and narrative structure<br>• Voice-over production and direction<br>• Custom background music composition<br>• Motion graphics design and animation<br>• Video editing and final sound mixing</div>",
        "align": "center"
      },
      {
        "type": "image",
        "src": "/Images/projects/oradea-parking/image_1.jpg"
      },
      {
        "type": "text",
        "html": "<div>The focus was clarity, usability and professional execution — ensuring the content remains intuitive, engaging and accessible across all user segments.</div><div>The final outcome is a cohesive tutorial series that enhances digital adoption through thoughtful storytelling and refined motion design.</div>",
        "align": "center"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/5Y_TkG3vnS-/embed?api_key=behance1&bgcolor=%23191919"
      }
    ]
  },
  {
    "id": "solar-performance",
    "title": "Solar Performance Creative Campaign",
    "cover": "/Images/covers/solar-performance.jpg",
    "tags": [
      "Campaign Design",
      "Performance Marketing",
      "Digital Ads"
    ],
    "behanceUrl": "https://www.behance.net/gallery/249789703/Solar-Performance-Creative-Campaign",
    "content": [
      {
        "type": "text",
        "html": "<div>Strategic paid media creative direction and visual design focused on performance-driven advertising.</div><div>This project was built around creating high-converting&nbsp;visuals for Meta with a strong emphasis on brand consistency, scroll-stopping compositions, clear messaging hierarchy, and conversion-oriented design systems across multiple digital placements and formats.</div>",
        "align": "center"
      },
      {
        "type": "image",
        "src": "/Images/projects/solar-performance/image_1.jpg"
      },
      {
        "type": "image",
        "src": "/Images/projects/solar-performance/image_2.jpg"
      },
      {
        "type": "image",
        "src": "/Images/projects/solar-performance/image_3.jpg"
      },
      {
        "type": "image",
        "src": "/Images/projects/solar-performance/image_4.jpg"
      },
      {
        "type": "image",
        "src": "/Images/projects/solar-performance/image_5.jpg"
      },
      {
        "type": "image",
        "src": "/Images/projects/solar-performance/image_6.jpg"
      },
      {
        "type": "image",
        "src": "/Images/projects/solar-performance/image_7.jpg"
      },
      {
        "type": "image",
        "src": "/Images/projects/solar-performance/image_8.jpg"
      },
      {
        "type": "image",
        "src": "/Images/projects/solar-performance/image_9.jpg"
      },
      {
        "type": "image",
        "src": "/Images/projects/solar-performance/image_10.jpg"
      }
    ]
  },
  {
    "id": "bgs-grup",
    "title": "BGS Grup – National Campaign Visual Development",
    "cover": "/Images/covers/bgs-grup.jpg",
    "tags": [
      "Campaign Design",
      "Storyboarding",
      "Visual Development"
    ],
    "behanceUrl": "https://www.behance.net/gallery/245553355/BGS-Grup-National-Campaign-Visual-Development",
    "content": [
      {
        "type": "text",
        "html": "<div>BGS – National Campaign Visual Development</div>",
        "align": "center"
      },
      {
        "type": "image",
        "src": "/Images/projects/bgs-grup/image_1.jpg"
      },
      {
        "type": "text",
        "html": "<div><div>This project showcases the visual development process of a security campaign I created for BGS.</div><div>I initially designed the concept as a simple sketch storyboard to define the narrative and the key scenes of the campaign. After establishing the visual structure, I translated the concept into fully produced, high-quality visuals for the final advertising materials.</div><div>The campaign illustrates the three core steps of modern home security: installation, monitoring, and rapid intervention.</div></div>",
        "align": "center"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/4nXM3LnV3jk/embed?api_key=behance1&bgcolor=%23191919"
      }
    ]
  },
  {
    "id": "ecogo",
    "title": "Ecogo - Brand Identity & Splash Screen Animation",
    "cover": "/Images/covers/ecogo.jpg",
    "tags": [
      "Branding",
      "Animation",
      "Identity"
    ],
    "behanceUrl": "https://www.behance.net/gallery/220558221/Ecogo-Brand-Identity-Splash-Screen-Animation",
    "content": [
      {
        "type": "text",
        "html": "<div>Splash screen logo animation for mobile app made in After Effects<br></div>",
        "align": "center"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/4X4qYUi6-c8/embed?api_key=behance1&bgcolor=%23191919"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/TwUQbRNwj5Y/embed?api_key=behance1&bgcolor=%23191919"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/FYsragb7Rjb/embed?api_key=behance1&bgcolor=%23191919"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/EeKjGm95Wpm/embed?api_key=behance1&bgcolor=%23191919"
      }
    ]
  },
  {
    "id": "bgs-shop",
    "title": "BGS Shop - Digital Ads Design - Performance",
    "cover": "/Images/covers/bgs-shop.jpg",
    "tags": [
      "Performance Marketing",
      "Digital Ads",
      "E-commerce"
    ],
    "behanceUrl": "https://www.behance.net/gallery/248036409/BGS-Shop-Digital-Ads-Design-Performance",
    "content": [
      {
        "type": "text",
        "html": "<div>This project showcases some of my visual work created for&nbsp;BGS Shop, the e-commerce platform of the largest security company in Romania.<br>The main goal was to develop digital materials that support both the website experience and the brand’s paid media communication, with a strong focus on clarity&nbsp;and commercial impact.</div><div>On a monthly basis, the campaigns included&nbsp;around 150 creatives, developed across multiple formats and placements for both website use and performance marketing.<br></div>",
        "align": "center"
      },
      {
        "type": "image",
        "src": "/Images/projects/bgs-shop/image_1.jpg"
      },
      {
        "type": "text",
        "html": "<div>My approach focused on creating assets that are both visually strong and strategically functional in a real e-commerce environment.<br>The final result is a collection of digital banners designed to improve visibility, support campaign performance, and maintain a professional and cohesive visual presence across multiple touchpoints.<br></div>",
        "align": "center"
      },
      {
        "type": "image",
        "src": "/Images/projects/bgs-shop/image_2.png"
      },
      {
        "type": "image",
        "src": "/Images/projects/bgs-shop/image_3.jpg"
      },
      {
        "type": "image",
        "src": "/Images/projects/bgs-shop/image_4.jpg"
      },
      {
        "type": "image",
        "src": "/Images/projects/bgs-shop/image_5.jpg"
      },
      {
        "type": "text",
        "html": "<div>The project includes&nbsp;website banners&nbsp;and a series of creatives designed for&nbsp;performance marketing campaigns, especially for&nbsp;Google Ads&nbsp;and&nbsp;Meta Ads.<br>Each visual was built to balance branding with efficiency, highlighting products, offers, and key selling points in a clean, direct, and conversion-oriented way.</div>",
        "align": "center"
      }
    ]
  },
  {
    "id": "ballantines",
    "title": "Ballantine's - \"There's no wrong way\" DTP Design",
    "cover": "/Images/covers/ballantines.jpg",
    "tags": [
      "Design For Print",
      "DTP",
      "Branding"
    ],
    "behanceUrl": "https://www.behance.net/gallery/175695705/Ballantines-Theres-no-wrong-way-DTP-Design",
    "content": [
      {
        "type": "text",
        "html": "<div>For this project, I was tasked with creating a voucher design that aligned with Ballantine's brand identity and the campaign message, \"There's No Wrong Way to Get a Tattoo.\" The goal was to create a visually appealing voucher that captured the essence of the campaign while maintaining the brand's aesthetics.<br></div>",
        "align": "center"
      },
      {
        "type": "image",
        "src": "/Images/projects/ballantines/image_1.jpg"
      },
      {
        "type": "text",
        "html": "<div>Brief: Design a voucher that resonates with the campaign theme and adheres to Ballantine's brand values.</div><div>Role: Conceptualization, design, and execution.</div><div>Software: Adobe Photoshop and Adobe Illustrator.</div><div>Color Palette: Leveraged the brand's signature colors to maintain consistency while incorporating hints of tattoo-inspired shades.</div><div>Typography: Selected fonts that balanced modernity with classic sophistication, reflecting both the campaign's message and the brand's identity.</div>",
        "align": "center"
      },
      {
        "type": "image",
        "src": "/Images/projects/ballantines/image_2.png"
      },
      {
        "type": "image",
        "src": "/Images/projects/ballantines/image_3.png"
      },
      {
        "type": "text",
        "html": "<div>The final voucher design successfully encapsulated the \"There's No Wrong Way to Get a Tattoo\" campaign's essence while staying true to Ballantine's brand identity.<br></div>",
        "align": "center"
      }
    ]
  },
  {
    "id": "pernod-ricard",
    "title": "Pernod Ricard - \"Be The Host\" Campaign Design",
    "cover": "/Images/covers/pernod-ricard.jpg",
    "tags": [
      "Campaign Design",
      "Key Visual Adaptation"
    ],
    "behanceUrl": "https://www.behance.net/gallery/236239723/Pernod-Ricard-Be-The-Host-Campaign-Design",
    "content": [
      {
        "type": "text",
        "html": "<div>For this project, I was tasked with adapting three key visuals to announce and promote the “Savurează și Câștigă” campaign for Be The Host. The visuals highlight each brand’s vibrant and festive energy, combining bold compositions and colorful elements to capture attention and invite consumers to join the celebration.</div>",
        "align": "center"
      },
      {
        "type": "image",
        "src": "/Images/projects/pernod-ricard/image_1.jpg"
      },
      {
        "type": "image",
        "src": "/Images/projects/pernod-ricard/image_2.jpg"
      },
      {
        "type": "image",
        "src": "/Images/projects/pernod-ricard/image_3.png"
      }
    ]
  },
  {
    "id": "brewzeus",
    "title": "Brewzeus Coffee - UI & UX Design",
    "cover": "/Images/covers/brewzeus.png",
    "tags": [
      "UI/UX",
      "Web Design"
    ],
    "behanceUrl": "https://www.behance.net/gallery/175697113/Brewzeus-Coffee-UI-UX-Design",
    "content": [
      {
        "type": "text",
        "html": "<div style=\"text-align:left;\">In this project, I undertook the transformation of a coffee brand's static presentation website into a vibrant and fully operational e-commerce platform. The goal was to provide users with an immersive online shopping experience that aligns with the brand's essence while facilitating seamless transactions.</div>",
        "align": "center"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/LDGwKNcpa63/embed?api_key=behance1&bgcolor=%23191919"
      },
      {
        "type": "text",
        "html": "<div>Brief: Redesign the old presentation website into a fully functional e-commerce platform</div><div>Role: Conceptualization &amp;&nbsp;design.</div><div>Software: Adobe Photoshop,&nbsp;Adobe Illustrator, Adobe After Effects, Adobe XD</div><div>Color Palette: Utilized the brand's iconic color palette to uphold visual coherence, while also incorporating strategic call-to-action inserts to actively engage and involve customers.</div>",
        "align": "center"
      },
      {
        "type": "image",
        "src": "/Images/projects/brewzeus/image_1.png"
      },
      {
        "type": "image",
        "src": "/Images/projects/brewzeus/image_2.png"
      },
      {
        "type": "image",
        "src": "/Images/projects/brewzeus/image_3.png"
      },
      {
        "type": "image",
        "src": "/Images/projects/brewzeus/image_4.png"
      }
    ]
  },
  {
    "id": "spacedev",
    "title": "SpaceDev - Brand Identity",
    "cover": "/Images/covers/spacedev.jpg",
    "tags": [
      "Branding",
      "Identity",
      "Logo Design"
    ],
    "behanceUrl": "https://www.behance.net/gallery/245064453/SpaceDev-Brand-Identity",
    "content": [
      {
        "type": "image",
        "src": "/Images/projects/spacedev/image_1.jpg"
      },
      {
        "type": "text",
        "html": "<div>The SpaceDev logo was designed to visually express speed, innovation and technical precision. The rocket symbol integrated within the typography represents growth, launch and forward momentum, while the motion lines in “DEV” suggest performance and rapid development cycles. The geometric structure and clean letterforms reflect engineering discipline and software architecture logic. The result is a bold, modern identity that communicates scalability, technical expertise and continuous evolution in the digital space.<br></div>",
        "align": "center"
      },
      {
        "type": "image",
        "src": "/Images/projects/spacedev/image_2.jpg"
      },
      {
        "type": "text",
        "html": "<div>I focused on capturing the core values of a forward-thinking software engineering firm — clarity, innovation, and precision. The design process began with deep research into the brand’s positioning as a provider of custom web and mobile solutions, cloud services, DevOps, and UX/UI excellence. Based on that, I explored visual concepts that balance technical sophistication with approachable simplicity, choosing a modern logomark that reflects structure and connectivity, paired with clean typography for recognizability and versatility across digital platforms. The final logo is structured to communicate professionalism, forward momentum, and scalability, reinforcing the company’s mission to transform complex ideas into reliable software products and services.&nbsp;</div>",
        "align": "center"
      },
      {
        "type": "image",
        "src": "/Images/projects/spacedev/image_3.jpg"
      },
      {
        "type": "image",
        "src": "/Images/projects/spacedev/image_4.jpg"
      }
    ]
  },
  {
    "id": "jaeger-rus",
    "title": "Jaeger-Rus GMBH - Brand Identity",
    "cover": "/Images/covers/jaeger-rus.jpg",
    "tags": [
      "Branding",
      "Identity",
      "Corporate"
    ],
    "behanceUrl": "https://www.behance.net/gallery/220556963/Jaeger-Rus-GMBH-Brand-Identity",
    "content": [
      {
        "type": "image",
        "src": "/Images/projects/jaeger-rus/image_1.png"
      },
      {
        "type": "image",
        "src": "/Images/projects/jaeger-rus/image_2.png"
      },
      {
        "type": "image",
        "src": "/Images/projects/jaeger-rus/image_3.png"
      },
      {
        "type": "image",
        "src": "/Images/projects/jaeger-rus/image_4.png"
      },
      {
        "type": "image",
        "src": "/Images/projects/jaeger-rus/image_5.png"
      },
      {
        "type": "image",
        "src": "/Images/projects/jaeger-rus/image_6.png"
      },
      {
        "type": "image",
        "src": "/Images/projects/jaeger-rus/image_7.png"
      },
      {
        "type": "image",
        "src": "/Images/projects/jaeger-rus/image_8.png"
      },
      {
        "type": "image",
        "src": "/Images/projects/jaeger-rus/image_9.png"
      },
      {
        "type": "image",
        "src": "/Images/projects/jaeger-rus/image_10.png"
      }
    ]
  },
  {
    "id": "drkala",
    "title": "DrKala - Brand Identity",
    "cover": "/Images/covers/drkala.jpg",
    "tags": [
      "Branding",
      "Identity",
      "Health & Wellness"
    ],
    "behanceUrl": "https://www.behance.net/gallery/236237579/DrKala-Brand-Identity",
    "content": [
      {
        "type": "text",
        "html": "<div>DrKala is a health and wellness brand focused on balance and inner harmony. The logo combines smooth geometric shapes with a soothing palette of blues and purples, symbolizing calm energy, trust, and transformation. The result is a clean, modern identity that conveys wellbeing through elegance and simplicity.<br></div>",
        "align": "center"
      },
      {
        "type": "image",
        "src": "/Images/projects/drkala/image_1.jpg"
      },
      {
        "type": "image",
        "src": "/Images/projects/drkala/image_2.jpg"
      },
      {
        "type": "image",
        "src": "/Images/projects/drkala/image_3.jpg"
      }
    ]
  },
  {
    "id": "huawei",
    "title": "Huawei Web UI UX Design",
    "cover": "/Images/covers/huawei.png",
    "tags": [
      "UI/UX",
      "Web Design",
      "Campaign"
    ],
    "behanceUrl": "https://www.behance.net/gallery/183133777/Huawei-Web-UI-UX-Design",
    "content": [
      {
        "type": "text",
        "html": "<div>For this project,&nbsp;I had the exciting opportunity to craft for Huawei a dynamic landing page for their spring&nbsp;campaign. The project's core structure comprises three essential elements:</div>",
        "align": "center"
      },
      {
        "type": "text",
        "html": "<div>1. Hero Banner: At the forefront of the landing page, the hero banner showcases the campaign's Key Visual, setting the stage for the campaign's theme and message.<br></div>",
        "align": "center"
      },
      {
        "type": "image",
        "src": "/Images/projects/huawei/image_1.png"
      },
      {
        "type": "text",
        "html": "<div>2. Subscribe &amp; Win Section: In this section, we communicated the enticing bonusing mechanism of the campaign, inviting users to engage and participate in a rewarding experience.<br></div>",
        "align": "center"
      },
      {
        "type": "image",
        "src": "/Images/projects/huawei/image_2.png"
      },
      {
        "type": "text",
        "html": "<div>3. Product Cards: Highlighting the latest offers, the product cards section provides a appealing visual and textual overview of Huawei's offerings, aligning with the campaign's objectives.</div>",
        "align": "center"
      },
      {
        "type": "image",
        "src": "/Images/projects/huawei/image_3.png"
      },
      {
        "type": "image",
        "src": "/Images/projects/huawei/image_4.png"
      },
      {
        "type": "text",
        "html": "<div>Final design came out pretty clean:</div>",
        "align": "center"
      },
      {
        "type": "image",
        "src": "/Images/projects/huawei/image_5.png"
      }
    ]
  },
  {
    "id": "game-design-numbers",
    "title": "Mobile Game Design - Numbers",
    "cover": "/Images/covers/game-design-numbers.png",
    "tags": [
      "Mobile Game Design",
      "UI/UX",
      "Visual Development"
    ],
    "behanceUrl": "https://www.behance.net/gallery/175697587/Mobile-Game-Design-Numbers",
    "content": [
      {
        "type": "text",
        "html": "<div>For this freelance project, I was asked to do a whole redesign for this game called Numbers. Me and the client&nbsp;embarked on an exciting project, crafting a unique game that fuses calculus methods to calculate seven numbers into one target. Inspired by the elegance of hexagons and the brilliance of the brain, we designed captivating icons that would immerse players in a visually stunning and intellectually stimulating environment. The fusion of aesthetics and functionality drove every design decision.<br></div>",
        "align": "center"
      },
      {
        "type": "image",
        "src": "/Images/projects/game-design-numbers/image_1.png"
      },
      {
        "type": "text",
        "html": "<div>Objective: Develop an engaging mobile game that combines mathematical challenges with interactive gameplay.</div><div>Role: Visual design, user interface development, user experience enhancement.</div><div>Tools: Adobe XD, Adobe Illustrator, Adobe Photoshop.</div>",
        "align": "center"
      },
      {
        "type": "image",
        "src": "/Images/projects/game-design-numbers/image_2.png"
      },
      {
        "type": "image",
        "src": "/Images/projects/game-design-numbers/image_3.png"
      },
      {
        "type": "text",
        "html": "<div>The mobile game successfully merges educational content with entertaining gameplay, catering to both casual gamers and those seeking mental stimulation. By providing an engaging and intellectually stimulating experience, the game has the potential to captivate a diverse audience.<br></div>",
        "align": "center"
      }
    ]
  }
];

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  history.scrollRestoration = 'manual';
  if (window.location.hash) history.replaceState(null, '', window.location.pathname);
  window.scrollTo(0, 0);

  const hero = document.querySelector('.hero');
  const navbar = document.querySelector('.navbar');
  if (hero) hero.style.opacity = '0';
  if (navbar) navbar.style.opacity = '0';

  initProjectsGrid();
  initProjectOverlay();
  initNavbar();
  initCursorTracking();
  initI18n();
  initScrollReveal();
  initContactForm();

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

// ===== PROJECTS GRID =====
function initProjectsGrid() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = projects.map((p, i) => `
    <div class="project-grid-card reveal" data-project-index="${i}">
      <img class="project-grid-card-cover" src="${p.cover}?v=2" alt="${p.title}" loading="${i < 4 ? 'eager' : 'lazy'}" />
      <div class="project-grid-card-info">
        <div class="project-grid-card-title">${p.title}</div>
        <div class="project-grid-card-owner">Vlad Panaitescu</div>
      </div>
    </div>
  `).join('');
}

// ===== PROJECT OVERLAY =====
function initProjectOverlay() {
  const overlay = document.getElementById('projectOverlay');
  const backdrop = document.getElementById('projectOverlayBackdrop');
  const closeBtn = document.getElementById('projectOverlayClose');
  const content = document.getElementById('projectOverlayContent');
  const container = document.getElementById('projectOverlayContainer');

  if (!overlay) return;

  let modalObserver = null;

  document.addEventListener('click', (e) => {
    const card = e.target.closest('.project-grid-card');
    if (!card) return;
    const index = parseInt(card.dataset.projectIndex, 10);
    openProject(projects[index]);
  });

  function openProject(project) {
    let html = '';

    // Header
    html += `
      <div class="project-detail-header">
        <h2 class="project-detail-title">${project.title}</h2>
        <div class="project-detail-meta">
          ${project.tags.map(t => `<span class="project-detail-tag">${t}</span>`).join('')}
        </div>
      </div>
    `;

    // Body blocks
    html += '<div class="project-detail-body">';
    project.content.forEach(block => {
      if (block.type === 'image') {
        html += `
          <div class="project-detail-block media-container">
            <div class="media-skeleton"><div class="media-spinner"></div></div>
            <img class="lazy-media-item" data-src="${block.src}" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'></svg>" alt="" />
          </div>
        `;
      } else if (block.type === 'text') {
        const alignClass = block.align ? `align-${block.align}` : 'align-center';
        html += `<div class="project-detail-text ${alignClass}">${block.html}</div>`;
      } else if (block.type === 'video') {
        html += `
          <div class="project-detail-block project-detail-video media-container">
            <div class="video-wrapper">
              <div class="media-skeleton"><div class="media-spinner"></div></div>
              <iframe class="lazy-media-item" data-src="${block.src}" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        `;
      }
    });
    html += '</div>';

    // Behance link
    html += `
      <div class="project-detail-behance">
        <a href="${project.behanceUrl}" target="_blank" rel="noopener">
          <svg width="20" height="20" viewBox="0 0 576 512" fill="currentColor">
            <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-134.2-124.3-134.2-78.8 0-132.3 55.4-132.3 134.2 0 82.2 53.6 132.3 132.3 132.3 49.4 0 97.2-19.9 120.1-63.6l-58.2-30.4c-10.5 21.3-31.3 36.5-61.9 36.5-38.2 0-64.1-21.1-69.5-63.6h199c.3-4.7.8-11.9.8-11.2zm-198-20.7c3.7-29.5 26.4-56.4 65.8-56.4 36.4 0 57.5 22.7 63.2 56.4H378z"/>
          </svg>
          View on Behance
        </a>
      </div>
    `;

    content.innerHTML = html;
    container.scrollTop = 0;
    overlay.classList.add('open');
    document.body.classList.add('overlay-open');

    // Delay lazy loader initialization slightly to let the modal layout settle and transition to visible.
    setTimeout(bindLazyMediaLoader, 150);
  }

  function closeProject() {
    if (modalObserver) {
      modalObserver.disconnect();
      modalObserver = null;
    }
    overlay.classList.remove('open');
    document.body.classList.remove('overlay-open');
    
    // Clear heavy DOM only after the modal transition finishes to ensure a smooth, premium exit fade-out
    setTimeout(() => {
      if (!overlay.classList.contains('open')) {
        content.innerHTML = '';
      }
    }, 450);
  }

  function bindLazyMediaLoader() {
    const lazyItems = container.querySelectorAll('.lazy-media-item');
    if (lazyItems.length === 0) return;

    if (modalObserver) modalObserver.disconnect();

    modalObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        console.log("[Observer] item evaluated:", entry.target.getAttribute('data-src'), "isIntersecting:", entry.isIntersecting);
        if (entry.isIntersecting) {
          const item = entry.target;
          const blockContainer = item.closest('.media-container');
          const skeleton = blockContainer ? blockContainer.querySelector('.media-skeleton') : null;
          const realSrc = item.getAttribute('data-src');

          if (realSrc) {
            item.src = realSrc;
            
            if (item.tagName === 'IFRAME') {
              item.addEventListener('load', () => {
                item.classList.add('loaded');
                if (skeleton) {
                  setTimeout(() => {
                    skeleton.style.transition = 'opacity 0.4s ease';
                    skeleton.style.opacity = '0';
                    setTimeout(() => skeleton.remove(), 400);
                  }, 200);
                }
              });
              
              // Fallback just in case load event is delayed
              setTimeout(() => {
                if (!item.classList.contains('loaded')) {
                  item.classList.add('loaded');
                  if (skeleton) skeleton.remove();
                }
              }, 4000);
            } else {
              item.addEventListener('load', () => {
                item.classList.add('loaded');
                if (skeleton) {
                  setTimeout(() => {
                    skeleton.style.transition = 'opacity 0.4s ease';
                    skeleton.style.opacity = '0';
                    setTimeout(() => skeleton.remove(), 400);
                  }, 100);
                }
              });
            }
          }

          observer.unobserve(item);
        }
      });
    }, {
      root: container,
      rootMargin: '250px 0px'
    });

    lazyItems.forEach(item => modalObserver.observe(item));
  }

  closeBtn.addEventListener('click', closeProject);
  backdrop.addEventListener('click', closeProject);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeProject();
  });
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

// ===== CURSOR TRACKING =====
function initCursorTracking() {
  const avatar = document.getElementById('avatar3d');
  if (!avatar) return;
  let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
  const maxMove = 18;
  window.addEventListener('mousemove', (e) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;
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

  document.querySelectorAll('.reveal, .section-mega-title, .contact-inner').forEach(el => {
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
    observer.observe(el);
  });
}

// ===== LANGUAGE =====
window.setLanguage = function (lang) {
  document.dispatchEvent(new CustomEvent('languageChange', { detail: { lang } }));
};

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    const btn = form.querySelector('button[type="submit"]');
    const lang = getCurrentLang();
    const t = translationData[lang] || translationData['ro'];

    btn.disabled = true;
    btn.style.opacity = '0.5';
    status.textContent = '';
    status.className = 'form-status';

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      });

      if (res.ok) {
        status.textContent = t['contact.success'] || 'Sent!';
        status.classList.add('success');
        form.reset();
      } else {
        throw new Error('Not ok');
      }
    } catch {
      status.textContent = t['contact.error'] || 'Error';
      status.classList.add('error');
    }

    btn.disabled = false;
    btn.style.opacity = '1';
  });
}
