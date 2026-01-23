import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Si pas de hash (ex: #contact), on remonte en haut (optionnel)
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // On attend un tout petit peu que la page se charge
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100); // 100ms de délai pour laisser React rendre le DOM
  }, [pathname, hash, key]); // Se déclenche à chaque changement de route

  return null;
};

export default ScrollToAnchor;