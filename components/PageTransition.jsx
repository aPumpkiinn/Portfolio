// src/components/PageTransition.jsx
import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <>
      {/* 1. LE CONTENU DU SITE */}
      <motion.div
        className="relative z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>

      {/* 2. LE RIDEAU (STINGER) - VIDE */}
      <motion.div
        className="fixed inset-0 bg-white z-[99999] pointer-events-none"
        
        // Animation :
        // exit = Le rideau monte depuis le bas pour cacher l'écran
        // animate = Le rideau continue de monter vers le haut pour révéler la nouvelle page
        initial={{ scaleY: 1, originY: 0 }} 
        animate={{ scaleY: 0, originY: 0 }} 
        exit={{ scaleY: 1, originY: 1 }}    
        
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} 
      />
    </>
  );
};

export default PageTransition;