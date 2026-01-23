// src/components/BounceCards.jsx

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const BounceCards = ({
  images,
  transformStyles,
  containerWidth,
  containerHeight,
  animationDelay,
  animationStagger,
  easeType,
  enableHover,
  className,
  // Ajout d'une prop pour le contenu de la carte
  children
}) => {
  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  // Vérification basique des données
  if (images.length !== transformStyles.length) {
    console.error("BounceCards: Le nombre d'images doit correspondre au nombre de styles de transformation.");
    return null;
  }

  useEffect(() => {
    if (cardRefs.current.length === 0) return;

    // 1. Définir l'état initial (caché ou hors position)
    gsap.set(cardRefs.current, { 
        opacity: 0, 
        scale: 0.8,
        y: 20 
    });

    // 2. Animer les cartes
    gsap.to(cardRefs.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.5, // Durée de l'animation de rebond
      ease: easeType || "power1.out", // Utilisation de l'ease élastique
      delay: animationDelay,
      stagger: animationStagger,
      
      // La rotation et le décalage initial sont définis ici
      // On utilise les transformStyles pour le décalage visuel initial
      // On assume que le décalage (translate) est déjà inclus dans transformStyles
      transform: (i) => transformStyles[i],
    });

  }, [images, transformStyles, easeType, animationDelay, animationStagger]);

  // Gestion du survol (si activé)
  const handleHover = (target, isEnter) => {
    if (!enableHover) return;

    // Animation au survol : met en avant la carte survolée
    gsap.to(target, {
      y: isEnter ? -15 : 0, // Soulève légèrement
      zIndex: isEnter ? 10 : 5, // Augmente la priorité
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div 
        ref={containerRef}
        className={className}
        style={{
            width: containerWidth,
            height: containerHeight,
            position: 'relative',
            margin: '0 auto',
            perspective: '1000px', // Donne de la profondeur aux rotations
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        {images.map((image, index) => (
            <div
                key={index}
                ref={el => cardRefs.current[index] = el}
                className="bounce-card"
                onMouseEnter={(e) => handleHover(e.currentTarget, true)}
                onMouseLeave={(e) => handleHover(e.currentTarget, false)}
                style={{
                    position: 'absolute',
                    width: '60%', // Taille relative
                    height: '100%',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                    zIndex: 5, // Z-index de base
                    transform: transformStyles[index] // Applique la transformation initiale
                }}
            >
                <img 
                    src={image} 
                    alt={`Projet ${index + 1}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                
                {/* 💡 Contenu personnalisé au centre de la carte (Titre du projet) */}
                {children && children[index]}

            </div>
        ))}
    </div>
  );
};

export default BounceCards;