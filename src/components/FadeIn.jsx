import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const FadeIn = ({ children, delay = 0, direction = "up" }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    // Utilisation de gsap.context pour libérer la mémoire (Thread Principal)
    const ctx = gsap.context(() => {
      gsap.from(elementRef.current, {
        opacity: 0,
        y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
        duration: 0.8,
        delay: delay,
        ease: "power2.out",
        force3D: true, // Accélération GPU
        clearProps: "all" // Nettoyage après l'anim
      });
    });

    return () => ctx.revert(); // Indispensable pour éviter les 34s de surcharge
  }, [delay, direction]);

  return (
    <div ref={elementRef} style={{ willChange: "transform, opacity" }}>
      {children}
    </div>
  );
};

export default FadeIn;