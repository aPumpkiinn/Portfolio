import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero'; 
import FlowingMenu from '../components/FlowingMenu'; 
// 1. IMPORT DU NOUVEAU COMPOSANT
import DarkVeil from '../components/DarkVeil'; 
import ContactCTA from '../components/ContactCTA';
import FadeIn from '../components/FadeIn'; 

const HomePage = ({ onOpenContact }) => {
  const navigate = useNavigate();

  // --- DONNÉES DU MENU PROJETS ---
  const items = [
    { 
      text: 'Web Development', 
      image: 'https://picsum.photos/600/400?random=1', 
      link: '/projects',
      filter: 'Web' 
    },
    { 
      text: 'Design UI', 
      image: 'https://picsum.photos/600/400?random=2', 
      link: '/projects',
      filter: 'Design UI' 
    },
    { 
      text: 'Infographie', 
      image: 'https://picsum.photos/600/400?random=3', 
      link: '/projects',
      filter: 'Infographie' 
    },
    { 
      text: 'Tous les projets', 
      image: 'https://picsum.photos/600/400?random=4', 
      link: '/projects',
      filter: 'Tous' 
    }
  ];

  // --- LOGIQUE DE NAVIGATION ---
  const handleMenuClick = (item) => {
    if (item.link) {
      navigate(item.link, { state: { category: item.filter || 'Tous' } });
    }
  };

  return (
    <div style={{ height: '100%' }}>
      {/* Pas de Header ici car il est géré dans App.jsx */}
      
      <main>
        {/* --- SECTION 1 : HERO (ACCUEIL) --- */}
        <section 
          id="home" 
          style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            position: 'relative',
            backgroundColor: 'transparent', 
          }}
        >
          {/* 2. REMPLACEMENT D'IRIDESCENCE PAR DARKVEIL */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
             <DarkVeil
                hueShift={0}
                noiseIntensity={0}
                scanlineIntensity={0}
                speed={0.5}
                scanlineFrequency={0}
                warpAmount={0}
             />
          </div>

          {/* Contenu Hero (Titre Principal) */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <Hero />
          </div>
        </section>

        {/* --- SECTION 2 : TEASER À PROPOS --- */}
        <section className="py-24 px-6 bg-black text-white flex flex-col items-center text-center relative z-10">
          <div className="max-w-3xl">
            
            <FadeIn direction="up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wider">
                  À Propos de moi
                </h2>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
                  Bienvenue dans mon univers numérique. Je suis un créateur passionné par l'intersection 
                  entre le design et la technologie. Mon objectif est de concevoir des expériences 
                  utilisateur fluides et mémorables.
                </p>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
                <button 
                  onClick={() => navigate('/about')}
                  className="px-8 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold"
                >
                  En savoir plus
                </button>
            </FadeIn>

          </div>
        </section>

        {/* --- SECTION 3 : MENU PROJETS --- */}
        <section id="projects" style={{ backgroundColor: '#000000', paddingBottom: '50px' }}>
          
          <FadeIn direction="down">
              <h2 style={{ padding: '40px 0', fontSize: '2.5em', color: 'white', textAlign: 'center' }}>
                Mes Projets Récents
              </h2>
          </FadeIn>
          
          <FadeIn delay={0.2} duration={1.5}>
              <div style={{ height: '600px', position: 'relative', width: '100%' }}>
                 <FlowingMenu 
                    items={items} 
                    bgColor="#000000"
                    textColor="#ffffff"
                    onItemClick={handleMenuClick} 
                 /> 
              </div>
          </FadeIn>

        </section>

        {/* --- SECTION 4 : CONTACT --- */}
        <section id="contact" style={{ 
            backgroundColor: '#000000',
            borderTop: '1px solid #000000' 
            
        }}>
          <ContactCTA onOpen={onOpenContact} />
          
        </section>
        
      </main>

      {/* --- FOOTER --- */}
      <footer style={{ padding: '20px', backgroundColor: '#000000', color: 'white', textAlign: 'center' }}>
        <p>&copy; 2026 Mon Portfolio. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default HomePage;