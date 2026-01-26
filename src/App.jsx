import React, { useState, useCallback, Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import ProjectModal from './components/ProjectModal';
import ContactModal from './components/ContactModal';
import ScrollToTop from './components/ScrollToTop';


// Lazy loading pour alléger le thread principal au démarrage
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

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

  useEffect(() => {
    document.body.style.overflow = (isContactOpen || selectedProject) ? 'hidden' : 'unset';
  }, [isContactOpen, selectedProject]);

  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased">
      <ScrollToTop />
      <Header items={NAV_ITEMS} onOpenContact={openContact} />

      {/* Suspense prévient la page blanche pendant le chargement des chunks */}
      <Suspense fallback={<div className="h-screen bg-black" />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage onOpenContact={openContact} />} />
            <Route path="/projects" element={<ProjectsPage onOpenProject={openProject} />} />
            <Route path="/Apropos" element={<AboutPage onOpenContact={openContact} />} />
          </Routes>
        </AnimatePresence>
      </Suspense>

      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <ProjectModal project={selectedProject} onClose={closeProject} />
    </div>
  );
}
import MentionsLegales from './pages/MentionsLegales';

// Dans votre composant App ou Router :
<Routes>
  <Route path="/" element={<ProjectsPage />} />
  <Route path="/mentions-legales" element={<MentionsLegales />} />
</Routes>

export default App;