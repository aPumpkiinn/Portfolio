import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import MasonryGrid from '../components/MasonryGrid';
import PageTransition from '../components/PageTransition';
import { ALL_PROJECTS } from '../data/projects.data.jsx';  // ✅ import centralisé

const CATEGORIES = ['Tous', 'Web', 'Design UI', 'Infographie', 'Expérience Pro'];

const ProjectsPage = ({ onOpenProject }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.filter || "Tous");

  useEffect(() => {
    if (location.state?.filter) {
      setActiveTab(location.state.filter);
    }
  }, [location.state]);

  const filteredProjects = useMemo(() => (
    activeTab === "Tous" ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === activeTab)
  ), [activeTab]);

  const getFontClass = () => {
    switch (activeTab) {
      case 'Infographie':
        return 'font-rumei italic tracking-wide normal-case';
      case 'Design UI':
        return 'font-sans italic tracking-normal normal-case';
      case 'Web':
        return 'font-octuple';
      default:
        return 'font-title'; 
    }
  };

  return (
    <PageTransition>
      <title>{`Mes Projets | ${activeTab} — Portfolio`}</title>
      
      <main className="bg-black select-none flex flex-col p-4 sm:p-8 md:p-12 pt-24 md:pt-36 relative overflow-hidden">
        
        {/* FOND NOIR SIMPLE */}

        {/* CADRE AVEC CONTOUR ULTRA FONCE ET EFFET 3D */}
        <div className="relative z-10 w-full bg-[#161616] border-[3px] md:border-[6px] border-[#080808] rounded-[32px] md:rounded-[45px] overflow-hidden flex flex-row shadow-[8px_8px_0_#111111] md:shadow-[14px_14px_0_#111111]">
          
          {/* Contenu Principal */}
          <div className="flex-1 flex flex-col overflow-x-hidden relative">
            <header className="text-center mt-12 md:mt-24 mb-8 md:mb-12 h-16 md:h-24 flex items-center justify-center w-full">
              <h1 className={`text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter transition-all duration-500 text-white ${getFontClass()}`}>
                {activeTab === "Tous" ? "Mes Créations" : activeTab}
              </h1>
            </header>

            <nav className="flex justify-center mb-8 md:mb-12 w-full" aria-label="Filtres de catégories">
              <div className="max-w-full overflow-x-auto scrollbar-hide px-4 py-2">
                <ul className="flex flex-nowrap gap-2 md:gap-4 bg-white/5 p-1.5 md:p-2 rounded-full border border-white/10 backdrop-blur-xl w-max mx-auto">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => setActiveTab(cat)}
                        className={`whitespace-nowrap px-4 md:px-8 py-2 md:py-2.5 rounded-full text-[9px] md:text-xs font-bold uppercase transition-all duration-300 ${
                          activeTab === cat 
                          ? 'bg-white text-black scale-105 shadow-lg' 
                          : 'text-gray-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <section className="w-full pb-4 md:pb-8 relative z-10">
              <MasonryGrid key={activeTab} items={filteredProjects} onOpenProject={onOpenProject} />
            </section>

            <footer className="pb-8 md:pb-12 text-center w-full">
              <Link 
                to="/mentions-legales" 
                className="text-[10px] md:text-xs text-white/40 hover:text-[#00c8ff] transition-colors uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold"
              >
                — Mentions Légales —
              </Link>
            </footer>
          </div>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </PageTransition>
  );
};

export default ProjectsPage;