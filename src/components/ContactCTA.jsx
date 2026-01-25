import React from 'react';

const ContactCTA = ({ onOpen }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center px-4 py-20">
      
      <h2 className="text-4xl md:text-7xl font-title uppercase mb-8 tracking-wide text-white">
        Un projet en tête ?
      </h2>
      
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
        Discutons de vos idées et voyons comment nous pouvons créer quelque chose d'unique ensemble.
      </p>
      
      <button 
        onClick={onOpen} 
        className="px-10 py-5 bg-white text-black font-bold rounded-full text-lg hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
      >
        Démarrer une discussion
      </button>
      
    </div>
  );
};

export default ContactCTA;