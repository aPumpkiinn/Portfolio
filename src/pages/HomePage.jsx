import React, { useCallback } from 'react'; 
import { useNavigate, Link } from 'react-router-dom';
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
      navigate(item.link, { state: { filter: item.filter } });
    }
  }, [navigate]);

  return (
    <PageTransition>
      <main className="bg-black min-h-screen">
          {/* SECTION HERO */}
          <section id="home" className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0 z-0">
              <DarkVeil hueShift={0} noiseIntensity={0.05} scanlineIntensity={0.2} speed={0.5} />
            </div>
            <div className="relative z-10 h-full">
              <Hero navItems={NAV_ITEMS} />
            </div>
          </section>

          {/* SECTION PROJETS (TEASER) */}
          <section id="projects" className="bg-black pb-12">
            <FadeIn direction="down">
              <h2 className="text-4xl md:text-6xl font-title text-white text-center py-10">
                Mes Différents Projets
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

        <footer className="py-12 bg-black border-t border-white/5 text-center flex flex-col items-center gap-4">
          <p className="text-gray-500 text-sm tracking-widest">
            © 2026 Kevin Anguile Diop — Tous droits réservés
          </p>
          <Link 
            to="/mentions-legales" 
            className="text-xs text-gray-600 hover:text-[#646cff] transition-colors uppercase tracking-[0.2em]"
          >
            Mentions Légales
          </Link>
        </footer>
    </PageTransition>
  );
};

export default HomePage;