import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FiX, FiMail, FiSend } from 'react-icons/fi';
import { SiLinkedin, SiInstagram } from 'react-icons/si';

const ContactModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  // Animation d'entrée / Sortie
  useEffect(() => {
    if (isOpen) {
      // Entrée
      gsap.set(modalRef.current, { yPercent: 100, autoAlpha: 0 });
      gsap.to(modalRef.current, {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.6,
        ease: 'power3.out',
      });
      
      // Animation des éléments internes
      gsap.fromTo(contentRef.current.children, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3 }
      );
    }
  }, [isOpen]);

  // Fonction pour animer la sortie avant de fermer réellement
  const handleClose = () => {
    gsap.to(modalRef.current, {
      yPercent: 100,
      duration: 0.4,
      ease: 'power3.in',
      onComplete: onClose // On appelle la fonction de fermeture à la fin de l'anim
    });
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-start sm:justify-center bg-black/95 backdrop-blur-sm text-white overflow-y-auto overscroll-contain"
    >
      {/* BOUTON FERMER - Responsive */}
      <button 
        onClick={handleClose}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 p-3 sm:p-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 group z-10 bg-black/50 backdrop-blur-sm"
        aria-label="Fermer"
      >
        <FiX size={20} className="sm:hidden group-hover:rotate-90 transition-transform duration-300"/>
        <FiX size={24} className="hidden sm:block group-hover:rotate-90 transition-transform duration-300"/>
      </button>

      {/* CONTENU - Responsive */}
      <div 
        ref={contentRef} 
        className="w-full max-w-4xl px-4 sm:px-6 py-16 sm:py-12 md:py-12 flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16"
      >
        
        {/* COLONNE GAUCHE : INFO */}
        <div className="flex-1 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-title mb-4 sm:mb-6 leading-tight">
              Let's <span className="italic text-[#646cff]">Talk</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Un projet en tête ? Une opportunité de stage ? Ou simplement envie de discuter design et tech ? 
              N'hésitez pas à me contacter.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Email link - Responsive */}
            <a 
              href="mailto:ton-email@exemple.com" 
              className="flex items-center gap-3 sm:gap-4 text-base sm:text-xl hover:text-[#646cff] transition-colors group"
            >
              <div className="p-3 sm:p-4 rounded-full bg-white/5 group-hover:bg-[#646cff] transition-colors flex-shrink-0">
                <FiMail size={20} className="sm:hidden group-hover:text-white" />
                <FiMail size={24} className="hidden sm:block group-hover:text-white" />
              </div>
              <span className="break-all">Kevinanguilediop@gmail.com</span>
            </a>
            
            {/* Social links - Responsive */}
            <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4">
               <a 
                 href="#" 
                 className="p-3 sm:p-4 rounded-full border border-white/20 hover:bg-[#0077b5] hover:border-[#0077b5] transition-all active:scale-95"
                 aria-label="LinkedIn"
               >
                 <SiLinkedin size={20} className="sm:hidden" />
                 <SiLinkedin size={24} className="hidden sm:block" />
               </a>
               <a 
                 href="#" 
                 className="p-3 sm:p-4 rounded-full border border-white/20 hover:bg-[#E1306C] hover:border-[#E1306C] transition-all active:scale-95"
                 aria-label="Instagram"
               >
                 <SiInstagram size={20} className="sm:hidden" />
                 <SiInstagram size={24} className="hidden sm:block" />
               </a>
            </div>
          </div>
        </div>

        {/* COLONNE DROITE : FORMULAIRE - Responsive */}
        <div className="flex-1 bg-white/5 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10">
          <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-2">
                Votre Nom
              </label>
              <input 
                type="text" 
                className="w-full bg-black/50 border border-white/20 rounded-lg sm:rounded-xl p-3 sm:p-4 focus:border-[#646cff] focus:ring-1 focus:ring-[#646cff] outline-none transition-all text-sm sm:text-base" 
                placeholder="John Doe" 
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-2">
                Votre Email
              </label>
              <input 
                type="email" 
                className="w-full bg-black/50 border border-white/20 rounded-lg sm:rounded-xl p-3 sm:p-4 focus:border-[#646cff] focus:ring-1 focus:ring-[#646cff] outline-none transition-all text-sm sm:text-base" 
                placeholder="john@example.com" 
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-2">
                Message
              </label>
              <textarea 
                rows="4" 
                className="w-full bg-black/50 border border-white/20 rounded-lg sm:rounded-xl p-3 sm:p-4 focus:border-[#646cff] focus:ring-1 focus:ring-[#646cff] outline-none transition-all resize-none text-sm sm:text-base" 
                placeholder="Parlez-moi de votre projet..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-3 sm:py-4 bg-white text-black font-bold rounded-lg sm:rounded-xl hover:bg-[#646cff] hover:text-white transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm sm:text-base active:scale-95 shadow-lg hover:shadow-xl"
            >
              Envoyer <FiSend size={16} className="sm:hidden" />
              <FiSend className="hidden sm:block" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactModal;