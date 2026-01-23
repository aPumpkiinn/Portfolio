import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactModal from './components/ContactModal'; 
import Header from './components/Header'; 
import PageTransition from './components/PageTransition'; 
import './App.css';

function App() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Fonction pour ouvrir le modal
  const openContact = () => setIsContactOpen(true);

  return (
    <>
      {showIntro && <PageTransition onComplete={() => setShowIntro(false)} />}

      {!showIntro && (
         <Header onOpenContact={openContact} />
      )}

      {isContactOpen && (
        <ContactModal onClose={() => setIsContactOpen(false)} />
      )}

      <Routes location={location} key={location.pathname}>
        {/* IMPORTANT : On passe la fonction 'openContact' aux pages via une prop */}
        
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