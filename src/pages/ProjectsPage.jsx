import React, { useState, useMemo, useCallback, useEffect } from 'react';
import SkewedCarousel from '../components/SkewedCarousel';
import PageTransition from '../components/PageTransition';

const ALL_PROJECTS = [
  { id: 1, title: "Watt Is", category: "Design UI", image: "/images/watt-is.webp", year: "2026", desc: "UI/UX Design" },
  { id: 2, title: "Breizh Immo", category: "Design UI", image: "/images/breizh.webp", year: "2025", desc: "Branding" },
  { id: 3, title: "Genesis", category: "Infographie", image: "/images/genesis.webp", year: "2025", desc: "Pixel Art" },
  { id: 4, title: "Portfolio", category: "Web", image: "/images/portfolio.webp", year: "2026", desc: "Développement" },
  { id: 5, title: "Blue Lock Site", category: "Web", image: "/images/blue-lock.webp", year: "2024", desc: "CMS Jimdo" }
];

const CATEGORIES = ['Tous', 'Web', 'Design UI', 'Infographie'];

const ProjectsPage = ({ onOpenProject }) => {
  const [activeTab, setActiveTab] = useState("Tous");

  const filteredProjects = useMemo(() => (
    activeTab === "Tous" ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === activeTab)
  ), [activeTab]);

  return (
    <PageTransition>
      {/* SEO Dynamique React 19 */}
      <title>{`Mes Projets | ${activeTab} — Portfolio`}</title>
      
      <main className="min-h-screen bg-black pt-32 px-4 select-none">
        <header className="text-center mb-16 h-24 flex items-center justify-center">
          <h1 className={`text-6xl md:text-8xl font-bold uppercase tracking-tighter ${activeTab === 'Infographie' ? 'font-rumei' : 'font-title'}`}>
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
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase transition-all ${activeTab === cat ? 'bg-white text-black scale-105' : 'text-gray-500 hover:text-white'}`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <section className="w-full pb-32">
          {/* Key={activeTab} force une reconstruction propre (évite le Layout Thrashing) */}
          <SkewedCarousel key={activeTab} items={filteredProjects} onOpenProject={onOpenProject} />
        </section>
      </main>
    </PageTransition>
  );
};

export default ProjectsPage;