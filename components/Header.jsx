import React, { useState, useEffect, useRef } from 'react';
import PillNav from './PillNav';
import LOGO_PATH from '../assets/sonic.svg'; 

const NAV_ITEMS = [
  { label: 'Accueil', href: '/' },
  { label: 'À Propos', href: '/about' },
  { label: 'Projets', href: '/projects' },
  // ✅ LE LIEN CIBLE MAINTENANT L'ANCRE
  { label: 'Contact', href: '/about#contact-section' } 
];

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) { setIsHidden(false); lastScrollY.current = currentScrollY; return; }
      
      if (currentScrollY > lastScrollY.current + 5) setIsHidden(true);
      else if (currentScrollY < lastScrollY.current - 5) setIsHidden(false);
      
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentPath = window.location.pathname; 
  const activeLink = currentPath === '/' ? '/' : currentPath.split('/')[1] ? `/${currentPath.split('/')[1]}` : currentPath;

  return (
    <div 
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 99, 
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        paddingTop: '24px', pointerEvents: 'none',
        transition: 'transform 0.4s ease-in-out',
        transform: isHidden ? 'translateY(-150px)' : 'translateY(0)',
      }}
    >
      <div style={{ pointerEvents: 'auto' }}>
        <PillNav
          logo={LOGO_PATH}
          logoAlt="Logo"
          items={NAV_ITEMS}
          activeHref={activeLink} 
          className="portfolio-pill-nav"
          baseColor="rgb(0, 0, 0)" 
          pillColor="rgb(255, 255, 255)" 
          hoveredPillTextColor="rgb(0, 0, 0)" 
          pillTextColor="rgb(0, 0, 0)"
        />
      </div>
    </div>
  );
};

export default Header;