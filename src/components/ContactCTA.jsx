import React from 'react';
import FadeIn from './FadeIn';

const ContactCTA = ({ onOpen }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-32 px-6 text-center">
      
      <FadeIn direction="up">
        <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 uppercase tracking-tighter">
          Un projet ?
        </h2>
      </FadeIn>

      <FadeIn delay={0.2} direction="up">
        <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mb-12">
          Transformons vos idées en réalité numérique. <br />
          Je suis disponible pour de nouvelles collaborations.
        </p>
      </FadeIn>

      <FadeIn delay={0.4} direction="up">
        {/* LE GROS BOUTON DÉCLENCHEUR */}
        <button 
          onClick={onOpen}
          className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-bold text-white transition-all duration-300 bg-[#FF4D00] rounded-full hover:bg-white hover:text-[#FF4D00] hover:scale-105 shadow-[0_0_40px_rgba(255,77,0,0.3)]"
        >
          <span className="text-xl md:text-2xl uppercase tracking-widest mr-4">
            Contactez-moi
          </span>
          
          {/* Flèche animée */}
          <svg 
            className="w-8 h-8 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </FadeIn>

    </div>
  );
};

export default ContactCTA;