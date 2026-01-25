import React from 'react'; 
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Hero from '../components/Hero'; 
import FlowingMenu from '../components/FlowingMenu'; 
import DarkVeil from '../components/DarkVeil'; 
import ContactCTA from '../components/ContactCTA';
import FadeIn from '../components/FadeIn'; 
import PageTransition from '../components/PageTransition'; 

const HomePage = ({ onOpenContact }) => {
  const navigate = useNavigate();

  // Navigation spécifique à l'Accueil
  const homeNavItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'À Propos', href: '/Apropos' },
    { label: 'Projets', href: '/projects' },
    { label: 'Contact', href: '/Apropos#contact' } // Redirige vers le bas de AboutPage
  ];

  const projectsItems = [
    { text: 'Tous les projets', image: 'https://picsum.photos/600/400?random=4', link: '/projects', filter: 'Tous' },
    { text: 'Web Development', image: 'https://picsum.photos/600/400?random=1', link: '/projects', filter: 'Web' },
    { text: 'Design UI', image: 'https://picsum.photos/600/400?random=2', link: '/projects', filter: 'Design UI' },
    { text: 'Infographie', image: 'https://picsum.photos/600/400?random=3', link: '/projects', filter: 'Infographie' }
    
  ];

  const handleMenuClick = (item) => {
    if (item.link) navigate(item.link, { state: { category: item.filter || 'Tous' } });
  };

  return (
    <PageTransition>
        {/* IMPORTANT: minHeight et non height fixe pour le scroll du header */}
        <div style={{ minHeight: '100vh', position: 'relative', backgroundColor: '#000000' }}>
        
        <Header items={homeNavItems} />

        <main>
            {/* SECTION HERO */}
            <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', backgroundColor: 'transparent' }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <DarkVeil hueShift={0} noiseIntensity={0} scanlineIntensity={0} speed={0.5} />
                </div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
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
                        >
                        En savoir plus
                        </button>
                    </FadeIn>
                </div>
            </section>

            {/* SECTION PROJETS (TEASER) */}
            <section id="projects" style={{ backgroundColor: '#000000', paddingBottom: '50px' }}>
                <FadeIn direction="down">
                    <h2 className="text-4xl md:text-6xl font-title text-white text-center py-10">
                        Mes Projets Récents
                    </h2>
                </FadeIn>
                <FadeIn delay={0.2} duration={1.5}>
                    <div style={{ height: '600px', position: 'relative', width: '100%' }}>
                        <FlowingMenu items={projectsItems} bgColor="#000000" textColor="#ffffff" onItemClick={handleMenuClick} /> 
                    </div>
                </FadeIn>
            </section>

            {/* SECTION CONTACT */}
            <section id="contact" style={{ backgroundColor: '#000000', borderTop: '1px solid #111' }}>
                <FadeIn direction="up" delay={0.1}>
                    <ContactCTA onOpen={() => navigate('/Apropos#contact')} />
                </FadeIn>
            </section>
            
        </main>

        <footer style={{ padding: '20px', backgroundColor: '#000000', color: 'white', textAlign: 'center' }}>
            <p>&copy; 2026 Mon Portfolio. Tous droits réservés.</p>
        </footer>
        </div>
    </PageTransition>
  );
};

export default HomePage;