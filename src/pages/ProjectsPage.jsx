import React, { useState, useMemo, useCallback, useEffect } from 'react';
import SkewedCarousel from '../components/SkewedCarousel';
import PageTransition from '../components/PageTransition';
import ProjectModal from '../components/ProjectModal';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiVite, SiFigma, SiAdobeillustrator } from 'react-icons/si';

// --- DATA (Mémoire optimisée : hors du cycle de rendu) ---
const ALL_PROJECTS = [
  { id: 1, title: "Watt Is", category: "Design UI", image: "/images/watt-is.webp", desc: "UI/UX App Design", year: "2026", longDesc: "Application éco-responsable...", stack: [<SiFigma />, <SiAdobeillustrator />] },
  { id: 2, title: "Breizh Immo", category: "Design UI", image: "/images/breizh.webp", desc: "Logo & Interface Web", year: "2025", longDesc: "Agence immobilière...", stack: [<SiAdobeillustrator />, <SiFigma />] },
  { id: 3, title: "Genesis", category: "Infographie", image: "/images/genesis.webp", desc: "Retro Zombie Game", year: "2025", longDesc: "Pixel art & Branding...", stack: [<SiAdobeillustrator />, <SiFigma />] },
  { id: 4, title: "Portfolio", category: "Web", image: "/images/portfolio.webp", desc: "Creative Development", year: "2026", longDesc: "Mon portfolio personnel...", stack: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <SiReact />, <SiVite />] },
  { id: 5, title: "Blue Lock Fan Site", category: "Web", image: "/images/blue-lock.webp", desc: "CMS Development", year: "2024", longDesc: "Introduction aux CMS...", stack: [<span className="text-xs font-bold">JIMDO</span>, <span className="text-xs font-bold">CMS</span>] }
];

const CATEGORIES = ['Tous', 'Web', 'Design UI', 'Infographie'];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Tous");

  // --- OPTIMISATION : Filtrage mémoïsé ---
  const filteredProjects = useMemo(() => (
    activeTab === "Tous" ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === activeTab)
  ), [activeTab]);

  // --- LOGIQUE : Gestion des Modals ---
  const handleOpen = useCallback((project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Nettoyage de l'objet sélectionné après l'animation de fermeture
  useEffect(() => {
    if (!isModalOpen) {
      const timer = setTimeout(() => setSelectedProject(null), 400);
      return () => clearTimeout(timer); // Sécurité : évite les fuites mémoire
    }
  }, [isContactOpen, isModalOpen]);

  // --- LOGIQUE : Scroll Lock ---
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
  }, [isModalOpen]);

  return (
    <PageTransition>
      <main className="min-h-screen bg-black text-white pt-32 overflow-hidden select-none">
        
        {/* SEO REACT 19 */}
        <title>{`Projets ${activeTab !== 'Tous' ? `| ${activeTab}` : ''} — Ton Nom`}</title>
        <meta name="description" content={`Découvrez mes travaux en ${activeTab}. Projets inclus : ${filteredProjects.slice(0, 3).map(p => p.title).join(', ')}.`} />

        <div className="flex flex-col items-center w-full px-4">
          
          {/* Header dynamique */}
          <header className="text-center mb-16 h-20 md:h-28 flex items-center justify-center">
            <h1 className={`text-5xl md:text-8xl font-bold uppercase tracking-tighter transition-all duration-700 ease-in-out ${activeTab === 'Infographie' ? 'font-rumei' : 'font-title'}`}>
                {activeTab === "Tous" ? "Mes Créations" : activeTab}
            </h1>
          </header>

          {/* Filtres avec micro-interactions */}
          <nav className="mb-24 z-20" aria-label="Catégories de projets">
            <ul className="flex flex-wrap justify-center gap-3 bg-white/5 p-2 rounded-full border border-white/10 backdrop-blur-xl">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveTab(cat)}
                    className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-500
                      ${activeTab === cat 
                        ? 'bg-white text-black scale-105 shadow-xl shadow-white/10' 
                        : 'text-gray-500 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Liste des projets */}
          <section className="w-full pb-32">
             {/* Clé unique basée sur la catégorie pour forcer une transition fluide si nécessaire */}
             <SkewedCarousel key={activeTab} items={filteredProjects} onOpenProject={handleOpen} />
          </section>
        </div>

        {/* Composant Modal */}
        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={handleClose} 
        />
      </main>
    </PageTransition>
  );
};

export default ProjectsPage;