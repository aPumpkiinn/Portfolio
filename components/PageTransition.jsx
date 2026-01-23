import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const PageTransition = ({ onComplete }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const barRef = useRef(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        // Une fois l'animation finie, on dit à App.jsx de supprimer ce composant
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      const counterObj = { value: 0 };
      
      // 1. Animation simultanée (Compteur + Barre)
      tl.to(counterObj, {
        value: 100,
        duration: 0.8,
        ease: "power2.out",
        onUpdate: () => setCounter(Math.floor(counterObj.value))
      }, 0);

      tl.to(barRef.current, {
        width: "100%", // La barre se remplit
        duration: 0.8,
        ease: "power2.out"
      }, 0);

      // 2. Le contenu disparaît
      tl.to(contentRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.in",
        delay: 0.2
      });

      // 3. Le rideau noir remonte
      tl.to(containerRef.current, {
        height: 0,
        duration: 0.8,
        ease: "expo.inOut"
      });

    }, containerRef);
    
    
    
    return () => ctx.revert();
  }, [onComplete]);

  
    

  return (
    <div 
      ref={containerRef} 
      // CHANGEMENT ICI : z-[100000] pour être sûr qu'il est AU-DESSUS du Header
      className="fixed inset-0 z-[100000] bg-[#060010] flex items-center justify-center overflow-hidden px-6"
      style={{ width: '100%', height: '100vh' }}
    
      ref={containerRef} 
      className="fixed inset-0 z-[9999] bg-[#060010] flex items-center justify-center overflow-hidden px-6"
      style={{ width: '100%', height: '100vh' }}
    >
      {/* Conteneur Flex : Barre à gauche, Texte à droite */}
      <div ref={contentRef} className="flex items-center w-full max-w-md gap-4">
        
        {/* La Barre */}
        <div className="flex-grow h-[3px] bg-gray-800 rounded-full overflow-hidden">
            <div 
                ref={barRef} 
                className="h-full bg-white" // Mettez bg-[#8400ff] si vous voulez du violet
                style={{ width: '0%' }} 
            />
        </div>

        {/* Le Pourcentage */}
        <div className="text-white text-xl font-bold font-sans min-w-[3ch] text-right">
          {counter}%
        </div>

      </div>
    </div>
  );
};

export default PageTransition;