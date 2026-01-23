import React, { useState, useEffect, useRef } from 'react';
import PillNav from './PillNav';
// Remplace par ton chemin réel
import LOGO_PATH from '../assets/sonic.svg'; 

const NAV_ITEMS = [
  { label: 'Accueil', href: '/' },
  { label: 'À Propos', href: '/about' },
  { label: 'Projets', href: '/projects' },
  { label: 'Contact', href: '/about#contact-section' } 
];

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 1. Toujours afficher si on est tout en haut de la page
      if (currentScrollY < 50) { 
        setIsHidden(false); 
        lastScrollY.current = currentScrollY; 
        return; 
      }
      
      // 2. Détection du sens du scroll avec un seuil (delta) de 10px
      // Scroll vers le bas -> Cacher
      if (currentScrollY > lastScrollY.current + 10) {
        setIsHidden(true);
      } 
      // Scroll vers le haut -> Afficher
      else if (currentScrollY < lastScrollY.current - 10) {
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logique simple pour déterminer le lien actif
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const activeLink = currentPath === '/' ? '/' : `/${currentPath.split('/')[1]}` || '/';

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '20px',
        pointerEvents: 'none', /* Laisse passer les clics autour du menu */
        transition: 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)', /* Transition douce */
        transform: isHidden ? 'translateY(-150%)' : 'translateY(0)',
      }}
    >
      {/* Container cliquable pour le menu lui-même */}
      <div style={{ pointerEvents: 'auto' }}>
        <PillNav
          logo={LOGO_PATH}
          logoAlt="Mon Portfolio"
          items={NAV_ITEMS}
          activeHref={activeLink}
          
          // --- CONFIGURATION DES COULEURS (Style Noir & Blanc) ---
          baseColor="#000000"           /* Fond du Logo, du conteneur Menu et de l'animation hover */
          pillColor="#FFFFFF"           /* Fond des boutons au repos */
          pillTextColor="#000000"       /* Texte des boutons au repos */
          hoveredPillTextColor="#FFFFFF" /* Texte des boutons au survol (devient blanc sur fond noir) */
        />
      </div>
    </header>
  );
};

export default Header;