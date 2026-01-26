import React from 'react';
import DarkVeil from './DarkVeil';

const Hero = () => {
  return (
    <div 
      className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden box-border px-5 py-[60px]"
      fetchpriority="high" /* Indique au navigateur de traiter ce bloc en priorité LCP */
    >
      
      {/* Background Shader - Chargement optimisé */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0.02}
          scanlineIntensity={0.05}
          speed={0.5}
          scanlineFrequency={2.0}
          warpAmount={0.02}
          resolutionScale={1}
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 w-full max-w-[1200px] px-6 text-center">
          
        <p className="text-white text-sm tracking-[0.3em] uppercase mb-8 font-sans opacity-80">
          Portfolio
        </p>

        {/* Titre Principal - Utilisation de vos polices optimisées */}
        <h1 className="text-white font-light leading-none tracking-tighter mb-6 text-[clamp(3rem,12vw,9rem)] uppercase">
          ANGUILE-DIOP
          <br />
          <span className="font-rumei italic text-[#646cff]">
            Kevin
          </span>
        </h1>

        <p className="text-white font-light leading-relaxed mx-auto mb-12 max-w-[700px] text-[clamp(1.25rem,3vw,1.875rem)]">
          Aspirant infographiste de <span className="font-bold">BUT MMI</span>, en recherche de stage.
        </p>

        {/* Actions - Boutons en Noir et Blanc comme demandé */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-7 py-3.5 bg-white text-black no-underline font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition-colors"
          >
            Voir mes projets
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;