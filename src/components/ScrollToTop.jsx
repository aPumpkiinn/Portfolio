import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // On remonte simplement en haut à chaque changement de page principal
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;