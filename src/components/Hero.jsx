import React from 'react';
import DarkVeil from './DarkVeil';

const Hero = () => {
  return (
    <div 
      className="relative w-full min-h-screen flex items-center bg-black overflow-hidden box-border px-8 md:px-20 py-[60px]"
      fetchpriority="high"
    >
      
      {/* Background Shader */}
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

      {/* Contenu principal aligné à gauche */}
      <div className="relative z-10 w-full max-w-[1200px] text-left">
          
        <p className="text-white text-sm tracking-[0.3em] uppercase mb-8 font-sans opacity-80">
          Portfolio
        </p>

        {/* Titre Principal */}
        <h1 className="text-white font-light leading-none tracking-tighter mb-6 text-[clamp(3rem,12vw,9rem)] uppercase">
          ANGUILE-DIOP
          <br />
          <span className="font-rumei italic text-[#646cff]">
            Kevin
          </span>
        </h1>

        <p className="text-white font-light leading-relaxed mb-12 max-w-[700px] text-[clamp(1.25rem,3vw,1.875rem)]">
          Aspirant infographiste de <span className="font-bold">BUT MMI</span>, en recherche de stage.
        </p>

        {/* Actions et Présentation alignés à gauche */}
       

          <p className="text-white/50 text-base md:text-xl font-light tracking-wide italic max-w-xl border-l border-[#646cff]/30 pl-6">
            Bonjour ! Je suis Kevin, un créatif passionné par le dessin, le design, et les jeux vidéo 
            toujours en quête de nouvelles idées à exprimés et concretisé .
          </p>
        </div>
      </div>
  );
};

export default Hero;