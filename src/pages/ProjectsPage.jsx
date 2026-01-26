import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SkewedCarousel from '../components/SkewedCarousel';
import PageTransition from '../components/PageTransition';
import { SiFigma, SiAdobeillustrator, SiReact, SiVite, SiTailwindcss, SiAdobeindesign } from 'react-icons/si';

// --- DATA COMPLÈTE (Chemins corrigés vers /img/) ---
const ALL_PROJECTS = [
  { 
    id: 1, 
    title: "Home Sweet Home", 
    category: "Infographie", 
    image: "/img/menu.webp", 
    year: "2025",
    desc: "Menu de Restaurant",
    longDesc: "Mon tout premier projet réalisé sur Adobe InDesign : la conception graphique complète d'un menu pour le restaurant de crêpes 'Home Sweet Home'.", 
    longDesc2: "Ce travail s'est concentré sur la mise en page éditoriale, la hiérarchie de l'information et la création d'une atmosphère chaleureuse propre à l'établissement.",
    stack: [<SiAdobeindesign />, <SiAdobeillustrator />]
  },
  { 
    id: 2, 
    title: "Watt Is", 
    category: "Design UI", 
    image: "/img/Wattis.webp", // Corrigé : /images/ -> /img/
    year: "2025",
    desc: "UI/UX Design",
    longDesc: "Watt Is est une application mobile conçue pour aider les utilisateurs à suivre et réduire leur consommation d'énergie au quotidien via une interface intuitive.", 
    longDesc2: "Le challenge était de rendre des données complexes visuellement simples et engageantes grâce à un design épuré et des micro-interactions fluides.",
    stack: [<SiFigma />, <SiAdobeillustrator />]
  },
  { 
    id: 3, 
    title: "Breizh Immo", 
    category: "Design UI", 
    image: "/img/immo.webp", // Corrigé : /images/ -> /img/
    year: "2025",
    desc: "Branding",
    longDesc: "Refonte complète de l'identité visuelle pour une agence immobilière basée en Bretagne. L'objectif était de moderniser l'image de marque tout en restant accessible.",
    longDesc2: "Conception du logo, de la charte graphique et du prototype haute fidélité pour le site web vitrine.",
    stack: [<SiAdobeillustrator />, <SiFigma />]
  },
  { 
    id: 4, 
    title: "Genesis", 
    category: "Infographie", 
    image: "/img/Genesis.webp", 
    year: "2025",
    desc: "Pixel Art",
    longDesc: "Projet de branding pour un jeu vidéo indépendant de type survival-horror avec une esthétique pixel art rétro.",
    longDesc2: "Travail sur les sprites, les décors et la typographie personnalisée pour coller à l'univers post-apocalyptique des années 80.",
    stack: [<SiAdobeillustrator />, <SiFigma />]
  },
  { 
    id: 5, 
    title: "Portfolio", 
    category: "Web", 
    image: "/img/Portfolio.webp", 
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

  const getFontClass = () => {
    switch (activeTab) {
      case 'Infographie':
      case 'Design UI':
        return 'font-rumei';
      case 'Web':
        return 'font-octuple';
      default:
        return 'font-title'; 
    }
  };

  return (
    <PageTransition>
      <title>{`Mes Projets | ${activeTab} — Portfolio`}</title>
      
      <main className="min-h-screen bg-black pt-24 md:pt-32 px-4 select-none flex flex-col items-center">
        <header className="text-center mb-12 md:mb-16 h-16 md:h-24 flex items-center justify-center w-full">
          <h1 className={`text-4xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tighter transition-all duration-500 text-white ${getFontClass()}`}>
            {activeTab === "Tous" ? "Mes Créations" : activeTab}
          </h1>
        </header>

        <nav className="flex justify-center mb-12 md:mb-24 w-full" aria-label="Filtres de catégories">
          <div className="max-w-full overflow-x-auto scrollbar-hide px-4">
            <ul className="flex flex-nowrap gap-2 md:gap-4 bg-white/5 p-1.5 md:p-2 rounded-full border border-white/10 backdrop-blur-xl w-max mx-auto">
              {CATEGORIES.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveTab(cat)}
                    className={`whitespace-nowrap px-4 md:px-8 py-2 md:py-2.5 rounded-full text-[9px] md:text-xs font-bold uppercase transition-all duration-300 ${
                      activeTab === cat 
                      ? 'bg-white text-black scale-105 shadow-lg' 
                      : 'text-gray-500 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <section className="w-full pb-16 md:pb-32 flex-grow">
          <SkewedCarousel key={activeTab} items={filteredProjects} onOpenProject={onOpenProject} />
        </section>

        <footer className="pb-8 md:pb-12 text-center w-full">
            <Link 
                to="/mentions-legales" 
                className="text-[10px] md:text-xs text-white/20 hover:text-[#646cff] transition-colors uppercase tracking-[0.2em] md:tracking-[0.3em] font-light"
            >
                — Mentions Légales —
            </Link>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </PageTransition>
  );
};

export default ProjectsPage;