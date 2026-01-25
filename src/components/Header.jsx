import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import './Header.css';

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  
  // --- REFS ---
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRefs = useRef([]);
  const mobileOverlayRef = useRef(null);
  const mobileLinksRefs = useRef([]);
  const hamburgerRef = useRef(null);
  
  // Pour le scroll intelligent
  const lastScrollY = useRef(0);
  
  // Timeline pour le menu mobile
  const mobileTl = useRef(gsap.timeline({ paused: true }));

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'À Propos', href: '/Apropos' },
    { label: 'Projets', href: '/projects' },
    { label: 'Contact', href: '/Apropos#contact' },
  ];

  // --- 1. ANIMATION D'ENTRÉE ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Le header descend du haut (-100% à 0%)
      tl.fromTo(headerRef.current, 
        { yPercent: -100 }, 
        { yPercent: 0, duration: 0.8, ease: 'power3.out' }
      )
      .from(logoRef.current, {
        opacity: 0, x: -20, duration: 0.5, ease: 'power2.out'
      }, '-=0.4')
      .from(navLinksRefs.current, {
        opacity: 0, y: -10, stagger: 0.1, duration: 0.4, ease: 'power2.out'
      }, '-=0.3');
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // --- 2. LOGIQUE DE SCROLL (Disparition/Apparition) ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (isMobileOpen) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // SCROLL VERS LE BAS
        gsap.to(headerRef.current, {
          yPercent: -100,
          duration: 0.3,
          ease: 'power2.inOut',
          overwrite: true
        });
      } else if (currentScrollY < lastScrollY.current) {
        // SCROLL VERS LE HAUT
        gsap.to(headerRef.current, {
          yPercent: 0,
          duration: 0.3,
          ease: 'power2.inOut',
          overwrite: true
        });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileOpen]);

  // --- 3. MENU MOBILE ---
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

  // --- 4. HOVER DES LIENS ---
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, { '--underline-width': '100%', duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { '--underline-width': '0%', duration: 0.3, ease: 'power2.in' });
  };

  // --- 5. TOGGLE MOBILE ---
  const toggleMenu = () => {
    const nextState = !isMobileOpen;
    setIsMobileOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : ''; 
    
    if (nextState) mobileTl.current.play();
    else mobileTl.current.reverse();
  };

  return (
    <header className="classic-header" ref={headerRef}>
      
      {/* LOGO */}
      {/* Le chemin commence par / car l'image est dans le dossier public */}
      <Link to="/" className="header-logo" ref={logoRef}>
        <img 
            src="src/public/logo.svg" 
            alt="Mon Portfolio" 
            style={{ height: '90px', width: 'auto' }} // Ajustez la taille ici si nécessaire
        />
      </Link>

      {/* NAVIGATION BUREAU */}
      <nav className="desktop-nav">
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
                ref={el => navLinksRefs.current[index] = el}
                style={{ '--underline-width': '0%' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* BOUTON BURGER */}
      <button 
        className={`hamburger-btn ${isMobileOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        ref={hamburgerRef}
      >
        <span className="span-line line-1"></span>
        <span className="span-line line-2"></span>
        <span className="span-line line-3"></span>
      </button>

      {/* OVERLAY MOBILE */}
      <div className="mobile-overlay" ref={mobileOverlayRef}>
        <nav>
          <ul className="mobile-nav-list">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="mobile-nav-link"
                  ref={el => mobileLinksRefs.current[index] = el}
                  onClick={toggleMenu}
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