// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. Désactive la restauration automatique du navigateur (qui cause le bug)
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Si on a un lien vers une section précise (ex: #contact), on ne fait rien
    // (C'est la page elle-même qui gérera le scroll vers la section)
    if (hash) return;

    // 3. Sinon, on force le scroll tout en haut immédiatement
    window.scrollTo(0, 0);

  }, [pathname, hash]); // Se déclenche à chaque changement d'URL

  return null; // Ce composant n'affiche rien visuellement
};

export default ScrollToTop;