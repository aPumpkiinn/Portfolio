import React, { useCallback } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero'; 
import FlowingMenu from '../components/FlowingMenu'; 
import DarkVeil from '../components/DarkVeil'; 
import ContactCTA from '../components/ContactCTA';
import FadeIn from '../components/FadeIn'; 
import PageTransition from '../components/PageTransition'; 

const NAV_ITEMS = [
  { label: 'Accueil', href: '#home' },
  { label: 'À Propos', href: '/Apropos' },
  { label: 'Projets', href: '/projects' },
  { label: 'Contact', href: '/Apropos#contact' } 
];

// REMPLACER LES LIENS PICSUM PAR TES IMAGES LOCALES DANS /public/images/
const PROJECT_CATEGORIES = [
  { text: 'Tous les projets', image: '/images/projets-all.webp', link: '/projects', filter: 'Tous' },
  { text: 'Web Development', image: '/images/web-dev.webp', link: '/projects', filter: 'Web' },
  { text: 'Design UI', image: '/images/design-ui.webp', link: '/projects', filter: 'Design UI' },
  { text: 'Infographie', image: '/images/infographie.webp', link: '/projects', filter: 'Infographie' }
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleMenuClick = useCallback((item) => {
    if (item.link) {
      navigate(item.link, { state: { category: item.filter || 'Tous' } });
    }
  }, [navigate]);

  return (
    <PageTransition>
      <title>Kevin Anguile-Diop | Portfolio</title>
      <meta name="description" content="Portfolio de Kevin Anguile-Diop - Designer et Développeur." />

      <div className="min-h-screen relative bg-black">
        <main>
          {/* SECTION HERO */}
          <section id="home" className="min-h-screen flex items-center justify-center relative bg-transparent overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
              <DarkVeil speed={0.4} />
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
                  entre le design et la technologie.
                </p>
              </FadeIn>
              <FadeIn delay={0.4} direction="up">
                <button 
                  onClick={() => navigate('/Apropos')}
                  className="px-8 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold"
                  aria-label="En savoir plus sur Kevin Anguile-Diop"
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
                  bgColor="transparent" 
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