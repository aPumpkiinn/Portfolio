import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './LogoLoop.css';

const LogoLoop = ({ 
  logos = [], 
  speed = 100, 
  direction = 'left', 
  logoHeight = 28,
  gap = 32,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  useCustomRender = false,
  ariaLabel = "Technology partners"
}) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  
  // On crée un tableau répété pour assurer la boucle infinie sans coupure
  // On le répète 4 fois pour être sûr de couvrir les grands écrans
  const [items, setItems] = useState([...logos, ...logos, ...logos, ...logos]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calcul de la largeur d'un set d'éléments pour savoir quand boucler
    const totalWidth = track.scrollWidth / 4; 

    // Configuration de l'animation GSAP
    const ctx = gsap.context(() => {
      animationRef.current = gsap.to(track, {
        x: direction === 'left' ? -totalWidth : 0, // On bouge vers la gauche
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % totalWidth) // Reset automatique pour l'effet infini
        },
        duration: totalWidth / speed, // La vitesse dépend de la largeur
        ease: "none",
        repeat: -1,
        // Si direction est right, on commence décalé
        startAt: direction === 'right' ? { x: -totalWidth } : { x: 0 }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [items, speed, direction]);

  // Gestion du survol (Hover)
  const handleMouseEnter = () => {
    if (animationRef.current) {
        if (hoverSpeed === 0) {
            animationRef.current.pause();
        } else {
            animationRef.current.timeScale(hoverSpeed / speed);
        }
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
        animationRef.current.play();
        animationRef.current.timeScale(1);
    }
  };

  return (
    <div 
      className={`logoloop ${scaleOnHover ? 'logoloop--scale-hover' : ''} ${fadeOut ? 'logoloop--fade' : ''}`}
      ref={containerRef}
      style={{
        '--logoloop-gap': `${gap}px`,
        '--logoloop-logoHeight': `${logoHeight}px`,
        '--logoloop-fadeColorAuto': fadeOutColor
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="marquee"
      aria-label={ariaLabel}
    >
      <div className="logoloop__track" ref={trackRef}>
        {items.map((logo, index) => (
          <div key={index} className="logoloop__item">
             {/* Gestion des liens si présents */}
             {logo.href ? (
                 <a href={logo.href} target="_blank" rel="noopener noreferrer" className="logoloop__link" title={logo.title}>
                    <div className="logoloop__node">{logo.node || <img src={logo.src} alt={logo.alt} />}</div>
                 </a>
             ) : (
                 <div className="logoloop__node">{logo.node || <img src={logo.src} alt={logo.alt} />}</div>
             )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;