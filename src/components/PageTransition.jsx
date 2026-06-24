import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children, direction = "vertical" }) => {
  const isHorizontal = direction === "horizontal";

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

      {/* 2. LE RIDEAU EN VOLETS (STAGGERED COLUMNS OU ROWS) */}
      <div className={`fixed inset-0 z-[99999] pointer-events-none flex w-full h-[100dvh] overflow-hidden ${isHorizontal ? 'flex-col' : 'flex-row'}`}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`bg-black relative ${isHorizontal ? 'h-1/5 w-full' : 'w-1/5 h-full'}`}
            // Au chargement initial, les bandes couvrent l'écran
            initial={isHorizontal ? { x: "0%" } : { y: "0%" }} 
            // Puis elles glissent hors de l'écran (vers la droite ou vers le haut)
            animate={isHorizontal ? { x: "100%" } : { y: "-100%" }} 
            // Quand on quitte la page, elles reviennent pour cacher l'écran
            exit={isHorizontal ? { x: "0%" } : { y: "0%" }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.08 // Délai progressif pour créer l'effet d'escalier
            }}
          />
        ))}
      </div>
    </>
  );
};

export default PageTransition;