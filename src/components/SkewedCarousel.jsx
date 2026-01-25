import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

// 👇 AJOUT DE LA PROP onOpenProject
const SkewedCarousel = ({ items = [], onOpenProject }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  
  // États
  const [displayItems, setDisplayItems] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  
  // REFS PHYSIQUES
  const xPos = useRef(0);
  const lastX = useRef(0);
  const startX = useRef(0);
  const dragVelocity = useRef(0);
  const isHovering = useRef(false);
  
  // CONFIGURATION
  const baseSpeed = 0.5; 
  const currentSpeed = useRef(baseSpeed); 
  const friction = 0.05;

  // Duplication des items
  useEffect(() => {
    if (items.length === 0) return;
    const needed = items.length < 4 ? 6 : 3; 
    const duplicated = Array(needed).fill(items).flat();
    setDisplayItems(duplicated);
  }, [items]);

  // BOUCLE D'ANIMATION
  useEffect(() => {
    if (displayItems.length === 0 || !trackRef.current) return;
    const track = trackRef.current;
    
    const update = () => {
      const totalWidth = track.scrollWidth;
      const singleSetWidth = totalWidth / (items.length < 4 ? 6 : 3);
      
      if (!isDragging) {
         const targetSpeed = isHovering.current ? 0 : baseSpeed;
         currentSpeed.current = gsap.utils.interpolate(currentSpeed.current, targetSpeed, friction);
         xPos.current += currentSpeed.current;
      }

      const wrappedX = gsap.utils.wrap(0, singleSetWidth, xPos.current);
      gsap.set(track, { x: -wrappedX });
    };

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, [displayItems, isDragging, items]);

  // GESTION DU DRAG (inchangée)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX || e.touches[0].clientX;
    lastX.current = startX.current;
    currentSpeed.current = 0;
    dragVelocity.current = 0;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    if (clientX === undefined) return;
    const delta = clientX - lastX.current;
    lastX.current = clientX;
    dragVelocity.current = delta;
    xPos.current -= delta * 1.5; 
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    currentSpeed.current = -dragVelocity.current * 1.5;
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
    if (isDragging) {
        setIsDragging(false);
        currentSpeed.current = 0; 
    }
  };

  const handleMouseEnter = () => {
    isHovering.current = true;
  };

  const handleWheel = (e) => {
    xPos.current -= e.deltaY * 0.5;
    currentSpeed.current = -e.deltaY * 0.1;
  };

  return (
    <div className="w-full py-12 overflow-hidden relative cursor-grab active:cursor-grabbing">
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} 
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        onWheel={handleWheel}
        className="w-full h-full"
      >
        <div 
          ref={trackRef}
          className="flex space-x-8 px-4 w-max select-none"
          style={{ willChange: 'transform' }}
        >
          {displayItems.map((project, index) => (
            <div key={index} className="flex-shrink-0 group relative pointer-events-none"> 
              <div className="relative w-[280px] h-[400px] md:w-[350px] md:h-[500px] overflow-hidden border border-white/30 rounded-2xl transform -skew-x-12 transition-all duration-500 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] bg-gray-900 mx-4 pointer-events-auto">
                <div className="w-full h-full transform skew-x-12 scale-125 origin-center transition-transform duration-700 group-hover:scale-150">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    draggable="false"
                  />
                </div>
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform skew-x-12 scale-125 flex flex-col items-center justify-center p-4 text-center z-10">
                    <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.desc}</p>
                    
                    {/* 👇 CHANGEMENT ICI : C'est un bouton qui appelle la fonction du parent */}
                    <button 
                        onClick={() => onOpenProject && onOpenProject(project)}
                        className="px-4 py-2 border border-white rounded-full text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                    >
                        Voir le projet
                    </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkewedCarousel;