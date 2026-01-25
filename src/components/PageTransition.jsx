import React, { useLayoutEffect } from 'react'; // 👈 Notez useLayoutEffect
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const { pathname } = useLocation();

  // 👇 C'EST ICI QUE LA MAGIE OPÈRE
  useLayoutEffect(() => {
    // 1. On coupe la restauration automatique du navigateur
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
    }
    
    // 2. On force le scroll à 0,0 AVANT même que l'animation commence
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // Pour Safari
    document.documentElement.scrollTop = 0; // Pour Chrome/Firefox
    
  }, [pathname]); // Se déclenche à CHAQUE changement de lien

  return (
    <>
      {/* 1. CONTENU DU SITE */}
      <motion.div
        className="relative z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>

      {/* 2. LE RIDEAU NOIR (STINGER) */}
      <motion.div
        className="fixed inset-0 bg-black z-[99999] pointer-events-none"
        
        initial={{ scaleY: 1, originY: 0 }} 
        animate={{ scaleY: 0, originY: 0 }} 
        exit={{ scaleY: 1, originY: 1 }}    
        
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} 
      />
    </>
  );
};

export default PageTransition;