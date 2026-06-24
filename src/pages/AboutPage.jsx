import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import Header from '../components/Header';
import FadeIn from '../components/FadeIn'; 
import LogoLoop from '../components/LogoLoop';
import ContactCTA from '../components/ContactCTA'; 
import PageTransition from '../components/PageTransition'; 
import PixelBlast from '../components/PixelBlast';

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
    { node: <SiDavinciresolve className="text-black" />, title: "DaVinci Resolve" },
    { node: <SiHtml5 className="text-black" />, title: "HTML5" },
    { node: <SiCss3 className="text-black" />, title: "CSS3" },
    { node: <SiAdobeillustrator className="text-black" />, title: "Illustrator" },
    { node: <SiAdobephotoshop className="text-black" />, title: "Photoshop" },
    { node: <SiAdobeindesign className="text-black" />, title: "InDesign" },
    { node: <SiAdobeaftereffects className="text-black" />, title: "After Effects" },
  ];

  return (
    <PageTransition>
      <title>À propos — Kevin Anguile-Diop</title>
      <div className="bg-black select-none flex flex-col p-4 sm:p-8 md:p-12 pt-24 md:pt-36 relative overflow-x-hidden min-h-screen">
        
        <Header items={aboutNavItems} />
        
        {/* CADRE BLANC BRUTALISTE */}
        <div className="relative z-10 w-full flex-grow bg-white border-[4px] md:border-[8px] border-black rounded-[32px] md:rounded-[45px] overflow-hidden flex flex-col pt-16 md:pt-24 px-6 md:px-12 xl:px-20 text-black">
          
          <main className="relative z-10 max-w-7xl mx-auto w-full flex flex-col pb-0 flex-grow">
            
            <FadeIn direction="down">
                <h1 className="text-5xl md:text-7xl mb-16 font-title font-black uppercase tracking-tighter">
                  Mieux me <span className="italic font-rumei text-[#00c8ff] normal-case pl-2">connaitre</span>
                </h1>
            </FadeIn>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                <FadeIn delay={0.2} direction="right">
                    <div className="space-y-6">
                        <p className="text-lg md:text-xl text-black/80 font-sans leading-relaxed max-w-lg">
                            Toujours passionné par le graphisme, le dessin et les jeux vidéo, 
                            je cherche maintenant à tourner cette passion en profession. 
                            Mon approche mêle créativité visuelle et rigueur technique pour 
                            donner vie à des univers uniques.
                        </p>

                        <p className="text-lg md:text-xl text-black font-sans leading-relaxed max-w-lg font-medium border-l-4 border-[#00c8ff] pl-4">
                            Dans cette optique, je suis actuellement à la recherche d'un stage de <span className="text-[#00c8ff] font-bold">2-3 mois</span> à partir d'<span className="text-[#00c8ff] font-bold">Avril</span>. 
                            Je souhaite rejoindre une équipe passionnée où je pourrai apporter ma rigueur et ma créativité, 
                            tout en continuant à apprendre aux côtés de professionnels.
                        </p>
                    </div>
                </FadeIn>
                
                <FadeIn delay={0.4} direction="left">
                    <div className="h-[450px] w-full max-w-md mx-auto lg:mx-0 rounded-[2.5rem] overflow-hidden border-[3px] border-black shadow-[6px_6px_0_rgba(0,0,0,1)] bg-[#161616] group">
                        <img 
                          src="img/Moi.webp" 
                          alt="Kevin Anguile-Diop" 
                          className="w-full h-full object-cover block filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100"
                        />
                    </div>
                </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
                <FadeIn delay={0.3} direction="up">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-octuple text-black border-b-2 border-black pb-4 uppercase tracking-tighter">
                            Mes motivations
                        </h2>
                        <p className="text-black/80 text-lg leading-relaxed font-sans">
                            Ce qui me pousse à créer chaque jour, c'est l'envie de repousser les limites de l'imaginaire. 
                            Je suis fasciné par la capacité du design à raconter des histoires sans mots et à 
                            transformer une simple idée en une expérience visuelle immersive. Le défi constant 
                            d'apprendre de nouveaux outils et de perfectionner mon style est mon moteur principal.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={0.5} direction="up">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-octuple text-black border-b-2 border-black pb-4 uppercase tracking-tighter">
                            Mon projet futur
                        </h2>
                        <p className="text-black/80 text-lg leading-relaxed font-sans">
                            J'ai pour projet professionnel d'intégrer des studios de création de renom pour 
                            participer à la conception de chartes graphiques complexes et d'éléments visuels 
                            pour de grandes entreprises de jeux vidéo. À long terme, je souhaite diriger 
                            des projets artistiques ambitieux qui marquent l'industrie par leur originalité et leur impact émotionnel.
                        </p>
                    </div>
                </FadeIn>
            </div>

            <FadeIn direction="up" delay={0.6}>
                <div className="border-t-2 border-black pt-10 mb-20">
                    <h3 className="text-center text-sm font-black uppercase tracking-[0.3em] text-black/40 mb-8 font-sans">
                        Mes Outils Favoris
                    </h3>
                    <div className="w-full relative overflow-hidden">
                        <LogoLoop
                            logos={techLogos}
                            speed={80} direction="left" logoHeight={50} gap={60} pauseOnHover={true} scaleOnHover={true} fadeOut={true} fadeOutColor="#ffffff" ariaLabel="Technologies"
                        />
                    </div>
                </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.8}>
                <div className="flex flex-col items-center pb-32">
                    <h2 className="text-3xl md:text-4xl font-octuple uppercase tracking-tighter mb-10">Mes réseaux</h2>
                    <div className="flex gap-8 mb-12">
                        <a 
                          href="https://www.linkedin.com/in/anguilé-diop-kévin-7b709b31b/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="relative w-16 h-16 transition-transform hover:scale-110 flex items-center justify-center border-2 border-black rounded-xl hover:bg-[#0077b5] group"
                        >
                            <SiLinkedin className="relative z-10 w-8 h-8 text-[#0077b5] group-hover:text-white transition-colors" />
                        </a>
                        <a 
                          href="https://www.instagram.com/k.pumpkinn/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="relative w-16 h-16 transition-transform hover:scale-110 flex items-center justify-center border-2 border-black rounded-xl hover:border-transparent group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <SiInstagram className="relative z-10 w-8 h-8 text-black group-hover:text-white transition-colors" />
                        </a>
                    </div>
                    <a 
                      href="/CV.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative px-8 py-4 bg-[#00c8ff] text-black font-bold border-[3px] border-black rounded-full overflow-hidden uppercase tracking-widest text-sm"
                      >
                      <span className="absolute inset-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                      <span className="relative group-hover:text-white transition-colors duration-300">Consulter mon CV</span>
                    </a>
                </div>
            </FadeIn>

          </main>

          {/* Section Contact intégrée en bas du cadre blanc */}
          <div id="contact" className="relative w-full border-t-[4px] border-black flex flex-col items-center justify-center py-20 bg-white overflow-hidden">
              {/* PIXELBLAST BACKGROUND POUR LE CONTACT */}
              <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none overflow-hidden">
                <div style={{ width: '1080px', height: '1080px', position: 'relative' }}>
                  <PixelBlast
                    variant="square"
                    pixelSize={3}
                    color="#003f82"
                    patternScale={2}
                    patternDensity={1}
                    enableRipples
                    rippleSpeed={0.1}
                    rippleThickness={0.01}
                    rippleIntensityScale={0.1}
                    speed={2}
                    transparent
                    edgeFade={1}
                  />
                </div>
              </div>
              
              <FadeIn direction="up" delay={0.1}>
                 <div className="relative z-10">
                    <ContactCTA onOpen={onOpenContact} theme="light" />
                 </div>
              </FadeIn>
          </div>

          <footer className="py-8 bg-white text-center border-t border-black/10 mt-auto">
              <Link 
                  to="/mentions-legales" 
                  className="text-xs text-black/40 hover:text-[#00c8ff] font-bold transition-colors uppercase tracking-[0.2em]"
              >
                  Mentions Légales
              </Link>
          </footer>

        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;