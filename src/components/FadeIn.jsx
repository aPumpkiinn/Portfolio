import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const FadeIn = ({ children, delay = 0, direction = "up" }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(elementRef.current, {
        opacity: 0,
        y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
        duration: 0.6,
        delay,
        ease: "power2.out",
        force3D: true, // Force l'accélération GPU
      });
    }, elementRef);
    return () => ctx.revert();
  }, [delay, direction]);

  return (
    <div ref={elementRef} style={{ willChange: "transform, opacity" }}>
      {children}
    </div>
  );
};
export default FadeIn;