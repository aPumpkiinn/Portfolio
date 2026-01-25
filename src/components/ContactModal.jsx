import React, { useState } from 'react';
import FadeIn from './FadeIn';

const ContactModal = ({ onClose }) => {
  const [formData, setFormData] = useState({ 
    prenom: '', nom: '', email: '', message: '' 
  });
  
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi
    console.log('Formulaire envoyé :', formData);
    alert("Message envoyé ! (Simulation)");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-6">
      
      {/* --- STYLE CSS POUR L'ANIMATION (Directement intégré ici) --- */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-overlay {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-modal {
          animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; /* Effet rebond très doux */
          animation-delay: 0.1s; /* Le modal arrive juste après le fond */
          opacity: 0; /* Important : invisible au départ avant que l'animation ne se lance */
        }
      `}</style>

      {/* 1. FOND SOMBRE (Overlay) */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-overlay"
        onClick={onClose}
      ></div>

      {/* 2. FENÊTRE (Modal) */}
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-y-auto max-h-[90vh] animate-modal">
        
        {/* BOUTON FERMER */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all z-50"
        >
          ✕
        </button>

        {/* EN-TÊTE */}
        <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white flex items-center justify-center md:justify-start gap-3">
              <span>👋</span> Parlons projet
            </h1>
            <p className="text-gray-400 text-lg">
              Racontez-moi tout ! J'ai hâte de découvrir votre idée.
            </p>
        </div>

        {/* FORMULAIRE */}
        <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Prénom */}
                <div className="flex flex-col group">
                  <label className="text-xs font-bold mb-2 text-gray-500 uppercase tracking-widest group-focus-within:text-white transition-colors">Prénom</label>
                  <input 
                    type="text" name="prenom" placeholder="Votre prénom" 
                    value={formData.prenom} onChange={handleChange} 
                    className="bg-transparent border-b border-gray-800 py-3 text-lg text-white placeholder-gray-700 focus:outline-none focus:border-white transition-colors" 
                    required 
                  />
                </div>
                {/* Nom */}
                <div className="flex flex-col group">
                  <label className="text-xs font-bold mb-2 text-gray-500 uppercase tracking-widest group-focus-within:text-white transition-colors">Nom</label>
                  <input 
                    type="text" name="nom" placeholder="Votre nom" 
                    value={formData.nom} onChange={handleChange} 
                    className="bg-transparent border-b border-gray-800 py-3 text-lg text-white placeholder-gray-700 focus:outline-none focus:border-white transition-colors" 
                    required 
                  />
                </div>
            </div>

            {/* Email */}
            <div className="flex flex-col group">
                <label className="text-xs font-bold mb-2 text-gray-500 uppercase tracking-widest group-focus-within:text-white transition-colors">Email</label>
                <input 
                  type="email" name="email" placeholder="exemple@email.com" 
                  value={formData.email} onChange={handleChange} 
                  className="bg-transparent border-b border-gray-800 py-3 text-lg text-white placeholder-gray-700 focus:outline-none focus:border-white transition-colors" 
                  required 
                />
            </div>

            {/* Message */}
            <div className="flex flex-col group">
                <label className="text-xs font-bold mb-2 text-gray-500 uppercase tracking-widest group-focus-within:text-white transition-colors">Message</label>
                <textarea 
                  name="message" rows="4" placeholder="Dites-m'en plus sur vos besoins..." 
                  value={formData.message} onChange={handleChange} 
                  className="bg-transparent border-b border-gray-800 py-3 text-lg text-white placeholder-gray-700 focus:outline-none focus:border-white resize-none transition-colors" 
                  required 
                />
            </div>

            {/* BOUTON ENVOYER */}
            <div className="pt-6 flex justify-end">
                <button 
                  type="submit" 
                  className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm tracking-wide uppercase hover:bg-gray-200 hover:scale-105 transition-all flex items-center gap-2"
                >
                  Envoyer le message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </div>

        </form>
      </div>
    </div>
  );
};

export default ContactModal;