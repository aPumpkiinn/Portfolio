import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import MasonryGrid from '../components/MasonryGrid';
import PageTransition from '../components/PageTransition';
import PixelBlast from '../components/PixelBlast';
import { ALL_PROJECTS } from '../data/projects.data.jsx';  // ✅ import centralisé

const CATEGORIES = ['Tous', 'Web', 'Design UI', 'Infographie'];

const tickerItems = [
  { text: "CREATIVE", icon: "/img/logo.png" },
  { text: "GRAPHIC DESIGNER", icon: null },
  { text: "DESIGNER UI", icon: null },
  { text: "MINIMALIST", icon: null },
];
const doubleTicker = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

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

        {/* CADRE BLANC */}
        <div className="relative z-10 w-full bg-white border-[4px] md:border-[8px] border-black rounded-[32px] md:rounded-[45px] overflow-hidden flex flex-row">
          
          {/* PIXELBLAST BACKGROUND */}
          <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none overflow-hidden">
            <div style={{ width: '1080px', height: '1080px', position: 'relative' }}>
              <PixelBlast
                variant="square"
                pixelSize={3}
                color="#003f82"
                patternScale={2}
                patternDensity={1}
                enableRipples
                rippleSpeed={0.1}
                rippleThickness={0.01}
                rippleIntensityScale={0.1}
                speed={2}
                transparent
                edgeFade={1}
              />
            </div>
          </div>

          {/* Colonne Gauche : Ticker */}
          <div className="hidden lg:flex absolute left-0 top-0 bottom-0 w-20 xl:w-32 border-r border-black/5 justify-center overflow-hidden py-12 z-0" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            <motion.div 
              animate={{ y: [0, "33.33%"] }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
              className="flex items-center gap-12 text-5xl xl:text-7xl font-black uppercase text-black font-octuple tracking-tighter opacity-10"
            >
              {doubleTicker.map((item, idx) => (
                <span key={idx} className="flex items-center gap-6">
                  {item.text}
                  {item.icon && <img src={item.icon} alt="" className="h-10 xl:h-12 w-auto object-contain opacity-40 rotate-90" />}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Colonne Centrale : Contenu Principal */}
          <div className="flex-1 flex flex-col overflow-x-hidden relative lg:ml-20 xl:ml-32 lg:mr-20 xl:mr-32">
            <header className="text-center mt-12 md:mt-24 mb-8 md:mb-12 h-16 md:h-24 flex items-center justify-center w-full">
              <h1 className={`text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter transition-all duration-500 text-black ${getFontClass()}`}>
                {activeTab === "Tous" ? "Mes Créations" : activeTab}
              </h1>
            </header>

            <nav className="flex justify-center mb-8 md:mb-12 w-full" aria-label="Filtres de catégories">
              <div className="max-w-full overflow-x-auto scrollbar-hide px-4 py-2">
                <ul className="flex flex-nowrap gap-2 md:gap-4 bg-black/5 p-1.5 md:p-2 rounded-full border border-black/10 backdrop-blur-xl w-max mx-auto">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => setActiveTab(cat)}
                        className={`whitespace-nowrap px-4 md:px-8 py-2 md:py-2.5 rounded-full text-[9px] md:text-xs font-bold uppercase transition-all duration-300 ${
                          activeTab === cat 
                          ? 'bg-black text-white scale-105 shadow-lg' 
                          : 'text-gray-500 hover:text-black hover:bg-black/5'
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
                className="text-[10px] md:text-xs text-black/40 hover:text-[#646cff] transition-colors uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold"
              >
                — Mentions Légales —
              </Link>
            </footer>
          </div>

          {/* Colonne Droite : Ticker */}
          <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-20 xl:w-32 border-l border-black/5 justify-center overflow-hidden py-12 z-0" style={{ writingMode: 'vertical-rl' }}>
            <motion.div 
              animate={{ y: [0, "-33.33%"] }}
              transition={{ ease: "linear", duration: 25, repeat: Infinity }}
              className="flex items-center gap-12 text-5xl xl:text-7xl font-black uppercase text-black font-octuple tracking-tighter opacity-10"
            >
              {doubleTicker.map((item, idx) => (
                <span key={idx} className="flex items-center gap-6">
                  {item.text}
                  {item.icon && <img src={item.icon} alt="" className="h-10 xl:h-12 w-auto object-contain opacity-40 -rotate-90" />}
                </span>
              ))}
            </motion.div>
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