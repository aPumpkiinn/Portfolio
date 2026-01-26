import React, { useState, useMemo } from 'react';
import SkewedCarousel from '../components/SkewedCarousel';
import PageTransition from '../components/PageTransition';
import { SiFigma, SiAdobeillustrator, SiReact, SiVite, SiTailwindcss } from 'react-icons/si';

// --- DATA COMPLÈTE ---
const ALL_PROJECTS = [
  { 
    id: 1, 
    title: "Watt Is", 
    category: "Design UI", 
    image: "/images/watt-is.webp", 
    year: "2026",
    desc: "UI/UX Design",
    longDesc: "Watt Is est une application mobile conçue pour aider les utilisateurs à suivre et réduire leur consommation d'énergie au quotidien via une interface intuitive.", 
    longDesc2: "Le challenge était de rendre des données complexes visuellement simples et engageantes grâce à un design épuré et des micro-interactions fluides.",
    stack: [<SiFigma />, <SiAdobeillustrator />]
  },
  { 
    id: 2, 
    title: "Breizh Immo", 
    category: "Design UI", 
    image: "/images/breizh.webp", 
    year: "2025",
    desc: "Branding",
    longDesc: "Refonte complète de l'identité visuelle pour une agence immobilière basée en Bretagne. L'objectif était de moderniser l'image de marque tout en restant accessible.",
    longDesc2: "Conception du logo, de la charte graphique et du prototype haute fidélité pour le site web vitrine.",
    stack: [<SiAdobeillustrator />, <SiFigma />]
  },
  { 
    id: 3, 
    title: "Genesis", 
    category: "Infographie", 
    image: "/images/genesis.webp", 
    year: "2025",
    desc: "Pixel Art",
    longDesc: "Projet de branding pour un jeu vidéo indépendant de type survival-horror avec une esthétique pixel art rétro.",
    longDesc2: "Travail sur les sprites, les décors et la typographie personnalisée pour coller à l'univers post-apocalyptique des années 80.",
    stack: [<SiAdobeillustrator />, <SiFigma />]
  },
  { 
    id: 4, 
    title: "Portfolio", 
    category: "Web", 
    image: "/images/portfolio.webp", 
    year: "2026",
    desc: "Développement",
    longDesc: "Développement de mon portfolio personnel utilisant les dernières technologies web pour une performance et une fluidité maximale.",
    longDesc2: "Focus sur l'expérience utilisateur, les animations GSAP complexes et l'optimisation SEO/Performance (score 100 PageSpeed).",
    stack: [<SiReact />, <SiVite />, <SiTailwindcss />]
  }
];

const CATEGORIES = ['Tous', 'Web', 'Design UI', 'Infographie'];

const ProjectsPage = ({ onOpenProject }) => {
  const [activeTab, setActiveTab] = useState("Tous");

  const filteredProjects = useMemo(() => (
    activeTab === "Tous" ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === activeTab)
  ), [activeTab]);

  // Détermination de la police selon la catégorie active
  const getFontClass = () => {
    switch (activeTab) {
      case 'Infographie':
      case 'Design UI':
        return 'font-rumei'; // Rumei House Regular par Imoodev
      case 'Web':
        return 'font-octuple'; // Octuple Max Solid par deFharo
      default:
        return 'font-title'; // Police par défaut pour "Mes Créations"
    }
  };

  return (
    <PageTransition>
      <title>{`Mes Projets | ${activeTab} — Portfolio`}</title>
      
      <main className="min-h-screen bg-black pt-32 px-4 select-none">
        <header className="text-center mb-16 h-24 flex items-center justify-center">
          <h1 className={`text-6xl md:text-8xl font-bold uppercase tracking-tighter transition-all duration-500 ${getFontClass()}`}>
            {activeTab === "Tous" ? "Mes Créations" : activeTab}
          </h1>
        </header>

        <nav className="flex justify-center mb-24" aria-label="Filtres de catégories">
          <ul className="flex gap-4 bg-white/5 p-2 rounded-full border border-white/10 backdrop-blur-xl">
            {CATEGORIES.map(cat => (
              <li key={cat}>
                <button 
                  aria-label={`Afficher les projets ${cat}`}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase transition-all duration-300 ${activeTab === cat ? 'bg-white text-black scale-105' : 'text-gray-500 hover:text-white'}`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <section className="w-full pb-32">
          <SkewedCarousel key={activeTab} items={filteredProjects} onOpenProject={onOpenProject} />
        </section>
      </main>
    </PageTransition>
  );
};

export default ProjectsPage;