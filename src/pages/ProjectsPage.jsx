import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SkewedCarousel from '../components/SkewedCarousel';
import PageTransition from '../components/PageTransition';
import ProjectModal from '../components/ProjectModal';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiVite, SiFigma, SiAdobeillustrator } from 'react-icons/si';

const allProjects = [
  { 
    id: 1, 
    title: "Watt Is", 
    category: "Design UI", 
    image: "/images/watt-is.webp", 
    desc: "UI/UX App Design",
    year: "2026",
    longDesc: "Watt Is est une application éco-responsable qui a pour but de réduire la consommation d'électricité. L'outil permet de trouver, à l'aide d'un score précis, les appareils qui consomment le moins et indique où se les procurer.",
    longDesc2: "Sur ce projet, j'ai réalisé l'intégralité de la charte graphique et des icônes sur Illustrator, puis j'ai conçu toute l'interface utilisateur et le prototypage interactif sur Figma.",
    stack: [<SiFigma />, <SiAdobeillustrator />] 
  },
  { 
    id: 2, 
    title: "Breizh Immo", 
    category: "Design UI", 
    image: "/images/breizh.webp", 
    desc: "Logo & Interface Web",
    year: "2025",
    longDesc: "Breizh Immo est une agence immobilière située dans les Côtes-d'Armor. Le projet consistait à créer une image de marque solide et une interface moderne pour faciliter la recherche de biens.",
    longDesc2: "J'ai créé le logotype sur Illustrator pour refléter l'identité bretonne et j'ai participé activement à la création de l'interface utilisateur sur Figma.",
    stack: [<SiAdobeillustrator />, <SiFigma />] 
  },
  { 
    id: 3, 
    title: "Genesis", 
    category: "Infographie", 
    image: "/images/genesis.webp", 
    desc: "Retro Zombie Game",
    year: "2025",
    longDesc: "Genesis est un projet de jeu zombie rétro en pixel art. Nous avons dû créer une agence de A à Z pour porter ce projet, incluant toute l'identité visuelle.",
    longDesc2: "J'étais en charge du logo du jeu, de la charte graphique globale et de l'identité de l'agence. J'ai également conçu des assets de jeu et le design du site vitrine.",
    stack: [<SiAdobeillustrator />, <SiFigma />] 
  },
  { 
    id: 4, 
    title: "Portfolio", 
    category: "Web", 
    image: "/images/portfolio.webp", 
    desc: "Creative Development",
    year: "2026",
    longDesc: "Développement de mon portfolio personnel. Un défi technique visant à allier performance et design immersif pour présenter mes travaux de manière dynamique.",
    longDesc2: "Le projet repose sur une architecture moderne privilégiant la fluidité des animations et la clarté du code.",
    stack: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <SiReact />, <SiVite />] 
  },
  { 
    id: 5, 
    title: "Blue Lock Fan Site", 
    category: "Web", 
    image: "/images/blue-lock.webp", 
    desc: "CMS Development (Jimdo)",
    year: "2024",
    longDesc: "Réalisation d'un site vitrine dédié au manga Blue Lock et à son auteur. Ce projet a servi d'introduction aux systèmes de gestion de contenu (CMS) et à la structuration d'un site web complet.",
    longDesc2: "L'enjeu était de respecter l'univers visuel très dynamique du manga tout en apprenant à gérer l'ergonomie et le référencement via la plateforme Jimdo.",
    // On peut mettre une icône générique ou juste un texte stylisé dans le modal
    stack: [<span className="text-xs font-bold">JIMDO</span>, <span className="text-xs font-bold">CMS</span>] 
  }
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Tous");

  const handleOpen = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const filteredProjects = activeTab === "Tous" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeTab);

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white pt-32 overflow-hidden">
        <div className="flex flex-col items-center w-full">
          <h1 className={`text-5xl md:text-7xl font-bold mb-12 uppercase ${activeTab === 'Infographie' ? 'font-rumei' : 'font-title'}`}>
             {activeTab === "Tous" ? "Mes Créations" : activeTab}
          </h1>

          <nav className="mb-20 z-20">
            <ul className="flex flex-wrap justify-center gap-4 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm">
              {['Tous', 'Web', 'Design UI', 'Infographie'].map((cat) => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveTab(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-bold uppercase transition-all duration-300 ${activeTab === cat ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-full pb-20">
             <SkewedCarousel items={filteredProjects} onOpenProject={handleOpen} />
          </div>
        </div>

        <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;