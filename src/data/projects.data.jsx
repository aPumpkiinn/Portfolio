import { SiFigma, SiAdobeillustrator, SiReact, SiVite, SiTailwindcss, SiAdobeindesign } from 'react-icons/si';

export const ALL_PROJECTS = [
  { 
    id: 1, 
    title: "Home Sweet Home", 
    category: "Infographie", 
    images: ["/img/MenuLogo.webp", "/img/Menu1.webp", "/img/Menu2.webp", "/img/Menu3.webp", "/img/Menu4.webp",],
    year: "2025",
    desc: "Menu de Restaurant",
    description: "Menu de Restaurant",
    longDesc: "Mon tout premier projet réalisé sur Adobe InDesign : la conception graphique complète d'un menu pour le restaurant de crêpes 'Home Sweet Home'.", 
    longDesc2: "Ce travail s'est concentré sur la mise en page éditoriale, la hiérarchie de l'information et la création d'une atmosphère chaleureuse propre à l'établissement.",
    stack: [<SiAdobeindesign key="id" />, <SiAdobeillustrator key="ai" />]
  },
  { 
    id: 2, 
    title: "Watt Is", 
    category: "Design UI", 
    images: ["/img/WattIslogo.svg", "/img/WattIsP6.webp", "/img/WattIsP1.webp", "/img/WattIsP2.webp", "/img/WattIsP3.webp"],
    year: "2025",
    desc: "UI/UX Design",
    description: "UI/UX App Design éco-responsable.",
    longDesc: "Watt Is est une application mobile conçue pour aider les utilisateurs à suivre et réduire leur consommation d'énergie au quotidien via une interface intuitive.", 
    longDesc2: "Le challenge était de rendre des données complexes visuellement simples et engageantes grâce à un design épuré et des micro-interactions fluides.",
    stack: [<SiFigma key="fig" />, <SiAdobeillustrator key="ai" />]
  },
  { 
    id: 3, 
    title: "Breizh Immo", 
    category: "Design UI", 
    images: ["/img/Immologo.svg", "/img/immo.webp", "/img/ImmoP1.webp", "/img/ImmoP2.webp", "/img/ImmoP3.webp", "/img/ImmoP4.webp"],
    year: "2025",
    desc: "Branding",
    description: "Logo & Interface pour agence immobilière.",
    longDesc: "Refonte complète de l'identité visuelle pour une agence immobilière basée en Bretagne. L'objectif était de moderniser l'image de marque tout en restant accessible.",
    longDesc2: "Conception du logo, de la charte graphique et du prototype haute fidélité pour le site web vitrine.",
    stack: [<SiAdobeillustrator key="ai" />, <SiFigma key="fig" />]
  },
  { 
    id: 4, 
    title: "Genesis", 
    category: "Infographie", 
    images: ["/img/Genesis.webp"],
    year: "2025",
    desc: "Pixel Art",
    description: "Retro Zombie Game Branding.",
    longDesc: "Projet de branding pour un jeu vidéo indépendant de type survival-horror avec une esthétique pixel art rétro.",
    longDesc2: "Travail sur les sprites, les décors et la typographie personnalisée pour coller à l'univers post-apocalyptique des années 80.",
    stack: [<SiAdobeillustrator key="ai" />, <SiFigma key="fig" />]
  },
  { 
    id: 5, 
    title: "Portfolio", 
    category: "Web", 
    images: ["/img/Portfolio.webp"],
    year: "2026",
    desc: "Développement",
    description: "Creative Development & Portfolio.",
    longDesc: "Développement de mon portfolio personnel utilisant les dernières technologies web pour une performance et une fluidité maximale.",
    longDesc2: "Focus sur l'expérience utilisateur, les animations GSAP complexes et l'optimisation SEO/Performance.",
    stack: [<SiReact key="re" />, <SiVite key="vi" />, <SiTailwindcss key="tw" />]
  },
  {
    id: 6,
    title: "Motion",
    category: "Infographie",
    images: ["/img/Bateau.gif", "/img/Velo.gif"],
    year: "2025",
    desc: "Motion Design",
    description: "Animations After Effects — Apprentissage.",
    longDesc: "Ensemble d'animations réalisées lors de mon apprentissage d'After Effects. Explorations de keyframes, d'expressions et de transitions pour maîtriser le motion design.",
    longDesc2: "Chaque animation représente une étape de progression : du simple morphing à des compositions plus complexes.",
    stack: [<SiAdobeillustrator key="ai" />]
  }
];