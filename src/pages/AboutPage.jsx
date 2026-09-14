import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import Header from '../components/Header';
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
      <title>À propos — Kevin Anguile-Diop</title>
      <div className="bg-black select-none flex flex-col p-4 sm:p-8 md:p-12 pt-24 md:pt-36 relative overflow-x-hidden min-h-screen">
        
        <Header items={aboutNavItems} />
        
        {/* CADRE AVEC CONTOUR ULTRA FONCE ET EFFET 3D BRUTALISTE */}
        <div className="relative z-10 w-full flex-grow bg-[#161616] border-[3px] md:border-[6px] border-[#080808] rounded-[32px] md:rounded-[45px] overflow-hidden flex flex-col pt-16 md:pt-24 px-6 md:px-12 xl:px-20 text-white shadow-[8px_8px_0_#111111] md:shadow-[14px_14px_0_#111111]">
          
          <main className="relative z-10 max-w-7xl mx-auto w-full flex flex-col pb-0 flex-grow">
            
            <FadeIn direction="down">
                <h1 className="text-5xl md:text-7xl mb-16 font-title font-black uppercase tracking-tighter">
                  Mieux me <span className="italic font-rumei text-[#00c8ff] normal-case pl-2">connaitre</span>
                </h1>
            </FadeIn>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                <FadeIn delay={0.2} direction="right">
                    <div className="space-y-6">
                        <p className="text-lg md:text-xl text-white/80 font-sans leading-relaxed max-w-lg">
                            Toujours passionné par le graphisme, le dessin et les jeux vidéo, 
                            je cherche maintenant à tourner cette passion en profession. 
                            Mon approche mêle créativité visuelle et rigueur technique pour 
                            donner vie à des univers uniques.
                        </p>

                        <p className="text-lg md:text-xl text-white font-sans leading-relaxed max-w-lg font-medium border-l-4 border-[#00c8ff] pl-4">
                            Dans cette optique, je suis actuellement à la recherche d'une <span className="text-[#00c8ff] font-bold">alternance</span> de <span className="text-[#00c8ff] font-bold">1 an</span> à partir d'<span className="text-[#00c8ff] font-bold">Septembre</span>. 
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
                        <h2 className="text-3xl md:text-4xl font-octuple text-white border-b-2 border-zinc-700 pb-4 uppercase tracking-tighter">
                            Mes motivations
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed font-sans">
                            Ce qui me pousse à créer chaque jour, c'est l'envie de repousser les limites de l'imaginaire. 
                            Je suis fasciné par la capacité du design à raconter des histoires sans mots et à 
                            transformer une simple idée en une expérience visuelle immersive. Le défi constant 
                            d'apprendre de nouveaux outils et de perfectionner mon style est mon moteur principal.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={0.5} direction="up">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-octuple text-white border-b-2 border-zinc-700 pb-4 uppercase tracking-tighter">
                            Mon projet futur
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed font-sans">
                            J'ai pour projet professionnel d'intégrer des studios de création de renom pour 
                            participer à la conception de chartes graphiques complexes et d'éléments visuels 
                            pour de grandes entreprises de jeux vidéo. À long terme, je souhaite diriger 
                            des projets artistiques ambitieux qui marquent l'industrie par leur originalité et leur impact émotionnel.
                        </p>
                    </div>
                </FadeIn>
            </div>

            <FadeIn direction="up" delay={0.6}>
                <div className="border-t-2 border-zinc-700 pt-10 mb-20">
                    <h3 className="text-center text-sm font-black uppercase tracking-[0.3em] text-white/40 mb-8 font-sans">
                        Mes Outils Favoris
                    </h3>
                    <div className="w-full relative overflow-hidden">
                        <LogoLoop
                            logos={techLogos}
                            speed={80} direction="left" logoHeight={50} gap={60} pauseOnHover={true} scaleOnHover={true} fadeOut={true} fadeOutColor="#18181b" ariaLabel="Technologies"
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
                          className="relative w-16 h-16 transition-transform hover:scale-110 flex items-center justify-center border-2 border-zinc-700 rounded-xl hover:bg-[#0077b5] hover:border-transparent group"
                        >
                            <SiLinkedin className="relative z-10 w-8 h-8 text-[#0077b5] group-hover:text-white transition-colors" />
                        </a>
                        <a 
                          href="https://www.instagram.com/k.pumpkinn/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="relative w-16 h-16 transition-transform hover:scale-110 flex items-center justify-center border-2 border-zinc-700 rounded-xl hover:border-transparent group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <SiInstagram className="relative z-10 w-8 h-8 text-white group-hover:text-white transition-colors" />
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

          {/* Section Contact intégrée en bas du cadre */}
          <div id="contact" className="relative w-full border-t-[4px] border-[#080808] flex flex-col items-center justify-center py-20 bg-[#161616] overflow-hidden">

              <FadeIn direction="up" delay={0.1}>
                 <div className="relative z-10">
                    <ContactCTA onOpen={onOpenContact} theme="dark" />
                 </div>
              </FadeIn>
          </div>

          <footer className="py-8 bg-[#161616] text-center border-t border-white/10 mt-auto">
              <Link 
                  to="/mentions-legales" 
                  className="text-xs text-white/40 hover:text-[#00c8ff] font-bold transition-colors uppercase tracking-[0.2em]"
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
