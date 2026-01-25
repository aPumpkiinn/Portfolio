import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';

// Pages
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';

// Modals
import ContactModal from './components/ContactModal'; 
// 👇 1. IMPORT DU PROJECT MODAL (Manquant dans ton code)
import ProjectModal from './components/ProjectModal';

import './App.css';

function App() {
  const location = useLocation();

  // --- GESTION DU CONTACT ---
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  // --- GESTION DES PROJETS (C'était manquant) ---
  // On stocke le projet cliqué (objet) ou null si fermé
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
    // Optionnel : Bloquer le scroll du body quand la modal est ouverte
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <ScrollToTop />
      <Header />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          
          {/* On passe openContact à l'accueil */}
          <Route path="/" element={<HomePage onOpenContact={openContact} />} />
          
          {/* 👇 2. On passe openProject à la page Projets */}
          <Route path="/projects" element={<ProjectsPage onOpenContact={openContact} onOpenProject={openProject} />} />
          
          {/* On passe openContact à A Propos */}
          <Route path="/Apropos" element={<AboutPage onOpenContact={openContact} />} />
        
        </Routes>
      </AnimatePresence>

      {/* --- LES MODALS --- */}

      {/* Modal Contact */}
      {/* Note: Pour l'animation de sortie, assure-toi que ContactModal gère bien le onClose comme je te l'ai donné */}
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />

      {/* Modal Projet (S'affiche si un projet est sélectionné) */}
      {/* 👇 3. AFFICHAGE DU PROJECT MODAL */}
      <ProjectModal project={selectedProject} onClose={closeProject} />

    </>
  );
}

export default App;