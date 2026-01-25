import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import './Header.css';

// Si vous avez un fichier logo image :
// import logoImg from '../assets/logo.svg';

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  
  // Refs pour GSAP
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRefs = useRef([]);
  const mobileOverlayRef = useRef(null);
  const mobileLinksRefs = useRef([]);
  const hamburgerRef = useRef(null);
  
  // Timeline pour le menu mobile (pour pouvoir jouer/inverser)
  const mobileTl = useRef(gsap.timeline({ paused: true }));

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'À Propos', href: '/apropos' },
    { label: 'Projets', href: '/projets' },
    { label: 'Contact', href: '/contact' },
  ];

  // --- 1. ANIMATION D'ENTRÉE (Au chargement) ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      // On rend le header visible avant de lancer l'anim
      gsap.set(headerRef.current, { visibility: 'visible' });

      const tl = gsap.timeline();
      tl.from(headerRef.current, {
        yPercent: -100, // Arrive du haut
        duration: 0.8,
        ease: 'power3.out',
      })
      .from(logoRef.current, {
        opacity: 0,
        x: -20,
        duration: 0.5,
        ease: 'power2.out'
      }, '-=0.4') // Commence un peu avant la fin de l'anim précédente
      .from(navLinksRefs.current, {
        opacity: 0,
        y: -10,
        stagger: 0.1, // Apparition en cascade des liens
        duration: 0.4,
        ease: 'power2.out'
      }, '-=0.3');
    }, headerRef);

    return () => ctx.revert();
  }, []);


  // --- 2. CONFIGURATION ANIMATION MOBILE ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      mobileTl.current
        .to(mobileOverlayRef.current, {
          opacity: 1,
          visibility: 'visible',
          pointerEvents: 'auto',
          duration: 0.4,
          ease: 'power2.inOut'
        })
        .to(mobileLinksRefs.current, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.3,
          ease: 'back.out(1.2)'
        }, '-=0.2');
    });

    return () => ctx.revert();
  }, []);


  // --- 3. GESTION HOVER (Soulignement) ---
  const handleMouseEnter = (e) => {
    // On cible le pseudo-élément ::after via CSSRulePlugin ou plus simplement en animant la largeur
    // Note : Animer des pseudo-éléments avec GSAP nécessite CSSRulePlugin.
    // Alternative simple sans plugin : animer une div enfant ou utiliser CSS transitions.
    // Ici, j'utilise une approche hybride simple et performante.
    gsap.to(e.currentTarget, { 
      '--underline-width': '100%', 
      duration: 0.3, 
      ease: 'power2.out' 
    });
  };

  const handleMouseLeave = (e) => {
    // On détermine le sens de la sortie pour un effet plus sympa
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const leftExit = e.clientX < rect.left + rect.width / 2;
    
    gsap.to(el, {
      '--underline-width': '0%',
      duration: 0.3,
      ease: 'power2.in',
      // Astuce : si on sort par la droite, la ligne disparaît vers la droite
      css: { left: leftExit ? 0 : 'auto', right: leftExit ? 'auto' : 0 }
    });
    // Reset pour le prochain hover
    setTimeout(() => gsap.set(el, { left: 0, right: 'auto' }), 300);
  };


  // --- 4. TOGGLE MENU MOBILE ---
  const toggleMenu = () => {
    const nextState = !isMobileOpen;
    setIsMobileOpen(nextState);

    // Bloquer le scroll du body quand le menu est ouvert
    document.body.style.overflow = nextState ? 'hidden' : '';

    if (nextState) {
      mobileTl.current.play();
    } else {
      mobileTl.current.reverse();
    }
  };


  return (
    <header className="classic-header" ref={headerRef}>
      {/* LOGO À GAUCHE */}
      <Link to="/" className="header-logo" ref={logoRef}>
        {/* Option Image: <img src={logoImg} alt="Mon Portfolio" /> */}
        {/* Option Texte: */}
        MON PORTFOLIO
      </Link>

      {/* NAVIGATION BUREAU À DROITE */}
      <nav className="desktop-nav">
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
                ref={el => navLinksRefs.current[index] = el}
                // Nécessaire pour l'animation CSS/GSAP hybride du soulignement
                style={{ '--underline-width': '0%' }}
                onMouseEnter={(e) => gsap.to(e.currentTarget, { '--underline-width': '100%', duration: 0.3, ease: 'power2.out' })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { '--underline-width': '0%', duration: 0.3, ease: 'power2.in' })}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* BOUTON HAMBURGER MOBILE */}
      <button 
        className={`hamburger-btn ${isMobileOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        ref={hamburgerRef}
        aria-label="Menu"
      >
        <span className="span-line line-1"></span>
        <span className="span-line line-2"></span>
        <span className="span-line line-3"></span>
      </button>

      {/* OVERLAY MENU MOBILE */}
      <div className="mobile-overlay" ref={mobileOverlayRef}>
        <nav>
          <ul className="mobile-nav-list">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="mobile-nav-link"
                  ref={el => mobileLinksRefs.current[index] = el}
                  onClick={toggleMenu} // Ferme le menu au clic
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;