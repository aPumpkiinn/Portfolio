import React, { useCallback } from 'react'; 
import { useNavigate, Link } from 'react-router-dom';
import Hero from '../components/Hero'; 
import FlowingMenu from '../components/FlowingMenu'; 
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
  { text: 'Tous les projets', image: '/images/projets-all.webp', link: '/projects', filter: 'Tous', fontClass: 'font-octuple uppercase font-black' },
  { text: 'Web Development', image: '/images/web-dev.webp', link: '/projects', filter: 'Web', fontClass: 'font-octuple uppercase font-black' },
  { text: 'Design UI', image: '/images/design-ui.webp', link: '/projects', filter: 'Design UI', fontClass: 'font-sans italic font-normal tracking-tight' },
  { text: 'Infographie', image: '/images/infographie.webp', link: '/projects', filter: 'Infographie', fontClass: 'font-rumei italic font-normal tracking-wide' },
  { text: 'Expérience Professionnelle', image: '/img/GIS_1.png', link: '/projects', filter: 'Expérience Pro', fontClass: 'font-sans uppercase font-bold tracking-tight' }
];

const HomePage = ({ onOpenContact }) => {
  const navigate = useNavigate();

  const handleMenuClick = useCallback((item) => {
    if (item.link) {
      navigate(item.link, { state: { filter: item.filter } });
    }
  }, [navigate]);

  return (
    <PageTransition direction="horizontal">
      <main className="bg-black min-h-screen">
          {/* SECTION HERO */}
          <section id="home" className="relative min-h-screen w-full flex flex-col">
            <div className="relative z-10 w-full flex-1 flex flex-col justify-center">
              <Hero navItems={NAV_ITEMS} />
            </div>
          </section>

          {/* SECTION PROJETS (TEASER) */}
          <section id="projects" className="bg-black pb-12">
            <FadeIn direction="down">
              <h2 className="text-4xl md:text-6xl font-octuple uppercase tracking-tighter text-white text-center py-10">
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
          <section id="contact" className="bg-black border-t border-[#080808]">
            <FadeIn direction="up" delay={0.1}>
              <ContactCTA onOpen={onOpenContact} />
            </FadeIn>
          </section>
        </main>

        <footer className="py-12 bg-black border-t-[4px] border-[#080808] text-center flex flex-col items-center gap-4">
          <p className="text-gray-400 text-sm tracking-widest font-bold uppercase">
            © 2026 Kevin Anguile Diop — Tous droits réservés
          </p>
          <Link 
            to="/mentions-legales" 
            className="text-xs text-[#00c8ff] hover:text-white transition-colors uppercase tracking-[0.2em] font-bold"
          >
            Mentions Légales
          </Link>
        </footer>
    </PageTransition>
  );
};

export default HomePage;