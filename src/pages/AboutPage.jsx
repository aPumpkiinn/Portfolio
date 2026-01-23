import React from 'react'; // Plus besoin de useEffect ici
// import { useLocation } from 'react-router-dom'; // Plus besoin de useLocation ici
import FadeIn from '../components/FadeIn';     
import ContactCTA from '../components/ContactCTA'; 

const AboutPage = ({ onOpenContact }) => {
  // ❌ J'AI SUPPRIMÉ TOUT LE BLOC useEffect DE SCROLL ICI
  // C'est maintenant géré automatiquement par ScrollToAnchor.js

  const softSkills = [ "Créativité & Innovation", "Esprit d'équipe", "Résolution de problèmes", "Autonomie & Curiosité" ];
  
  const softwareSkills = [
    { name: "Figma", icon: "🎨" }, { name: "React", icon: "⚛️" }, 
    { name: "Tailwind", icon: "🌊" }, { name: "Node.js", icon: "🟢" }, 
    { name: "Git", icon: "🐙" }, { name: "VS Code", icon: "💻" }
  ];

  return (
    <div className="min-h-screen bg-[#060010] text-white pt-24 flex flex-col justify-between overflow-x-hidden">
      
      <div className="max-w-6xl mx-auto w-full px-6 flex-grow">
        {/* ... Tout ton contenu Bio, Skills, etc ... */}
        {/* (Je ne remets pas tout le code du milieu pour gagner de la place, garde le tien) */}
        
        <div className="flex flex-col md:flex-row items-center gap-12 mb-32 mt-10">
            {/* ... Contenu Bio ... */}
        </div>
      </div>

      {/* --- CIBLE DU SCROLL --- */}
      {/* L'ID est essentiel pour que ScrollToAnchor trouve la section */}
      <div id="contact-section" className="border-t border-gray-800">
        <ContactCTA onOpen={onOpenContact} />
      </div>

      <footer className="w-full bg-black text-gray-500 py-6 text-center text-sm border-t border-gray-900">
        <p>&copy; 2026 Kevin Anguile-Diop. Tous droits réservés.</p>
      </footer>

    </div>
  );
};

export default AboutPage;