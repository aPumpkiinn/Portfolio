import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import SkewedCarousel from '../components/SkewedCarousel';
import PageTransition from '../components/PageTransition';
// 👇 Import de la nouvelle modale
import ProjectModal from '../components/ProjectModal';

const allProjects = [
  // ... tes projets (pas besoin de changer ça)
  { id: 1, title: "Site E-commerce", category: "Web", image: "https://picsum.photos/600/600?random=1", desc: "React / Next.js" },
  { id: 2, title: "Dashboard Admin", category: "Web", image: "https://picsum.photos/600/600?random=2", desc: "Vue.js / Tailwind" },
  { id: 3, title: "App Mobile Banking", category: "Design UI", image: "https://picsum.photos/600/600?random=3", desc: "Figma Prototype" },
  { id: 4, title: "Redesign Netflix", category: "Design UI", image: "https://picsum.photos/600/600?random=4", desc: "UX Research" },
  { id: 5, title: "Affiche Festival", category: "Infographie", image: "https://picsum.photos/600/600?random=5", desc: "Photoshop / Illustrator" },
  { id: 6, title: "Logo Branding", category: "Infographie", image: "https://picsum.photos/600/600?random=6", desc: "Vector Art" },
];

const ProjectsPage = () => {
  const location = useLocation();

  // 👇 ÉTAT POUR LA MODALE
  const [selectedProject, setSelectedProject] = useState(null);

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'À Propos', href: '/Apropos' },
    { label: 'Contact', href: '/Apropos#contact' } 
  ];

  const initialCategory = location.state?.category || "Tous";
  const [activeTab, setActiveTab] = useState(initialCategory);

  const filteredProjects = activeTab === "Tous" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeTab);

  const displayTitle = activeTab === "Tous" ? "Mes Créations" : activeTab;

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white pt-32 px-6 overflow-x-hidden">
        
        <Header items={navItems} />

        {/* 👇 AJOUT DE LA MODALE ICI */}
        {/* Elle s'affiche par-dessus tout si selectedProject n'est pas null */}
        {selectedProject && (
            <ProjectModal 
                project={selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />
        )}

        <div className="flex flex-col items-center w-full">
          
          <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center uppercase font-title">
              {displayTitle}
          </h1>

          <div className="mb-12 relative z-10">
              <nav className="pill-nav">
                  <div className="pill-nav-items">
                      <ul className="pill-list flex gap-4 flex-wrap justify-center">
                          {['Tous', 'Web', 'Design UI', 'Infographie'].map((cat) => (
                              <li key={cat}>
                                  <button 
                                      onClick={() => setActiveTab(cat)}
                                      className={`px-6 py-2 rounded-full border transition-all duration-300 font-bold tracking-wide 
                                        ${activeTab === cat 
                                          ? 'bg-white text-black border-white' 
                                          : 'bg-transparent text-white border-white/30 hover:border-white'
                                        }`}
                                  >
                                      {cat}
                                  </button>
                              </li>
                          ))}
                      </ul>
                  </div>
              </nav>
          </div>

          <div className="w-full pb-20">
              {/* 👇 On passe la fonction d'ouverture au carrousel */}
              <SkewedCarousel 
                  items={filteredProjects} 
                  onOpenProject={(proj) => setSelectedProject(proj)}
              />
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;