import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SkewedCarousel from '../components/SkewedCarousel';
import PageTransition from '../components/PageTransition';
import { ALL_PROJECTS } from '../data/projects.data.jsx';  // ✅ import centralisé

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