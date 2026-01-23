import React from 'react';
// 1. On importe useLocation pour savoir sur quelle page on est
import { Routes, Route, useLocation } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import PageTransition from './components/PageTransition'; // 2. Import du loader
import './App.css';

function App() {
  const location = useLocation(); // Permet de récupérer l'URL actuelle

  return (
    <>
      {/* 3. On place la Transition ICI, en dehors des Routes.
         La prop "key" force le composant à se recharger quand l'URL change.
      */}
      <PageTransition key={location.pathname} />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

// Note: Pour utiliser useLocation, App doit être dans un <Router>.
// Si votre <Router> est dans main.jsx, c'est bon.
// Sinon, il faut déplacer <Router> à l'intérieur de main.jsx autour de <App />.

export default App;
