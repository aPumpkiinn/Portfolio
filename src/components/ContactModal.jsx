import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FiX, FiMail, FiSend, FiCheckCircle } from 'react-icons/fi';
import { SiLinkedin, SiInstagram } from 'react-icons/si';

const ContactModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const [status, setStatus] = useState({ sending: false, sent: false, error: null });

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

  const handleClose = () => {
    gsap.to(modalRef.current, {
      yPercent: 100,
      duration: 0.4,
      ease: 'power3.in',
      onComplete: () => {
        setStatus({ sending: false, sent: false, error: null });
        onClose();
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, sent: false, error: null });

    const data = new FormData(e.target);
    const FORMSPREE_URL = "https://formspree.io/f/mpqdprba"; 

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus({ sending: false, sent: true, error: null });
        e.target.reset();
        // Ferme le modal après 3 secondes de succès
        setTimeout(handleClose, 3000);
      } else {
        throw new Error();
      }
    } catch (err) {
      setStatus({ sending: false, sent: false, error: "Oups ! Erreur lors de l'envoi." });
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-start sm:justify-center bg-black/95 backdrop-blur-sm text-white overflow-y-auto overscroll-contain"
    >
      {/* BOUTON FERMER */}
      <button 
        onClick={handleClose}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 p-3 sm:p-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 group z-[110] bg-black/50 backdrop-blur-sm"
        aria-label="Fermer"
      >
        <FiX size={24} className="group-hover:rotate-90 transition-transform duration-300"/>
      </button>

      {/* CONTENU */}
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
            <a 
              href="mailto:Kevinanguilediop@gmail.com" 
              className="flex items-center gap-3 sm:gap-4 text-base sm:text-xl hover:text-[#646cff] transition-colors group"
            >
              <div className="p-3 sm:p-4 rounded-full bg-white/5 group-hover:bg-[#646cff] transition-colors flex-shrink-0">
                <FiMail size={24} className="group-hover:text-white" />
              </div>
              <span className="break-all font-light">Kevinanguilediop@gmail.com</span>
            </a>
            
            <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4">
               <a 
                 href="https://www.linkedin.com/in/anguilé-diop-kévin-7b709b31b/" 
                 target="_blank" rel="noopener noreferrer"
                 className="p-3 sm:p-4 rounded-full border border-white/20 hover:bg-[#0077b5] hover:border-[#0077b5] transition-all active:scale-95"
               >
                 <SiLinkedin size={24} />
               </a>
               <a 
                 href="https://www.instagram.com/k.pumpkinn/" 
                 target="_blank" rel="noopener noreferrer"
                 className="p-3 sm:p-4 rounded-full border border-white/20 hover:bg-[#E1306C] hover:border-[#E1306C] transition-all active:scale-95"
               >
                 <SiInstagram size={24} />
               </a>
            </div>
          </div>
        </div>

        {/* COLONNE DROITE : FORMULAIRE */}
        <div className="flex-1 bg-white/5 p-5 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
          {status.sent ? (
            <div className="h-full flex flex-col items-center justify-center py-12 text-center space-y-4">
              <FiCheckCircle size={64} className="text-[#646cff] animate-bounce" />
              <h3 className="text-2xl font-title uppercase">C'est envoyé !</h3>
              <p className="text-gray-400">Merci Kevin, je te répondrai très vite.</p>
            </div>
          ) : (
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 font-bold">Votre Nom</label>
                <input 
                  type="text" name="name" required
                  className="w-full bg-black/50 border border-white/20 rounded-xl p-4 focus:border-[#646cff] focus:ring-1 focus:ring-[#646cff] outline-none transition-all" 
                  placeholder="John Doe" 
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 font-bold">Votre Email</label>
                <input 
                  type="email" name="email" required
                  className="w-full bg-black/50 border border-white/20 rounded-xl p-4 focus:border-[#646cff] focus:ring-1 focus:ring-[#646cff] outline-none transition-all" 
                  placeholder="john@example.com" 
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 font-bold">Message</label>
                <textarea 
                  name="message" required rows="4" 
                  className="w-full bg-black/50 border border-white/20 rounded-xl p-4 focus:border-[#646cff] focus:ring-1 focus:ring-[#646cff] outline-none transition-all resize-none" 
                  placeholder="Parlez-moi de votre projet..."
                ></textarea>
              </div>

              {status.error && <p className="text-red-500 text-xs text-center">{status.error}</p>}

              <button 
                type="submit"
                disabled={status.sending}
                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-[#646cff] hover:text-white transition-all flex items-center justify-center gap-3 uppercase tracking-widest active:scale-95 shadow-lg disabled:opacity-50"
              >
                {status.sending ? "Envoi..." : "Envoyer"} 
                <FiSend size={18} className={status.sending ? "animate-pulse" : ""} />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default ContactModal;