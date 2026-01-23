import React, { useRef, useEffect, useState, useCallback } from 'react';
import './LogoLoop.css'; // Assurez-vous que le CSS que vous avez fourni est dans ce fichier

const LogoLoop = ({
  logos = [],
  speed = 100,
  direction = 'left', // 'left', 'right', 'up', 'down'
  logoHeight = 40,
  gap = 40,
  hoverSpeed, // Vitesse au survol (optionnel)
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor,
  ariaLabel = "Logos partenaires",
  className = "",
  style = {},
}) => {
  const trackRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const animationFrameId = useRef(null);
  const positionRef = useRef(0);
  const lastTimeRef = useRef(0);

  // Détermine si le défilement est vertical
  const isVertical = direction === 'up' || direction === 'down';

  // Gestion de la vitesse (normale ou survol)
  const currentSpeed = isHovering && hoverSpeed !== undefined ? hoverSpeed : speed;

  const animate = useCallback((time) => {
    if (!lastTimeRef.current) lastTimeRef.current = time;
    const delta = time - lastTimeRef.current;
    lastTimeRef.current = time;

    if (trackRef.current) {
      // Calcul du déplacement basé sur le temps (delta) pour être fluide sur tous les écrans
      const moveAmount = (currentSpeed * delta) / 1000;
      
      if (direction === 'left' || direction === 'up') {
        positionRef.current -= moveAmount;
      } else {
        positionRef.current += moveAmount;
      }

      const trackSize = isVertical 
        ? trackRef.current.scrollHeight / 2 
        : trackRef.current.scrollWidth / 2;

      // Réinitialisation de la boucle (Infinite Loop Logic)
      if (direction === 'left' || direction === 'up') {
        if (positionRef.current <= -trackSize) {
          positionRef.current += trackSize;
        }
      } else {
        if (positionRef.current >= 0) {
          positionRef.current -= trackSize;
        }
      }

      // Application de la transformation
      const transform = isVertical
        ? `translate3d(0, ${positionRef.current}px, 0)`
        : `translate3d(${positionRef.current}px, 0, 0)`;

      trackRef.current.style.transform = transform;
    }

    animationFrameId.current = requestAnimationFrame(animate);
  }, [currentSpeed, direction, isVertical]);

  useEffect(() => {
    // Démarrer l'animation
    animationFrameId.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [animate]);

  // Construction des classes CSS
  const containerClasses = [
    'logoloop',
    isVertical ? 'logoloop--vertical' : '',
    scaleOnHover ? 'logoloop--scale-hover' : '',
    fadeOut ? 'logoloop--fade' : '',
    className
  ].filter(Boolean).join(' ');

  // Injection des variables CSS dynamiques
  const cssVars = {
    '--logoloop-gap': `${gap}px`,
    '--logoloop-logoHeight': `${logoHeight}px`,
    ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor }),
    ...style
  };

  // Fonction pour rendre un logo individuel
  const renderItem = (item, index) => {
    const content = (
      <>
        {item.src ? (
          <img src={item.src} alt={item.alt || item.title} loading="lazy" />
        ) : (
          <div className="logoloop__node">{item.node}</div>
        )}
      </>
    );

    return (
      <div key={index} className="logoloop__item" title={item.title}>
        {item.href ? (
          <a 
            href={item.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="logoloop__link"
            tabIndex="-1" // Évite le focus clavier pendant l'animation pour ne pas casser le flow
          >
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    );
  };

  return (
    <div 
      className={containerClasses} 
      style={cssVars}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="logoloop__track" ref={trackRef}>
        {/* On double la liste pour créer l'illusion d'infini */}
        <div className="logoloop__list">
          {logos.map((logo, i) => renderItem(logo, `a-${i}`))}
        </div>
        <div className="logoloop__list" aria-hidden="true">
          {logos.map((logo, i) => renderItem(logo, `b-${i}`))}
        </div>
      </div>
    </div>
  );
};

export default LogoLoop;