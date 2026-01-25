import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

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
      <AnimatePresence mode="wait">
        {/* La clé (key) ici est le secret : elle force React à détruire/recréer la page */}
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