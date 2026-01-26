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
      backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'padding 0.4s ease, background-color 0.4s ease',
      animation: 'slideDown 0.8s ease-out forwards',
      boxSizing: 'border-box'
    }}>
      
      {/* --- LOGO --- */}
      <Link to="/" aria-label="Accueil" style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src="img/logo.webp" 
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

      {/* --- NAVIGATION & ACTIONS --- */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
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

        {/* --- BOUTON CONTACT (DESKTOP) --- */}
        <button 
          onClick={onOpenContact}
          className="contact-btn-header"
          style={{
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            padding: '8px 20px',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            borderRadius: '2px'
          }}
        >
          Contact
        </button>

        {/* --- BOUTON HAMBURGER (MOBILE) --- */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="hamburger-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}
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
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.7;
          transition: opacity 0.3s;
        }
        .nav-link:hover { opacity: 1; }

        .contact-btn-header:hover {
          background-color: #646cff;
          color: white;
        }

        @media (max-width: 768px) {
          .contact-btn-header { display: none; } /* On cache le bouton sur mobile pour utiliser le burger */
          .nav-menu {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100vh;
            background: rgba(0,0,0,0.98);
            display: flex; align-items: center; justify-content: center;
            transform: translateY(-100%);
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .nav-menu.open { transform: translateY(0); }
          .nav-list { flex-direction: column; gap: 30px; list-style: none; text-align: center; }
          .nav-link { font-size: 1.5rem; }
        }

        @media (min-width: 769px) {
          .hamburger-btn { display: none; }
          .nav-list { display: flex; gap: 35px; list-style: none; margin: 0; padding: 0; }
        }
      `}</style>
    </header>
  );
};

const lineStyle = {
  width: '24px',
  height: '2px',
  backgroundColor: 'white',
  margin: '5px 0',
  transition: '0.4s ease',
};

export default Header;