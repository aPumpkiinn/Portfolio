import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeIn = ({ 
  children, 
  direction = 'up', // up, down, left, right
  delay = 0, 
  duration = 0.8, 
  fullWidth = false 
}) => {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    
    // Configuration de la direction
    let x = 0;
    let y = 0;
    if (direction === 'up') y = 50;
    if (direction === 'down') y = -50;
    if (direction === 'left') x = 50;
    if (direction === 'right') x = -50;

    const ctx = gsap.context(() => {
      gsap.fromTo(el, 
        { 
          opacity: 0, 
          x: x, 
          y: y,
          willChange: 'opacity, transform' 
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: duration,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%', // L'anim commence quand le haut de l'élément est à 85% du bas de l'écran
            toggleActions: 'play none none reverse' // Rejoue l'anim si on remonte
          }
        }
      );
    }, elRef);

    return () => ctx.revert();
  }, [direction, delay, duration]);

  return (
    <div ref={elRef} style={{ width: fullWidth ? '100%' : 'auto' }}>
      {children}
    </div>
  );
};

export default FadeIn;