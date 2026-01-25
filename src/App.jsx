import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// --- COMPOSANTS CRITIQUES (Chargés immédiatement) ---
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import ContactModal from './components/ContactModal';
import ProjectModal from './components/ProjectModal';

// --- OPTIMISATION : LAZY LOADING (Performance Mobile) ---
// Les pages ne sont téléchargées que si l'utilisateur y accède.
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

import './App.css';

function App() {
  const location = useLocation();

  // --- ÉTATS ---
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // --- FONCTIONS MÉMOÏSÉES (Performance) ---
  const openContact = useCallback(() => setIsContactOpen(true), []);
  const closeContact = useCallback(() => setIsContactOpen(false), []);

  const openProject = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const closeProject = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // --- GESTION DU SCROLL LOCK ---
  // Empêche de scroller le site en arrière-plan quand une modale est ouverte
  useEffect(() => {
    const isLocked = isContactOpen || selectedProject !== null;
    document.body.style.overflow = isLocked ? 'hidden' : 'unset';
  }, [isContactOpen, selectedProject]);

  return (
    <>
      {/* Note SEO React 19 : 
          Tu peux placer <title> et <meta> directement dans tes composants de page.
          React les déplacera automatiquement dans le <head> du document.
      */}
      
      <ScrollToTop />
      <Header onOpenContact={openContact} />

      {/* Suspense affiche un écran noir (ou un loader) pendant le chargement des pages lourdes */}
      <Suspense fallback={<div className="h-screen bg-black" />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route 
              path="/" 
              element={<HomePage onOpenContact={openContact} />} 
            />
            <Route 
              path="/projects" 
              element={<ProjectsPage onOpenContact={openContact} onOpenProject={openProject} />} 
            />
            <Route 
              path="/Apropos" 
              element={<AboutPage onOpenContact={openContact} />} 
            />
          </Routes>
        </AnimatePresence>
      </Suspense>

      {/* --- MODALES --- */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={closeContact} 
      />
      
      <ProjectModal 
        project={selectedProject} 
        onClose={closeProject} 
      />
    </>
  );
}

export default App;