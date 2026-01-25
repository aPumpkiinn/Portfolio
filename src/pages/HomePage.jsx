import React, { useCallback } from 'react'; 
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Hero from '../components/Hero'; 
import FlowingMenu from '../components/FlowingMenu'; 
import DarkVeil from '../components/DarkVeil'; 
import ContactCTA from '../components/ContactCTA';
import FadeIn from '../components/FadeIn'; 
import PageTransition from '../components/PageTransition'; 

// --- OPTIMISATION 1 : Extraction des données statiques ---
// On sort ces tableaux du composant pour éviter qu'ils ne soient recréés à chaque rendu.
const NAV_ITEMS = [
  { label: 'Accueil', href: '#home' },
  { label: 'À Propos', href: '/Apropos' },
  { label: 'Projets', href: '/projects' },
  { label: 'Contact', href: '/Apropos#contact' } 
];

const PROJECT_CATEGORIES = [
  { text: 'Tous les projets', image: 'https://picsum.photos/600/400?random=4', link: '/projects', filter: 'Tous' },
  { text: 'Web Development', image: 'https://picsum.photos/600/400?random=1', link: '/projects', filter: 'Web' },
  { text: 'Design UI', image: 'https://picsum.photos/600/400?random=2', link: '/projects', filter: 'Design UI' },
  { text: 'Infographie', image: 'https://picsum.photos/600/400?random=3', link: '/projects', filter: 'Infographie' }
];

const HomePage = () => {
  const navigate = useNavigate();

  // --- OPTIMISATION 2 : Memoization du clic ---
  const handleMenuClick = useCallback((item) => {
    if (item.link) {
      navigate(item.link, { state: { category: item.filter || 'Tous' } });
    }
  }, [navigate]);

  return (
    <PageTransition>
      {/* --- SEO NATIF REACT 19 --- */}
      <title>Accueil | Ton Nom - Designer UI & Développeur Web</title>
      <meta name="description" content="Portfolio créatif spécialisé en expériences numériques uniques. Découvrez mes projets en Design UI, Web et Infographie." />

      <div className="min-h-screen relative bg-black">
        
        <Header items={NAV_ITEMS} />

        <main>
          {/* SECTION HERO */}
          <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative bg-transparent overflow-hidden"
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <DarkVeil hueShift={0} noiseIntensity={0} scanlineIntensity={0} speed={0.5} />
            </div>
            <div className="relative z-10 w-full flex items-center justify-center">
              <Hero />
            </div>
          </section>

          {/* SECTION A PROPOS (TEASER) */}
          <section className="py-24 px-6 bg-black text-white flex flex-col items-center text-center relative z-10">
            <div className="max-w-3xl">
              <FadeIn direction="up">
                <h2 className="text-3xl md:text-5xl font-title mb-8 uppercase tracking-wider">
                  À Propos de moi
                </h2>
              </FadeIn>
              <FadeIn delay={0.2} direction="up">
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
                  Bienvenue dans mon univers numérique. Je suis un créateur passionné par l'intersection 
                  entre le design et la technologie, basé en Bretagne.
                </p>
              </FadeIn>
              <FadeIn delay={0.4} direction="up">
                <button 
                  onClick={() => navigate('/Apropos')}
                  className="px-8 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold"
                  aria-label="En savoir plus sur mon parcours"
                >
                  En savoir plus
                </button>
              </FadeIn>
            </div>
          </section>

          {/* SECTION PROJETS (TEASER) */}
          <section id="projects" className="bg-black pb-12">
            <FadeIn direction="down">
              <h2 className="text-4xl md:text-6xl font-title text-white text-center py-10">
                Mes Projets Récents
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} duration={1.5}>
              <div className="relative h-[600px] w-full">
                <FlowingMenu 
                  items={PROJECT_CATEGORIES} 
                  bgColor="#000000" 
                  textColor="#ffffff" 
                  onItemClick={handleMenuClick} 
                /> 
              </div>
            </FadeIn>
          </section>

          {/* SECTION CONTACT */}
          <section id="contact" className="bg-black border-t border-white/5">
            <FadeIn direction="up" delay={0.1}>
              <ContactCTA onOpen={() => navigate('/Apropos#contact')} />
            </FadeIn>
          </section>
        </main>

        <footer className="py-8 bg-black border-t border-white/5 text-white text-center">
          <p className="text-gray-500 text-sm tracking-widest">
            &copy; {new Date().getFullYear()} — MON PORTFOLIO. TOUS DROITS RÉSERVÉS.
          </p>
        </footer>
      </div>
    </PageTransition>
  );
};

export default HomePage;