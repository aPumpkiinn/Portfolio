import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détecte le scroll pour réduire le header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      // Animation du padding et de la couleur au scroll
      padding: scrolled ? '10px 40px' : '20px 40px',
      backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      animation: 'slideDown 0.8s ease-out forwards', // Animation d'entrée
      boxSizing: 'border-box'
    }}>
      
      {/* --- LOGO --- */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', transition: 'transform 0.3s' }}>
        <img 
          src="img/logo.webp" 
          alt="Logo" 
          style={{ 
            height: scrolled ? '30px' : '40px', 
            width: 'auto', 
            transition: 'height 0.4s ease' 
          }} 
        />
      </Link>

      {/* --- BOUTON HAMBURGER --- */}
      <div onClick={() => setIsOpen(!isOpen)} className="hamburger-btn">
        <div style={{ ...lineStyle, transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }}></div>
        <div style={{ ...lineStyle, opacity: isOpen ? 0 : 1 }}></div>
        <div style={{ ...lineStyle, transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : '' }}></div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          {items.map((item, index) => (
            <li key={index}>
              <Link to={item.href} onClick={() => setIsOpen(false)} className="nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* --- ANIMATIONS CSS --- */}
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .nav-link {
          color: #ffffff;
          text-decoration: none;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 500;
          position: relative;
          padding: 5px 0;
          opacity: 0.8;
          transition: opacity 0.3s;
        }

        /* L'animation du soulignement */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #fff;
          transition: width 0.3s ease;
        }

        .nav-link:hover { opacity: 1; }
        .nav-link:hover::after { width: 100%; }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .nav-menu {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(0,0,0,0.95);
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .nav-menu.open { max-height: 400px; }
          .nav-list { flex-direction: column; padding: 30px; gap: 20px; align-items: center; display: flex; list-style: none; }
          .nav-link { font-size: 1.1rem; }
        }

        /* Desktop Styles */
        @media (min-width: 769px) {
          .hamburger-btn { display: none; }
          .nav-list { display: flex; gap: 35px; list-style: none; margin: 0; padding: 0; }
        }
      `}</style>
    </header>
  );
};

// Petit helper pour le style des lignes du hamburger
const lineStyle = {
  width: '24px',
  height: '2px',
  backgroundColor: 'white',
  margin: '4px 0',
  transition: '0.4s ease',
};

export default Header;