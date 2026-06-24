import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ items = [], onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  // Détection du scroll pour adapter dynamiquement la taille du cadre
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] p-4 sm:p-6 md:p-10 pointer-events-none transition-all duration-300">
      
      {/* CADRE COMPACT EN BLANC ET NOIR AVEC OMBRE BRUTALISTE */}
      <div 
        className={`max-w-7xl mx-auto w-full bg-white border-[3px] border-black rounded-full flex items-center justify-between px-6 md:px-10 pointer-events-auto transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
          scrolled ? 'h-14 md:h-16' : 'h-18 md:h-20'
        }`}
      >
        
        {/* LOGO DYNAMIQUE (Prend en compte ton vrai fichier) */}
        <Link to="/" className="flex items-center z-[110]" onClick={() => setIsOpen(false)}>
          <img 
            src="/img/logo.png" 
            alt="Logo" 
            width="142" 
            height="70"
            className="w-auto object-contain transition-all duration-300"
            style={{ height: scrolled ? '40px' : '56px' }}
          />
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav 
          className="hidden md:flex items-center gap-1 font-sans text-sm font-bold uppercase tracking-widest"
          onMouseLeave={() => setHoveredNav(null)}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="relative px-5 py-2 text-black rounded-full z-10 transition-transform duration-200"
              onMouseEnter={() => setHoveredNav(index)}
              style={{ transform: hoveredNav === index ? 'scale(1.1)' : 'scale(1)' }}
            >
              {/* Rectangle vert citron fluide */}
              <AnimatePresence>
                {hoveredNav === index && (
                  <motion.span
                    layoutId="navHoverBackground"
                    className="absolute inset-0 bg-[#00c8ff] rounded-full z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* BOUTON CONTACT (DESKTOP) — Intègre ton action personnalisée */}
        <button 
          onClick={onOpenContact}
          className="hidden md:flex items-center gap-2 bg-black text-white border-2 border-black px-6 py-2.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest transition-all duration-300 hover:bg-transparent hover:text-black"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Contact
        </button>

        {/* BUTTON BURGER INTERACTIF (MOBILE) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 border-2 border-black rounded-full bg-transparent gap-1.5 z-[110] transition-colors"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="w-4 h-[2px] bg-black block rounded-full transform origin-center" 
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-4 h-[2px] bg-black block rounded-full" 
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className="w-4 h-[2px] bg-black block rounded-full transform origin-center" 
          />
        </button>
      </div>

      {/* OVERLAY NAVIGATION MOBILE INTERACTIVE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-24 left-4 right-4 bg-white border-[3px] border-black rounded-[32px] p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6 pointer-events-auto md:hidden"
          >
            <nav className="flex flex-col w-full text-left">
              {items.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 font-title font-black text-3xl uppercase tracking-tight text-black border-b border-black/5 last:border-none flex justify-between items-center transition-opacity active:opacity-60"
                >
                  {item.label}
                  <span className="text-xl">→</span>
                </Link>
              ))}
              
              {/* Bouton contact mobile stylisé en bas du menu */}
              <button 
                onClick={() => { onOpenContact(); setIsOpen(false); }}
                className="w-full mt-6 py-4 bg-black text-white rounded-2xl font-sans font-bold text-sm uppercase tracking-widest text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
              >
                Prendre Contact
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;