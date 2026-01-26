import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import './Header.css';

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRefs = useRef([]);
  const mobileOverlayRef = useRef(null);
  const mobileLinksRefs = useRef([]);
  const lastScrollY = useRef(0);
  const mobileTl = useRef(null);

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'À Propos', href: '/Apropos' },
    { label: 'Projets', href: '/projects' },
    { label: 'Contact', href: '/Apropos#contact' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline()
        .fromTo(headerRef.current, { yPercent: -100 }, { yPercent: 0, duration: 0.8, ease: 'power3.out' })
        .from(logoRef.current, { opacity: 0, x: -20, duration: 0.5 }, '-=0.4')
        .from(navLinksRefs.current, { opacity: 0, y: -10, stagger: 0.1, duration: 0.4 }, '-=0.3');

      mobileTl.current = gsap.timeline({ paused: true })
        .to(mobileOverlayRef.current, { opacity: 1, visibility: 'visible', duration: 0.4, ease: 'power2.inOut' })
        .to(mobileLinksRefs.current, { opacity: 1, y: 0, stagger: 0.08, duration: 0.3, ease: 'back.out(1.2)' }, '-=0.2');
    }, headerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileOpen) return;
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        gsap.to(headerRef.current, { yPercent: -105, duration: 0.4, overwrite: true });
      } else {
        gsap.to(headerRef.current, { yPercent: 0, duration: 0.4, overwrite: true });
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileOpen]);

  const toggleMenu = useCallback(() => {
    setIsMobileOpen(prev => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : ''; 
      if (next) mobileTl.current.play();
      else mobileTl.current.reverse();
      return next;
    });
  }, []);

  return (
    <header className="classic-header" ref={headerRef} role="banner">
      <Link to="/" className="header-logo" ref={logoRef} aria-label="Retour à l'accueil">
        <img 
            src="/logo.svg" 
            alt="Mon Portfolio" 
            width="90" 
            height="90"
            fetchpriority="high"
            style={{ height: '90px', width: 'auto' }} 
        />
      </Link>

      <nav className="desktop-nav" aria-label="Navigation principale">
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
                ref={el => navLinksRefs.current[index] = el}
                onMouseEnter={(e) => gsap.to(e.currentTarget, { '--underline-width': '100%', duration: 0.3 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { '--underline-width': '0%', duration: 0.3 })}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button 
        className={`hamburger-btn ${isMobileOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isMobileOpen}
      >
        <span className="span-line line-1"></span>
        <span className="span-line line-2"></span>
        <span className="span-line line-3"></span>
      </button>

      <div className="mobile-overlay" ref={mobileOverlayRef} aria-hidden={!isMobileOpen}>
        <nav aria-label="Menu mobile">
          <ul className="mobile-nav-list">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href} className="mobile-nav-link" ref={el => mobileLinksRefs.current[index] = el} onClick={toggleMenu}>
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