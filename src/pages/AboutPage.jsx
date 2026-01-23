import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Assurez-vous que ces composants existent bien dans votre dossier
import FadeIn from '../components/FadeIn';     
import ContactCTA from '../components/ContactCTA'; 

const AboutPage = ({ onOpenContact }) => {
  const location = useLocation();

  // --- 1. LOGIQUE DE SCROLL AUTOMATIQUE ---
  // Si on vient du lien "Contact", la page descend toute seule
  useEffect(() => {
    if (location.hash === '#contact-section') {
      setTimeout(() => {
        const element = document.getElementById('contact-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }, [location]);

  // --- 2. DONNÉES ---
  const softSkills = [
    "Créativité & Innovation", 
    "Esprit d'équipe", 
    "Résolution de problèmes", 
    "Autonomie & Curiosité"
  ];
  
  const softwareSkills = [
    { name: "Figma", icon: "🎨" }, 
    { name: "React", icon: "⚛️" }, 
    { name: "Tailwind", icon: "🌊" }, 
    { name: "Node.js", icon: "🟢" }, 
    { name: "Git", icon: "🐙" }, 
    { name: "VS Code", icon: "💻" }
  ];

  return (
    <div className="min-h-screen bg-[#060010] text-white pt-24 flex flex-col justify-between overflow-x-hidden">
      
      <div className="max-w-6xl mx-auto w-full px-6 flex-grow">

        {/* --- SECTION BIO --- */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-32 mt-10">
          <div className="md:w-1/2">
            <FadeIn direction="right">
                <h2 className="text-5xl md:text-7xl font-serif mb-8">Qui suis-je?</h2>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                Bienvenue dans mon portfolio. Je suis un développeur passionné par l'intersection entre le design et la technologie.
                <br /><br />
                Mon objectif est de créer des expériences numériques fluides, esthétiques et performantes.
                </p>
            </FadeIn>
          </div>

          <div className="md:w-1/2 w-full">
             <FadeIn direction="left" delay={0.3} fullWidth>
                <div className="h-[400px] md:h-[500px] bg-gray-900 border border-gray-800 flex items-center justify-center relative overflow-hidden group w-full rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent"></div>
                    <span className="text-gray-600 italic group-hover:text-white transition-colors duration-500">
                        [ Photo ]
                    </span>
                </div>
             </FadeIn>
          </div>
        </div>

        {/* --- COMPÉTENCES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          {/* Liste Soft Skills */}
          <div>
            <FadeIn>
                <h2 className="text-3xl font-bold mb-8 italic text-purple-300">Mes Qualités</h2>
            </FadeIn>
            <ul className="space-y-4">
              {softSkills.map((skill, index) => (
                <FadeIn key={index} delay={index * 0.1} direction="right">
                    <li className="text-xl font-light text-gray-300 border-l-2 border-purple-900 pl-4 hover:border-purple-400 transition-all duration-300 cursor-default">
                    {skill}
                    </li>
                </FadeIn>
              ))}
            </ul>
          </div>

          {/* Grille Outils */}
          <div>
            <FadeIn>
                <h2 className="text-3xl font-bold mb-8 italic text-right md:text-left text-purple-300">Mes Outils</h2>
            </FadeIn>
            <div className="grid grid-cols-3 gap-4">
              {softwareSkills.map((soft, index) => (
                <FadeIn key={index} delay={index * 0.1} direction="up">
                    <div className="aspect-square border border-gray-800 bg-white/5 hover:bg-purple-900/20 rounded-lg flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-default">
                        <div className="text-3xl mb-2">{soft.icon}</div>
                        <div className="text-sm font-medium text-gray-400">{soft.name}</div>
                    </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* --- LIENS & CV --- */}
        <div className="flex flex-col items-center mb-20 border-t border-gray-900 pt-20">
          <FadeIn direction="down">
             <h3 className="text-2xl font-bold italic mb-10 text-gray-500">Retrouvez-moi sur</h3>
          </FadeIn>
          
          <div className="flex gap-6 mb-12 flex-wrap justify-center">
             <a href="#" className="px-6 py-3 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all">LinkedIn</a>
             <a href="#" className="px-6 py-3 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all">GitHub</a>
          </div>

          <FadeIn delay={0.2}>
            <a href="#" className="text-xl font-bold uppercase tracking-widest border-b-2 border-white pb-1 hover:text-purple-400 hover:border-purple-400 transition-colors">
                Télécharger mon CV
            </a>
          </FadeIn>
        </div>

      </div>

      {/* --- 3. SECTION CONTACT (BAS DE PAGE) --- */}
      {/* C'est ici que le scroll s'arrête. On affiche le bouton ContactCTA */}
      <div id="contact-section" className="border-t border-gray-800">
        <ContactCTA onOpen={onOpenContact} />
      </div>

      {/* --- FOOTER --- */}
      <footer className="w-full bg-black text-gray-500 py-6 text-center text-sm border-t border-gray-900">
        <p>&copy; 2026 Kevin Anguile-Diop. Tous droits réservés.</p>
      </footer>

    </div>
  );
};

export default AboutPage;