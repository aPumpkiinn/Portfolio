import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import SkewedCarousel from '../components/SkewedCarousel';
import PageTransition from '../components/PageTransition';

const allProjects = [
  // ... vos projets (inchangés)
  { id: 1, title: "Site E-commerce", category: "Web", image: "https://picsum.photos/1920/1080?random=1", desc: "React / Next.js", year: "2025" },
  { id: 2, title: "Dashboard Admin", category: "Web", image: "https://picsum.photos/1920/1080?random=2", desc: "Vue.js / Tailwind", year: "2024" },
  { id: 3, title: "App Mobile Banking", category: "Design UI", image: "https://picsum.photos/1920/1080?random=3", desc: "Figma Prototype", year: "2024" },
  { id: 4, title: "Redesign Netflix", category: "Design UI", image: "https://picsum.photos/1920/1080?random=4", desc: "UX Research", year: "2024" },
  { id: 5, title: "Affiche Festival", category: "Infographie", image: "https://picsum.photos/1920/1080?random=5", desc: "Photoshop / Illustrator", year: "2023" },
  { id: 6, title: "Logo Branding", category: "Infographie", image: "https://picsum.photos/1920/1080?random=6", desc: "Vector Art", year: "2023" },
];

// 👇 1. AJOUTEZ onOpenProject ICI
const ProjectsPage = ({ onOpenProject }) => {
  const location = useLocation();

  const initialCategory = location.state?.category || "Tous";
  const [activeTab, setActiveTab] = useState(initialCategory);

  const filteredProjects = activeTab === "Tous" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeTab);

  const displayTitle = activeTab === "Tous" ? "Mes Créations" : activeTab;

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white pt-32 overflow-x-hidden">
        
        <div className="flex flex-col items-center w-full">
          
          <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center uppercase font-title">
             {displayTitle}
          </h1>

          {/* FILTRES */}
          <div className="mb-20 relative z-10">
              <nav className="flex justify-center">
                  <ul className="flex flex-wrap justify-center gap-4 bg-white/5 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10">
                      {['Tous', 'Web', 'Design UI', 'Infographie'].map((cat) => (
                          <li key={cat}>
                              <button 
                                  onClick={() => setActiveTab(cat)}
                                  className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300
                                  ${activeTab === cat 
                                      ? 'bg-white text-black scale-105' 
                                      : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                              >
                                  {cat}
                              </button>
                          </li>
                      ))}
                  </ul>
              </nav>
          </div>

          {/* 👇 2. PASSEZ LA FONCTION AU CARROUSEL ICI */}
          <div className="w-full pb-20">
             <SkewedCarousel 
                items={filteredProjects} 
                onOpenProject={onOpenProject} 
             />
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;