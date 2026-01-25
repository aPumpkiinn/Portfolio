// src/pages/AboutPage.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';
import DarkVeil from '../components/DarkVeil'; 
import FadeIn from '../components/FadeIn'; 
import LogoLoop from '../components/LogoLoop';
import ContactCTA from '../components/ContactCTA'; 
import PageTransition from '../components/PageTransition'; 

import { 
  SiDavinciresolve, SiHtml5, SiCss3, SiAdobeillustrator, 
  SiAdobephotoshop, SiAdobeindesign, SiAdobeaftereffects,
  SiLinkedin, SiInstagram
} from 'react-icons/si';

const AboutPage = ({ onOpenContact }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact') {
        const timer = setTimeout(() => {
            const element = document.getElementById('contact');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500); 
        return () => clearTimeout(timer);
    } else {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
        return () => clearTimeout(timer);
    }
  }, [location]);

  const aboutNavItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Projets', href: '/projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const techLogos = [
    { node: <SiDavinciresolve className="text-white" />, title: "DaVinci Resolve" },
    { node: <SiHtml5 className="text-white" />, title: "HTML5" },
    { node: <SiCss3 className="text-white" />, title: "CSS3" },
    { node: <SiAdobeillustrator className="text-white" />, title: "Illustrator" },
    { node: <SiAdobephotoshop className="text-white" />, title: "Photoshop" },
    { node: <SiAdobeindesign className="text-white" />, title: "InDesign" },
    { node: <SiAdobeaftereffects className="text-white" />, title: "After Effects" },
  ];

  return (
    <PageTransition>
      <div style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff', position: 'relative', overflowX: 'hidden' }}>
        
        <Header items={aboutNavItems} />
        
        <main className="relative z-10 pt-32 px-6 md:px-12 max-w-7xl mx-auto pb-0">
          
          <FadeIn direction="down">
              {/* RETOUR À FONT-TITLE */}
              <h1 className="text-5xl md:text-7xl mb-16 font-title">
                <span className="italic">Mieux me</span> connaitre
              </h1>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
              <FadeIn delay={0.2} direction="right">
                  <div className="space-y-6">
                      <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                          Toujours passionné par le graphisme, le dessin et les jeux vidéo, 
                          je cherche maintenant à tourner cette passion en profession. 
                          Mon approche mêle créativité visuelle et rigueur technique pour 
                          donner vie à des univers uniques.
                      </p>

                      <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-lg font-medium border-l-2 border-[#646cff] pl-4">
                          Dans cette optique, je suis actuellement à la recherche d'un stage de <span className="text-[#646cff]">2-3 mois</span> à partir d'<span className="text-[#646cff]">Avril</span>. 
                          Je souhaite rejoindre une équipe passionnée où je pourrai apporter ma rigueur et ma créativité, 
                          tout en continuant à apprendre aux côtés de professionnels.
                      </p>
                  </div>
              </FadeIn>
              
              <FadeIn delay={0.4} direction="left">
                  <div className="h-[300px] w-full max-w-md mx-auto lg:mx-0 rounded-[40px] overflow-hidden border border-white/5 shadow-2xl">
                      <img 
                        src="src/public/moi.webp" 
                        alt="Portrait" 
                        className="w-full h-full object-cover block"
                      />
                  </div>
              </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
              <FadeIn delay={0.3} direction="up">
                  <div className="space-y-6">
                      {/* RETOUR À FONT-TITLE */}
                      <h2 className="text-3xl md:text-4xl font-title text-white border-b border-white/10 pb-4">
                          Mes motivations
                      </h2>
                      <p className="text-gray-400 text-lg leading-relaxed">
                          Ce qui me pousse à créer chaque jour, c'est l'envie de repousser les limites de l'imaginaire. 
                          Je suis fasciné par la capacité du design à raconter des histoires sans mots et à 
                          transformer une simple idée en une expérience visuelle immersive. Le défi constant 
                          d'apprendre de nouveaux outils et de perfectionner mon style est mon moteur principal.
                      </p>
                  </div>
              </FadeIn>

              <FadeIn delay={0.5} direction="up">
                  <div className="space-y-6">
                      {/* RETOUR À FONT-TITLE */}
                      <h2 className="text-3xl md:text-4xl font-title text-white border-b border-white/10 pb-4">
                          Mon projet futur
                      </h2>
                      <p className="text-gray-400 text-lg leading-relaxed">
                          J'ai pour projet professionnel d'intégrer des studios de création de renom pour 
                          participer à la conception de chartes graphiques complexes et d'éléments visuels 
                          pour de grandes entreprises de jeux vidéo. À long terme, je souhaite diriger 
                          des projets artistiques ambitieux qui marquent l'industrie par leur originalité et leur impact émotionnel.
                      </p>
                  </div>
              </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.6}>
              <div className="border-t border-white/10 pt-10 mb-20">
                  <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500 mb-8">
                      Mes Outils Favoris
                  </h3>
                  <div className="w-full relative overflow-hidden">
                      <LogoLoop
                          logos={techLogos}
                          speed={80} direction="left" logoHeight={50} gap={60} pauseOnHover={true} scaleOnHover={true} fadeOut={true} fadeOutColor="#000000" ariaLabel="Technologies"
                      />
                  </div>
              </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.8}>
              <div className="flex flex-col items-center pb-32">
                  {/* RETOUR À FONT-TITLE */}
                  <h2 className="text-3xl md:text-4xl font-title mb-10">Mes réseaux</h2>
                  <div className="flex gap-8 mb-12">
                      <a href="#" className="relative w-20 h-20 transition-transform hover:scale-110">
                          <div className="absolute inset-[2px] bg-white rounded-md"></div>
                          <SiLinkedin className="relative z-10 w-full h-full text-[#0077b5]" />
                      </a>
                      <a href="#" className="relative w-20 h-20 transition-transform hover:scale-110">
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-[20px] opacity-0 hover:opacity-100 transition-opacity"></div>
                          <SiInstagram className="relative z-10 w-full h-full text-white p-4" />
                      </a>
                  </div>
                  <a href="/cv.pdf" className="text-xl font-bold underline underline-offset-4 decoration-2 hover:text-gray-400 transition-colors mb-16 uppercase tracking-widest">
                      Consulter mon CV
                  </a>
              </div>
          </FadeIn>

        </main>

        <div id="contact" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <DarkVeil hueShift={20} noiseIntensity={0.1} scanlineIntensity={0} speed={0.3} />
            </div>
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
            <div className="relative z-10 w-full">
                <FadeIn direction="up" delay={0.1}>
                   <ContactCTA onOpen={onOpenContact} />
                </FadeIn>
            </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default AboutPage;