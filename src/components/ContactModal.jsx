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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm text-white overflow-y-auto"
    >
      {/* BOUTON FERMER */}
      <button 
        onClick={handleClose}
        className="absolute top-8 right-8 p-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 group"
      >
        <FiX size={24} className="group-hover:rotate-90 transition-transform duration-300"/>
      </button>

      {/* CONTENU */}
      <div ref={contentRef} className="w-full max-w-4xl px-6 py-12 flex flex-col md:flex-row gap-16">
        
        {/* COLONNE GAUCHE : INFO */}
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-title mb-6">Let's <span className="italic text-[#646cff]">Talk</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Un projet en tête ? Une opportunité de stage ? Ou simplement envie de discuter design et tech ? 
              N'hésitez pas à me contacter.
            </p>
          </div>

          <div className="space-y-6">
            <a href="mailto:ton-email@exemple.com" className="flex items-center gap-4 text-xl hover:text-[#646cff] transition-colors group">
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-[#646cff] transition-colors">
                <FiMail size={24} className="group-hover:text-white" />
              </div>
              <span>ton-email@exemple.com</span>
            </a>
            
            <div className="flex gap-4 pt-4">
               <a href="#" className="p-4 rounded-full border border-white/20 hover:bg-[#0077b5] hover:border-[#0077b5] transition-all">
                 <SiLinkedin size={24} />
               </a>
               <a href="#" className="p-4 rounded-full border border-white/20 hover:bg-[#E1306C] hover:border-[#E1306C] transition-all">
                 <SiInstagram size={24} />
               </a>
            </div>
          </div>
        </div>

        {/* COLONNE DROITE : FORMULAIRE */}
        <div className="flex-1 bg-white/5 p-8 rounded-3xl border border-white/10">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm uppercase tracking-widest text-gray-500 mb-2">Votre Nom</label>
              <input type="text" className="w-full bg-black/50 border border-white/20 rounded-xl p-4 focus:border-[#646cff] outline-none transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm uppercase tracking-widest text-gray-500 mb-2">Votre Email</label>
              <input type="email" className="w-full bg-black/50 border border-white/20 rounded-xl p-4 focus:border-[#646cff] outline-none transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm uppercase tracking-widest text-gray-500 mb-2">Message</label>
              <textarea rows="4" className="w-full bg-black/50 border border-white/20 rounded-xl p-4 focus:border-[#646cff] outline-none transition-colors" placeholder="Parlez-moi de votre projet..."></textarea>
            </div>
            <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-[#646cff] hover:text-white transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
              Envoyer <FiSend />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactModal;