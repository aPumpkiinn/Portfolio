import React from 'react';
import { motion } from 'framer-motion';
import PixelBlast from './PixelBlast';

const Hero = () => {
  const tickerItems = [
    { text: "CREATIVE", icon: "/img/logo.png" },
    { text: "DEVELOPER", icon: null },
    { text: "DESIGNER", icon: null },
    { text: "MINIMALIST", icon: null },
  ];

  const doubleTicker = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <section className="relative min-h-screen bg-black p-4 sm:p-8 md:p-12 select-none overflow-hidden flex flex-col pt-24 md:pt-36">
      
      {/* CADRE GENERAL NOIR ET FOND BLANC */}
      <div className="relative w-full flex-grow bg-white border-[4px] md:border-[8px] border-black rounded-[32px] md:rounded-[45px] overflow-hidden flex flex-col justify-center items-center px-6 sm:px-12 md:px-20">
        
        {/* PIXELBLAST BACKGROUND */}
        <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none overflow-hidden">
          <div style={{ width: '1080px', height: '1080px', position: 'relative' }}>
            <PixelBlast
              variant="square"
              pixelSize={3}
              color="#003f82"
              patternScale={2}
              patternDensity={1}
              enableRipples
              rippleSpeed={0.1}
              rippleThickness={0.01}
              rippleIntensityScale={0.1}
              speed={2}
              transparent
              edgeFade={1}
            />
          </div>
        </div>

        {/* --- BANDEAUX DÉFILANTS COLLÉS AUX BORDS (justify-between + py-4/py-6) --- */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.15] z-0 overflow-hidden py-0">
          
          {/* Ligne 1 : Défilement vers la gauche (Collée tout en haut) */}
          <div className="flex whitespace-nowrap w-max">
            <motion.div 
              animate={{ x: [0, "-33.33%"] }}
              transition={{ ease: "linear", duration: 22, repeat: Infinity }}
              className="flex items-center gap-16 text-[8vw] font-black uppercase text-[#00c8ff] font-octuple tracking-tighter line-height-none"
            >
              {doubleTicker.map((item, idx) => (
                <span key={idx} className="flex items-center gap-6">
                  {item.text}
                  {item.icon && <img src={item.icon} alt="" className="h-[5vw] w-auto object-contain opacity-40" />}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Ligne 2 : Défilement vers la droite (Collée tout en bas) */}
          <div className="flex whitespace-nowrap w-max">
            <motion.div 
              animate={{ x: ["-33.33%", 0] }}
              transition={{ ease: "linear", duration: 26, repeat: Infinity }}
              className="flex items-center gap-16 text-[8vw] font-black uppercase text-[#00c8ff] font-octuple tracking-tighter line-height-none"
            >
              {doubleTicker.map((item, idx) => (
                <span key={idx} className="flex items-center gap-6">
                  {item.text}
                  {item.icon && <img src={item.icon} alt="" className="h-[5vw] w-auto object-contain opacity-40" />}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CONTENU PRINCIPAL (TEXTES ET BOUTON) */}
        <div className="max-w-7xl w-full flex flex-col text-left z-10 py-16 md:py-24">
          
          {/* PETIT SOUS-TITRE */}
          <div className="overflow-hidden mb-6">
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-black/40 font-bold flex items-center gap-3"
            >
              <span className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse shadow-[0_0_15px_rgba(0,255,65,1),0_0_30px_rgba(0,255,65,0.8)]" />
              Disponible pour de nouveaux projets — 2026
            </motion.p>
          </div>

          {/* GROS TITRE : NOM & PRENOM */}
          <h1 className="text-[11vw] md:text-[8vw] font-title font-black uppercase text-black leading-[0.85] tracking-tighter mb-12">
            <div className="overflow-hidden py-2 block">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="block"
              >
                Kevin
              </motion.span>
            </div>
            <div className="overflow-hidden py-2 block">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                className="block italic font-light font-rumei normal-case"
              >
                anguile-diop
              </motion.span>
            </div>
            <div className="overflow-hidden py-2 block">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="block text-xl md:text-2xl font-medium tracking-[0.2em] text-black/60 mt-4 normal-case font-sans"
              >
                Créatif & Développeur
              </motion.span>
            </div>
          </h1>

          {/* PARAGRAPHE DE DESCRIPTION ET BOUTON */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-4">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-black/70 text-lg md:text-xl max-w-2xl font-light leading-relaxed"
            >
              Bonjour, je suis étudiant en deuxième année de BUT MMI, actuellement en recherche d'une alternance. Passionné par le design et le développement, j'aime concevoir des interfaces web fluides, esthétiques et interactives.
            </motion.p>

            {/* BOUTON INTERACTIF */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative group shrink-0"
            >
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative overflow-hidden px-10 py-5 rounded-full border-2 border-black text-black bg-[#00c8ff] font-medium uppercase text-xs tracking-widest transition-colors duration-300"
              >
                <span className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) group-hover:translate-y-0" />
                
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white flex items-center gap-3">
                  Découvrir mon travail
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>
            </motion.div>
          </div>

        </div>

        {/* INDICATEUR DE SCROLL */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="h-8 w-[1px] bg-gradient-to-b from-black to-transparent animate-bounce opacity-30" />
        </div>

      </div>
    </section>
  );
};

export default Hero;