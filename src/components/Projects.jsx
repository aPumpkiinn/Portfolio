import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectModal from '../components/ProjectModal';
import { SiFigma, SiAdobeillustrator, SiReact, SiVite, SiTailwindcss } from 'react-icons/si';

const ALL_PROJECTS = [
  { 
    id: 1, 
    title: "Watt Is", 
    category: "Design UI", 
    image: "/images/watt-is.webp", 
    description: "UI/UX App Design éco-responsable.", // Texte court pour la carte
    longDesc: "Watt Is est une application mobile conçue pour aider les utilisateurs à suivre et réduire leur consommation d'énergie au quotidien via une interface intuitive.", // Paragraphe 1 Modal
    longDesc2: "Le challenge était de rendre des données complexes (kWh, coûts) visuellement simples et engageantes grâce à un design épuré et des micro-interactions fluides.", // Paragraphe 2 Modal
    year: "2026", 
    stack: [<SiFigma />, <SiAdobeillustrator />] 
  },
  { 
    id: 2, 
    title: "Breizh Immo", 
    category: "Design UI", 
    image: "/images/breizh.webp", 
    description: "Logo & Interface pour agence immobilière.",
    longDesc: "Refonte complète de l'identité visuelle pour une agence immobilière basée en Bretagne. L'objectif était de moderniser l'image de marque tout en restant accessible.",
    longDesc2: "Conception du logo, de la charte graphique et du prototype haute fidélité pour le site web vitrine.",
    year: "2025", 
    stack: [<SiAdobeillustrator />, <SiFigma />] 
  },
  { 
    id: 3, 
    title: "Genesis", 
    category: "Infographie", 
    image: "/images/genesis.webp", 
    description: "Retro Zombie Game Branding.",
    longDesc: "Projet de branding pour un jeu vidéo indépendant de type survival-horror avec une esthétique pixel art rétro.",
    longDesc2: "Travail sur les sprites, les décors et la typographie personnalisée pour coller à l'univers post-apocalyptique des années 80.",
    year: "2025", 
    stack: [<SiAdobeillustrator />, <SiFigma />] 
  },
  { 
    id: 4, 
    title: "Portfolio", 
    category: "Web", 
    image: "/images/portfolio.webp", 
    description: "Creative Development & Portfolio.",
    longDesc: "Développement de mon portfolio personnel utilisant les dernières technologies web pour une performance et une fluidité maximale.",
    longDesc2: "Focus sur l'expérience utilisateur, les animations GSAP complexes et l'optimisation SEO/Performance (score 100 PageSpeed).",
    year: "2026", 
    stack: [<SiReact />, <SiVite />, <SiTailwindcss />] 
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="min-h-screen bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-6xl md:text-8xl font-title text-center mb-24 uppercase tracking-tighter">
          Mes Créations
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {ALL_PROJECTS.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-[#0d0d0d] border border-white/10 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/20"
            >
              <div className="h-72 overflow-hidden bg-[#161616]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-10">
                <span className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-3 block">{project.category}</span>
                <h3 className="text-white text-4xl font-medium mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-8">{project.description}</p>
                <button className="text-white font-bold border-b border-white/20 pb-1 group-hover:border-white transition-all">
                  Voir le projet →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL - Placé ici pour l'animation de sortie */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            isOpen={true} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;