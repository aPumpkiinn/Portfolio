import React, { useState, useCallback, Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import ProjectModal from './components/ProjectModal';
import ContactModal from './components/ContactModal';
import ScrollToTop from './components/ScrollToTop';

// Lazy loading pour optimiser le chargement
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales')); // Ajouté ici

const NAV_ITEMS = [
  { label: 'Accueil', href: '/' },
  { label: 'Projets', href: '/projects' },
  { label: 'À Propos', href: '/Apropos' }
];

function App() {
  const location = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openContact = useCallback(() => setIsContactOpen(true), []);
  const closeContact = useCallback(() => setIsContactOpen(false), []);
  const openProject = useCallback((p) => setSelectedProject(p), []);
  const closeProject = useCallback(() => setSelectedProject(null), []);

  // Bloque le scroll body quand un modal est ouvert
  useEffect(() => {
    document.body.style.overflow = (isContactOpen || selectedProject) ? 'hidden' : 'unset';
  }, [isContactOpen, selectedProject]);

  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased">
      <ScrollToTop />
      <Header items={NAV_ITEMS} onOpenContact={openContact} />

      {/* Suspense affiche un fond noir pendant le chargement des pages */}
      <Suspense fallback={<div className="h-screen bg-black" />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Page d'accueil */}
            <Route path="/" element={<HomePage onOpenContact={openContact} />} />
            
            {/* Page Projets - Garde vos descriptions et vos visuels Wattis, immo, Genesis, jimdo */}
            <Route path="/projects" element={<ProjectsPage onOpenProject={openProject} />} />
            
            {/* Page À Propos - Recherche de stage à partir d'Avril */}
            <Route path="/Apropos" element={<AboutPage onOpenContact={openContact} />} />
            
            {/* Page Mentions Légales - Correction de l'affichage */}
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </AnimatePresence>
      </Suspense>

      {/* Modals globaux */}
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <ProjectModal project={selectedProject} onClose={closeProject} />
    </div>
  );
}

export default App;