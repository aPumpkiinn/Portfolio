import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // 1. Pour savoir d'où on vient
import Header from '../components/Header';
import SkewedCarousel from '../components/SkewedCarousel';

const allProjects = [
  // --- PROJETS WEB ---
  { id: 1, title: "Site E-commerce", category: "Web", image: "https://picsum.photos/600/600?random=1", desc: "React / Next.js" },
  { id: 2, title: "Dashboard Admin", category: "Web", image: "https://picsum.photos/600/600?random=2", desc: "Vue.js / Tailwind" },
  
  // --- DESIGN UI ---
  { id: 3, title: "App Mobile Banking", category: "Design UI", image: "https://picsum.photos/600/600?random=3", desc: "Figma Prototype" },
  { id: 4, title: "Redesign Netflix", category: "Design UI", image: "https://picsum.photos/600/600?random=4", desc: "UX Research" },

  // --- INFOGRAPHIE ---
  { id: 5, title: "Affiche Festival", category: "Infographie", image: "https://picsum.photos/600/600?random=5", desc: "Photoshop / Illustrator" },
  { id: 6, title: "Logo Branding", category: "Infographie", image: "https://picsum.photos/600/600?random=6", desc: "Vector Art" },
];

const ProjectsPage = () => {
  const location = useLocation();

  // 2. RÉCUPÉRATION INTELLIGENTE
  // Si on vient de l'accueil, on prend la catégorie cliquée. Sinon "Tous".
  const initialCategory = location.state?.category || "Tous";
  
  const [activeTab, setActiveTab] = useState(initialCategory);

  // 3. LOGIQUE DE FILTRAGE
  // Si "Tous", on garde tout. Sinon, on filtre.
  const filteredProjects = activeTab === "Tous" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeTab);

  // On met à jour le titre affiché en gros
  const displayTitle = activeTab === "Tous" ? "Mes Créations" : activeTab;

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6 overflow-x-hidden">
      <Header />

      <div className="flex flex-col items-center w-full">
        
        {/* Titre dynamique */}
        <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center uppercase">
            {displayTitle}
        </h1>

        {/* --- PILL NAV (FILTRES) --- */}
        <div className="mb-12 relative z-10">
            <nav className="pill-nav">
                <div className="pill-nav-items">
                    <ul className="pill-list">
                        {/* 4. AJOUT DE 'TOUS' DANS LA LISTE */}
                        {['Tous', 'Web', 'Design UI', 'Infographie'].map((cat) => (
                            <li key={cat}>
                                <button 
                                    onClick={() => setActiveTab(cat)}
                                    className={`pill ${activeTab === cat ? 'bg-white text-black' : 'text-white hover:text-white'}`}
                                    style={{
                                        backgroundColor: activeTab === cat ? 'white' : 'transparent',
                                        color: activeTab === cat ? 'black' : 'white',
                                        border: 'none',
                                        cursor: 'pointer',
                                        padding: '10px 20px', // Un peu de style basique pour être sûr
                                        borderRadius: '999px'
                                    }}
                                >
                                    <span className="pill-label">{cat}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>

        {/* --- CAROUSEL --- */}
        <div className="w-full pb-20">
            <SkewedCarousel items={filteredProjects} />
        </div>

      </div>
    </div>
  );
};
// Changez aussi backgroundColor ici pour que ce soit cohérent
<section id="projects" style={{ backgroundColor: '#FF4D00', paddingBottom: '50px' }}></section>
export default ProjectsPage;