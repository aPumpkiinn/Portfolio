import React, { useState } from 'react';
import Header from '../components/Header';
import FadeIn from '../components/FadeIn'; // On garde vos animations

const ContactPage = () => {
  // Gestion simple des champs du formulaire
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#060010] text-white">
      <Header />
      
      <main className="pt-32 px-6 flex flex-col items-center justify-center min-h-[80vh]">
        
        {/* --- BARRE DE PROGRESSION --- */}
        <FadeIn direction="down" className="w-full max-w-2xl mb-12">
          {/* Fond de la barre (gris sombre) */}
          <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
            {/* Progression (Orange - 33% car c'est l'étape 1) */}
            <div className="h-full bg-[#FF4D00] w-1/3 rounded-full"></div>
          </div>
        </FadeIn>

        {/* --- TITRE ET INTRO --- */}
        <div className="w-full max-w-2xl text-center md:text-left mb-12">
          <FadeIn delay={0.1} direction="up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center md:justify-start gap-4">
              <span className="text-4xl">👉</span> Vos informations
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2} direction="up">
            <p className="text-gray-400 text-lg">
              Pour que je puisse vous répondre rapidement, merci de me laisser quelques informations.
            </p>
          </FadeIn>
        </div>

        {/* --- FORMULAIRE --- */}
        <form className="w-full max-w-2xl space-y-8">
            
            {/* Ligne 1 : Prénom / Nom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <FadeIn delay={0.3} direction="up">
                <div className="flex flex-col group">
                  <label className="text-sm font-bold mb-2 text-white group-focus-within:text-[#FF4D00] transition-colors">
                    Prénom
                  </label>
                  <input 
                    type="text" 
                    name="prenom"
                    placeholder="John"
                    value={formData.prenom}
                    onChange={handleChange}
                    className="bg-transparent border-b border-gray-700 py-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-gray-600"
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <div className="flex flex-col group">
                  <label className="text-sm font-bold mb-2 text-white group-focus-within:text-[#FF4D00] transition-colors">
                    Nom
                  </label>
                  <input 
                    type="text" 
                    name="nom"
                    placeholder="Doe"
                    value={formData.nom}
                    onChange={handleChange}
                    className="bg-transparent border-b border-gray-700 py-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-gray-600"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Ligne 2 : Email */}
            <FadeIn delay={0.4} direction="up">
              <div className="flex flex-col group">
                <label className="text-sm font-bold mb-2 text-white group-focus-within:text-[#FF4D00] transition-colors">
                  Email
                </label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="contact@johndoe.fr"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border-b border-gray-700 py-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-gray-600"
                />
              </div>
            </FadeIn>

            {/* Ligne 3 : Téléphone */}
            <FadeIn delay={0.5} direction="up">
              <div className="flex flex-col group">
                <label className="text-sm font-bold mb-2 text-white group-focus-within:text-[#FF4D00] transition-colors">
                  Téléphone*
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="06 25 39 70 90"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent border-b border-gray-700 py-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-gray-600"
                />
              </div>
            </FadeIn>

            {/* --- BOUTONS DE NAVIGATION --- */}
            <div className="pt-10 flex items-center justify-center md:justify-center gap-6">
              
              {/* Bouton Retour (Rond noir/gris) */}
              <FadeIn delay={0.6} direction="right">
                <button 
                  type="button" 
                  onClick={() => window.history.back()}
                  className="w-14 h-14 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition-all transform hover:scale-105"
                >
                   {/* Flèche gauche SVG */}
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M12 19l-7-7 7-7"/>
                   </svg>
                </button>
              </FadeIn>

              {/* Bouton Suivant (Orange Pill) */}
              <FadeIn delay={0.6} direction="left">
                <button 
                  type="button" // Changez en 'submit' si vous reliez un backend
                  className="px-10 py-4 rounded-full bg-[#FF4D00] hover:bg-[#ff6a2b] text-white font-bold tracking-wide uppercase flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-orange-900/20"
                >
                  Suivant
                  {/* Flèche droite SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                   </svg>
                </button>
              </FadeIn>

            </div>

        </form>

      </main>

      {/* Footer minimaliste pour ne pas distraire */}
      <footer className="w-full text-center py-6 text-gray-600 text-sm">
        &copy; 2026 Wilke.
      </footer>
    </div>
  );
};

export default ContactPage;