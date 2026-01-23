import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactModal from './components/ContactModal'; 
import Header from './components/Header'; 
import PageTransition from './components/PageTransition'; 
// 👇 1. Import du nouveau composant
import ScrollToAnchor from './components/ScrollToAnchor'; 
import './App.css';

function App() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Fonction pour ouvrir le modal
  const openContact = () => setIsContactOpen(true);

  return (
    <>
      {/* 👇 2. Ajout du gestionnaire de scroll ici (il est invisible) */}
      <ScrollToAnchor />

      {showIntro && <PageTransition onComplete={() => setShowIntro(false)} />}

      {!showIntro && (
         <Header onOpenContact={openContact} />
      )}

      {isContactOpen && (
        <ContactModal onClose={() => setIsContactOpen(false)} />
      )}

      {/* Tes routes existantes */}
      <Routes location={location} key={location.pathname}>
        
        <Route 
          path="/" 
          element={<HomePage onOpenContact={openContact} />} 
        />
        
        <Route 
          path="/about" 
          element={<AboutPage onOpenContact={openContact} />} 
        />
        
        <Route 
          path="/projects" 
          element={<ProjectsPage onOpenContact={openContact} />} 
        />

      </Routes>
    </>
  );
}

export default App;