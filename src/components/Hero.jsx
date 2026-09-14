import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {

  return (
    <section className="relative min-h-screen w-full bg-transparent p-3 sm:p-6 md:p-10 select-none flex flex-col justify-center pt-20 sm:pt-28 md:pt-32 pb-6">
      
      {/* CADRE GENERAL AVEC EFFET 3D ET CONTOUR ULTRA FONCE */}
      <div className="relative w-full flex-1 my-auto bg-[#161616] border-[3px] md:border-[6px] border-[#080808] rounded-[28px] md:rounded-[40px] flex flex-col justify-center items-center px-6 sm:px-12 lg:px-20 py-10 sm:py-16 md:py-20 shadow-[8px_8px_0_#111111] md:shadow-[14px_14px_0_#111111] transition-all duration-300">
        
        {/* CONTENU PRINCIPAL (TEXTES ET BOUTON) */}
        <div className="max-w-7xl w-full flex flex-col text-left z-10 my-auto">
          
          {/* PETIT SOUS-TITRE */}
          <div className="overflow-hidden mb-6">
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/60 font-bold flex items-center gap-3"
            >
              <span className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse shadow-[0_0_15px_rgba(0,255,65,1),0_0_30px_rgba(0,255,65,0.8)]" />
              Disponible pour de nouveaux projets — 2026
            </motion.p>
          </div>

          {/* GROS TITRE : NOM & PRENOM */}
          <h1 className="text-[10vw] sm:text-[8.5vw] lg:text-[7vw] font-title font-black uppercase text-white leading-[0.88] tracking-tighter mb-8 md:mb-12 w-full break-words">
            <div className="overflow-hidden py-1 sm:py-2 block">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="block"
              >
                Kevin
              </motion.span>
            </div>
            <div className="overflow-hidden py-1 sm:py-2 block">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                className="block italic font-light font-rumei normal-case text-white/90"
              >
                anguile-diop
              </motion.span>
            </div>
            <div className="overflow-hidden py-1 sm:py-2 block">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="block text-lg sm:text-xl md:text-2xl font-medium tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mt-2 sm:mt-4 normal-case font-sans break-words"
              >
                Aspirant Graphic designer
              </motion.span>
            </div>
          </h1>

          {/* PARAGRAPHE DE DESCRIPTION ET BOUTON */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 md:gap-8 mt-2 sm:mt-4 w-full">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed"
            ><p className="text-lg md:text-xl text-white font-sans leading-relaxed max-w-lg font-medium border-l-4 border-[#00c8ff] pl-4">
              Bonjour, je suis <span className="font-bold">étudiant en troisième année de BUT MMI</span>, actuellement en recherche d'une <span className="text-[#00c8ff]">alternance 1 semaine entreprise - 1 semaine école</span>. Passionné par le design, j'aime concevoir différents visuels, animations et interfaces web fluides, esthétiques et interactives.</p>
            </motion.p>

            {/* BOUTON INTERACTIF */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4 lg:mt-0 shrink-0"
            >
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center justify-center gap-4 px-8 sm:px-10 py-4 sm:py-5 bg-[#00c8ff] text-black font-bold border-[3px] border-black rounded-full overflow-hidden uppercase tracking-widest text-xs sm:text-sm shadow-[4px_4px_0_rgba(0,0,0,0.5)] hover:shadow-none transition-all duration-300 w-full sm:w-auto"
              >
                <span className="absolute inset-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                <span className="relative group-hover:text-white transition-colors duration-300">Voir mes projets</span>
              </button>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
