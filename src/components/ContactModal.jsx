import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap'; // 1. On importe GSAP
import FadeIn from './FadeIn';

const ContactModal = ({ onClose }) => {
  const [formData, setFormData] = useState({ prenom: '', nom: '', email: '', phone: '' });
  
  // 2. Refs pour les éléments à animer
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // 3. ANIMATION D'ENTRÉE (Se lance au montage)
  useEffect(() => {
    const tl = gsap.timeline();
    // Le fond noir apparaît en fondu
    tl.fromTo(modalRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    // Le contenu arrive du bas avec un petit effet de rebond
    tl.fromTo(contentRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.2)" }, 
      "-=0.2" // Commence un peu avant la fin du fade du fond
    );
  }, []);

  // 4. ANIMATION DE SORTIE (Se lance au clic sur fermer)
  const handleCloseAnimation = () => {
    const tl = gsap.timeline({
      // ✅ CRUCIAL : Une fois l'animation finie, on appelle le vrai onClose de React
      onComplete: onClose 
    });

    // Le contenu descend et disparaît
    tl.to(contentRef.current, { 
      y: 100, 
      opacity: 0, 
      duration: 0.3, 
      ease: "power2.in" 
    });
    // Le fond noir disparaît en fondu
    tl.to(modalRef.current, { 
      opacity: 0, 
      duration: 0.3, 
      ease: "power2.in" 
    }, "-=0.1");
  };

  return (
    // FOND NOIR OPAQUE (Overlay) - On attache la ref ici
    <div 
      ref={modalRef} 
      className="fixed inset-0 z-[9999] bg-[#060010] flex flex-col items-center justify-center p-6 overflow-y-auto"
      // On met opacity 0 au départ pour éviter le flash avant que GSAP ne prenne le relais
      style={{ opacity: 0 }} 
    >
      
      {/* BOUTON FERMER (CROIX) - Utilise maintenant handleCloseAnimation */}
      <button 
        onClick={handleCloseAnimation}
        className="absolute top-8 right-8 text-white hover:text-[#FF4D00] transition-colors z-50"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* --- CONTENU DU FORMULAIRE --- On attache la ref ici */}
      <div ref={contentRef} className="w-full max-w-2xl mt-10">
        
        {/* ... TOUT LE RESTE DU CODE NE CHANGE PAS ... */}

        {/* Barre de progression */}
        <FadeIn direction="down" className="w-full mb-12">
          <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-[#FF4D00] w-1/3 rounded-full"></div>
          </div>
        </FadeIn>

        {/* Titre */}
        <div className="mb-12">
          <FadeIn delay={0.1} direction="up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white flex items-center gap-4">
              <span>👉</span> Vos informations
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <p className="text-gray-400 text-lg">
              Pour que je puisse vous répondre rapidement, merci de me laisser quelques informations.
            </p>
          </FadeIn>
        </div>

        {/* Formulaire */}
        <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <FadeIn delay={0.3} direction="up">
                <div className="flex flex-col group">
                  <label className="text-sm font-bold mb-2 text-white group-focus-within:text-[#FF4D00]">Prénom</label>
                  <input type="text" name="prenom" placeholder="John" value={formData.prenom} onChange={handleChange} className="bg-transparent border-b border-gray-700 py-3 text-lg text-white focus:outline-none focus:border-white placeholder-gray-600"/>
                </div>
              </FadeIn>
              <FadeIn delay={0.3} direction="up">
                <div className="flex flex-col group">
                  <label className="text-sm font-bold mb-2 text-white group-focus-within:text-[#FF4D00]">Nom</label>
                  <input type="text" name="nom" placeholder="Doe" value={formData.nom} onChange={handleChange} className="bg-transparent border-b border-gray-700 py-3 text-lg text-white focus:outline-none focus:border-white placeholder-gray-600"/>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.4} direction="up">
              <div className="flex flex-col group">
                <label className="text-sm font-bold mb-2 text-white group-focus-within:text-[#FF4D00]">Email</label>
                <input type="email" name="email" placeholder="contact@johndoe.fr" value={formData.email} onChange={handleChange} className="bg-transparent border-b border-gray-700 py-3 text-lg text-white focus:outline-none focus:border-white placeholder-gray-600"/>
              </div>
            </FadeIn>

            <FadeIn delay={0.5} direction="up">
              <div className="flex flex-col group">
                <label className="text-sm font-bold mb-2 text-white group-focus-within:text-[#FF4D00]">Téléphone*</label>
                <input type="tel" name="phone" placeholder="06 25 39 70 90" value={formData.phone} onChange={handleChange} className="bg-transparent border-b border-gray-700 py-3 text-lg text-white focus:outline-none focus:border-white placeholder-gray-600"/>
              </div>
            </FadeIn>

            {/* Boutons Actions */}
            <div className="pt-10 flex items-center justify-end gap-6">
              <FadeIn delay={0.6} direction="left">
                <button type="button" className="px-10 py-4 rounded-full bg-[#FF4D00] hover:bg-[#ff6a2b] text-white font-bold tracking-wide uppercase flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-orange-900/20">
                  Suivant
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </FadeIn>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;