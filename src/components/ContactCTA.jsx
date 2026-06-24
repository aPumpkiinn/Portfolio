import React from 'react';

const ContactCTA = ({ onOpen, theme = 'dark' }) => {
  const isLight = theme === 'light';

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4 py-20">
      
      <h2 className={`text-5xl md:text-8xl lg:text-9xl font-octuple uppercase mb-8 tracking-tighter ${isLight ? 'text-black' : 'text-white'}`}>
        Un projet en tete 
      </h2>
      
      <p className={`text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-bold ${isLight ? 'text-black/80 font-sans' : 'text-gray-400'}`}>
        Discutons de vos idées et voyons comment nous pouvons créer quelque chose d'unique ensemble.
      </p>
      
      <button 
        onClick={onOpen} 
        className={`px-10 py-5 font-bold rounded-full text-lg hover:scale-110 transition-transform duration-300 ${
          isLight 
            ? 'bg-[#00c8ff] text-black border-[3px] border-black shadow-[6px_6px_0_rgba(0,0,0,1)] uppercase tracking-widest text-sm' 
            : 'bg-[#00c8ff] text-black uppercase tracking-widest text-sm'
        }`}
      >
        Démarrer une discussion
      </button>
      
    </div>
  );
};

export default ContactCTA;