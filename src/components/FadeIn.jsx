import React, { useState, useEffect, useRef } from 'react';

const FadeIn = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  fullWidth = false, 
  padding = false,
  duration = 0.8 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentElement = domRef.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // CHANGEMENT ICI : entry.isIntersecting suffit, même si c'est à peine visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentElement);
        }
      });
    }, {
      // CORRECTION MAJEURE :
      // threshold: 0 -> Déclenche dès le tout premier pixel visible
      // rootMargin: '0px' -> On enlève la marge négative qui bloquait le bas de page
      threshold: 0, 
      rootMargin: '0px' 
    });

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translateY(20px)'; // J'ai réduit un peu la distance pour que ce soit plus vif
        case 'down': return 'translateY(-20px)';
        case 'left': return 'translateX(20px)';
        case 'right': return 'translateX(-20px)';
        default: return 'none';
      }
    }
    return 'translate(0)';
  };

  return (
    <div
      ref={domRef}
      className={`${fullWidth ? 'w-full' : ''} ${padding ? 'p-4' : ''}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;