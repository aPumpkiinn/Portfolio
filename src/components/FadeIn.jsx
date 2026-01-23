import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// On active le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const FadeIn = ({ 
  children, 
  delay = 0,       // Retard avant le début (ex: 0.2 pour enchainer)
  direction = 'up', // 'up', 'down', 'left', 'right'
  duration = 1,
  className = '',
  fullWidth = false // Si vrai, le conteneur prend 100% de la largeur
}) => {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;

    // Calcul de la direction de départ
    let xStart = 0;
    let yStart = 0;

    switch (direction) {
      case 'up': yStart = 50; break;    // Arrive du bas
      case 'down': yStart = -50; break; // Arrive du haut
      case 'left': xStart = 50; break;  // Arrive de la droite
      case 'right': xStart = -50; break;// Arrive de la gauche
      default: yStart = 50;
    }

    // L'animation GSAP
    gsap.fromTo(el, 
      { 
        autoAlpha: 0, // Opacité 0 + visibility: hidden
        y: yStart, 
        x: xStart 
      },
      { 
        duration: duration,
        autoAlpha: 1, 
        y: 0, 
        x: 0,
        delay: delay,
        ease: "power3.out", // Effet fluide et naturel
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // Démarre quand le haut de l'élément est à 85% de l'écran
          toggleActions: "play none none reverse" // Joue l'anim, et la rejoue à l'envers si on remonte (optionnel)
          // Pour jouer une seule fois, mettez : toggleActions: "play none none none"
        }
      }
    );
  }, [delay, direction, duration]);

  return (
    <div ref={elRef} className={`${className} ${fullWidth ? 'w-full' : ''}`}>
      {children}
    </div>
  );
};

export default FadeIn;