import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import ScrollToTop from './components/ScrollToTop';

// 👇 1. On importe le nouveau Header classique
import Header from './components/Header';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactModal from './components/ContactModal'; 

import './App.css';

function App() {
  const location = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <>
      <ScrollToTop />

      {/* 👇 2. On l'affiche ici pour qu'il soit visible sur toutes les pages */}
      <Header />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage onOpenContact={openContact} />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/Apropos" element={<AboutPage onOpenContact={openContact} />} />
        </Routes>
      </AnimatePresence>

      {isContactOpen && <ContactModal onClose={closeContact} />}
    </>
  );
}

export default App;