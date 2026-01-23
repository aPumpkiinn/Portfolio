import React, { useState, useEffect, useRef } from 'react'; // 1. AJOUT DES HOOKS
import { useNavigate } from 'react-router-dom';

import Hero from '../components/Hero'; 
import FlowingMenu from '../components/FlowingMenu'; 
import DarkVeil from '../components/DarkVeil'; 
import ContactCTA from '../components/ContactCTA';
import FadeIn from '../components/FadeIn'; 
import PillNav from '../components/PillNav'; 
import reactLogo from '../assets/react.svg'; 

const HomePage = ({ onOpenContact }) => {
  const navigate = useNavigate();

  // --- 2. LOGIQUE DE SCROLL (NOUVEAU) ---
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Toujours afficher si on est tout en haut
      if (currentScrollY < 50) {
        setIsHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Si on descend (> +10px), on cache. Si on monte (< -10px), on affiche.
      if (currentScrollY > lastScrollY.current + 10) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current - 10) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // ----------------------------------------

  const navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'À Propos', href: '/about' },
    { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const items = [
    { text: 'Web Development', image: 'https://picsum.photos/600/400?random=1', link: '/projects', filter: 'Web' },
    { text: 'Design UI', image: 'https://picsum.photos/600/400?random=2', link: '/projects', filter: 'Design UI' },
    { text: 'Infographie', image: 'https://picsum.photos/600/400?random=3', link: '/projects', filter: 'Infographie' },
    { text: 'Tous les projets', image: 'https://picsum.photos/600/400?random=4', link: '/projects', filter: 'Tous' }
  ];

  const handleMenuClick = (item) => {
    if (item.link) navigate(item.link, { state: { category: item.filter || 'Tous' } });
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative', backgroundColor: '#000000' }}>
      
      {/* --- 3. APPLICATION DE L'ANIMATION SUR LE CONTENEUR --- */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100, 
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '20px',
          pointerEvents: 'none',
          // C'est ici que la magie opère :
          transition: 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)', 
          transform: isHidden ? 'translateY(-150%)' : 'translateY(0)',
        }}
      >
        <div style={{ pointerEvents: 'auto' }}>
          <PillNav
            logo={reactLogo}
            logoAlt="Logo"
            items={navItems}
            activeHref="#home" 
            baseColor="#000"
            pillColor="#FFF"
            pillTextColor="#000"
            hoveredPillTextColor="#FFF"
          />
        </div>
      </div>

      <main>
        {/* LE RESTE DE TON CODE EST IDENTIQUE */}
        
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
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
             <DarkVeil hueShift={0} noiseIntensity={0} scanlineIntensity={0} speed={0.5} />
          </div>
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <Hero />
          </div>
        </section>

        <section className="py-24 px-6 bg-black text-white flex flex-col items-center text-center relative z-10">
          <div className="max-w-3xl">
            <FadeIn direction="up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wider">À Propos de moi</h2>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
                  Bienvenue dans mon univers numérique. Je suis un créateur passionné par l'intersection 
                  entre le design et la technologie.
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

        <section id="projects" style={{ backgroundColor: '#000000', paddingBottom: '50px' }}>
          <FadeIn direction="down">
              <h2 style={{ padding: '40px 0', fontSize: '2.5em', color: 'white', textAlign: 'center' }}>Mes Projets Récents</h2>
          </FadeIn>
          <FadeIn delay={0.2} duration={1.5}>
              <div style={{ height: '600px', position: 'relative', width: '100%' }}>
                 <FlowingMenu items={items} bgColor="#000000" textColor="#ffffff" onItemClick={handleMenuClick} /> 
              </div>
          </FadeIn>
        </section>

        <section id="contact" style={{ backgroundColor: '#000000', borderTop: '1px solid #000000' }}>
          <ContactCTA onOpen={onOpenContact} />
        </section>
        
      </main>

      <footer style={{ padding: '20px', backgroundColor: '#000000', color: 'white', textAlign: 'center' }}>
        <p>&copy; 2026 Mon Portfolio. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default HomePage;