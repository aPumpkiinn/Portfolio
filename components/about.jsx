import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FadeIn from './FadeIn';
import ContactCTA from './ContactCTA';

const About = ({ onOpenContact }) => {
  const location = useLocation();

  // --- LOGIQUE DE SCROLL AUTOMATIQUE ---
  useEffect(() => {
    if (location.hash === '#contact-section') {
      // On attend 500ms que les animations FadeIn se terminent et que la page ait sa taille finale
      setTimeout(() => {
        const element = document.getElementById('contact-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }, [location]);

  const softSkills = ["Créativité & Innovation", "Esprit d'équipe", "Résolution de problèmes", "Autonomie & Curiosité"];
  const softwareSkills = [
    { name: "Figma", icon: "🎨" }, { name: "React", icon: "⚛️" }, 
    { name: "Tailwind", icon: "🌊" }, { name: "Node.js", icon: "🟢" }, 
    { name: "Git", icon: "🐙" }, { name: "VS Code", icon: "💻" }
  ];

  return (
    <div className="min-h-screen bg-[#060010] text-white pt-24 flex flex-col justify-between overflow-x-hidden">
      
      <div className="max-w-6xl mx-auto w-full px-6 flex-grow">

        {/* --- 1. QUI SUIS-JE ? --- */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-32 mt-10">
          
          <div className="md:w-1/2">
            <FadeIn direction="right">
                <h2 className="text-6xl md:text-7xl font-serif mb-8">Qui suis-je?</h2>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mi in vel duis. 
                Nisl proin in integer orci a fermentum rutrum nulla odio. Mauris sollicitudin 
                ornare vulputate vel. Commodo ac risus cursus ut eget proin pellentesque viverra.
                <br /><br />
                Je suis passionné par la création d'expériences numériques immersives et 
                l'exploration de nouvelles technologies.
                </p>
            </FadeIn>
          </div>

          <div className="md:w-1/2 w-full">
             <FadeIn direction="left" delay={0.3} fullWidth>
                <div className="h-[400px] md:h-[500px] bg-gray-900 border border-gray-800 flex items-center justify-center relative overflow-hidden group w-full">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent"></div>
                    <span className="text-gray-600 italic group-hover:text-white transition-colors duration-500">
                        Photo Portrait
                    </span>
                </div>
             </FadeIn>
          </div>

        </div>

        {/* --- 2. QUALITÉS & LOGICIELS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          
          <div>
            <FadeIn>
                <h2 className="text-3xl font-bold mb-8 italic">Mes Qualités</h2>
            </FadeIn>
            <ul className="space-y-4">
              {softSkills.map((skill, index) => (
                <FadeIn key={index} delay={index * 0.1} direction="right">
                    <li className="text-xl md:text-2xl font-light italic text-gray-300 border-l-2 border-transparent hover:border-white pl-4 transition-all duration-300 cursor-default">
                    {skill}
                    </li>
                </FadeIn>
              ))}
            </ul>
          </div>

          <div>
            <FadeIn>
                <h2 className="text-3xl font-bold mb-8 italic text-right md:text-left">Mes Logiciels</h2>
            </FadeIn>
            <div className="grid grid-cols-3 gap-4">
              {softwareSkills.map((soft, index) => (
                <FadeIn key={index} delay={index * 0.1} direction="up">
                    <div className="aspect-square border border-gray-700 hover:border-white bg-white/5 hover:bg-white/10 rounded-lg flex flex-col items-center justify-center transition-all duration-300 group cursor-default">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                        {soft.icon}
                    </div>
                    <div className="w-10 h-1 bg-gray-600 rounded-full mt-2 group-hover:bg-white transition-colors"></div>
                    </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* --- 3. RÉSEAUX & CV --- */}
        <div className="flex flex-col items-center mb-20 border-t border-gray-800 pt-20">
          <FadeIn direction="down">
             <h3 className="text-3xl font-bold italic mb-10">Mes réseaux</h3>
          </FadeIn>
          
          <div className="flex gap-8 mb-16">
            {[1, 2, 3].map((item, index) => (
              <FadeIn key={item} delay={index * 0.2} direction="up">
                  <a href="#" className="w-20 h-20 border border-gray-600 rounded-lg hover:bg-white hover:text-black transition-all flex items-center justify-center">
                    <span className="text-sm">Link</span>
                  </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <a 
                href="/cv.pdf" 
                target="_blank" 
                className="text-2xl font-bold uppercase tracking-widest border-b-2 border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors"
            >
                Mon CV
            </a>
          </FadeIn>
        </div>

      </div>

      {/* --- 4. SECTION CONTACT (CIBLE DU SCROLL) --- */}
      <div id="contact-section" className="border-t border-gray-900 bg-[#060010]">
        <ContactCTA onOpen={onOpenContact} />
      </div>

      {/* --- FOOTER --- */}
      <footer className="w-full bg-gray-300 text-black py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm font-medium">
        <button onClick={onOpenContact} className="hover:underline font-bold">
            Contact
        </button>
        <span className="my-2 md:my-0">Ce site ne contient pas de cookies</span>
        <span>&copy; Tous droits réservés</span>
      </footer>

    </div>
  );
};

export default About;