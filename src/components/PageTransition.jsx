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

      {/* 2. LE RIDEAU (STINGER) - EN NOIR */}
      <motion.div
        // 👇 J'ai remplacé 'bg-white' par 'bg-black'
        className="fixed inset-0 bg-black z-[99999] pointer-events-none"
        
        // Animation du rideau :
        // initial : Il couvre tout l'écran (scaleY: 1)
        // animate : Il se réduit vers le haut (scaleY: 0) pour révéler la page
        // exit : Il remonte depuis le bas (scaleY: 1) pour cacher la page
        initial={{ scaleY: 1, originY: 0 }} 
        animate={{ scaleY: 0, originY: 0 }} 
        exit={{ scaleY: 1, originY: 1 }}    
        
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} 
      />
    </>
  );
};

export default PageTransition;