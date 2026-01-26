import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ items = [], onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      padding: scrolled ? '10px 40px' : '20px 40px',
      backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'all 0.4s ease',
      boxSizing: 'border-box'
    }}>
      
      {/* --- LOGO --- */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', zIndex: 110 }}>
        <img 
          src="/img/logo.webp" 
          alt="Logo" 
          width="142" 
          height="70"
          style={{ 
            height: scrolled ? '30px' : '40px', 
            width: 'auto', 
            transition: 'height 0.4s ease' 
          }} 
        />
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
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
            {/* Bouton contact intégré au menu mobile pour plus d'espace */}
            <li className="mobile-only">
              <button 
                onClick={() => { onOpenContact(); setIsOpen(false); }}
                className="nav-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#646cff' }}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* --- BOUTON CONTACT (DESKTOP) --- */}
        <button 
          onClick={onOpenContact}
          className="contact-btn-desktop"
          style={{
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            padding: '10px 24px',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            cursor: 'pointer',
            borderRadius: '2px',
            transition: 'all 0.3s ease'
          }}
        >
          Contact
        </button>

        {/* --- HAMBURGER --- */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="hamburger-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', zIndex: 110 }}
        >
          <div style={{ ...lineStyle, transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }}></div>
          <div style={{ ...lineStyle, opacity: isOpen ? 0 : 1 }}></div>
          <div style={{ ...lineStyle, transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : '' }}></div>
        </button>
      </div>

      <style>{`
        .nav-link {
          color: #ffffff;
          text-decoration: none;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          opacity: 0.6;
          transition: 0.3s;
        }
        .nav-link:hover { opacity: 1; }

        .contact-btn-desktop:hover {
          background-color: #646cff;
          color: white;
        }

        @media (max-width: 768px) {
          .contact-btn-desktop { display: none; }
          
          .nav-menu {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100vh;
            background: #000;
            display: flex; align-items: center; justify-content: center;
            transform: translateY(-100%);
            transition: transform 0.6s cubic-bezier(0.85, 0, 0.15, 1);
          }
          .nav-menu.open { transform: translateY(0); }
          
          /* ESPACEMENT DES BOUTONS ICI */
          .nav-list { 
            display: flex;
            flex-direction: column; 
            gap: 50px; /* Augmenté pour un menu plus aéré */
            list-style: none; 
            text-align: center;
            padding: 0;
          }
          .nav-link { font-size: 1.8rem; font-weight: 300; }
          .mobile-only { display: block; }
        }

        @media (min-width: 769px) {
          .hamburger-btn, .mobile-only { display: none; }
          .nav-list { display: flex; gap: 40px; list-style: none; }
        }
      `}</style>
    </header>
  );
};

const lineStyle = {
  width: '24px', height: '2px', backgroundColor: 'white', margin: '5px 0', transition: '0.4s'
};

export default Header;