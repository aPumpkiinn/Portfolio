import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const SkewedCarousel = ({ items = [], onOpenProject }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [displayItems, setDisplayItems] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  
  const xPos = useRef(0);
  const lastX = useRef(0);
  const dragVelocity = useRef(0);
  const isHovering = useRef(false);
  
  const baseSpeed = 0.5; 
  const currentSpeed = useRef(baseSpeed); 
  const friction = 0.05;

  const getProjectFont = (category) => {
    if (category === 'Infographie' || category === 'Design UI') return 'font-rumei';
    if (category === 'Web') return 'font-octuple';
    return '';
  };

  useEffect(() => {
    if (items.length === 0) return;
    xPos.current = 0; 
    const needed = items.length < 4 ? 6 : 3; 
    const duplicated = Array(needed).fill(items).flat();
    setDisplayItems(duplicated);
    gsap.fromTo(trackRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
  }, [items]);

  useEffect(() => {
    if (displayItems.length === 0 || !trackRef.current) return;
    
    const update = () => {
      const totalWidth = trackRef.current.scrollWidth;
      const singleSetWidth = totalWidth / (items.length < 4 ? 6 : 3);
      
      if (!isDragging) {
         const targetSpeed = isHovering.current ? 0 : baseSpeed;
         currentSpeed.current = gsap.utils.interpolate(currentSpeed.current, targetSpeed, friction);
         xPos.current += currentSpeed.current;
      }

      const wrappedX = gsap.utils.wrap(0, singleSetWidth, xPos.current);
      gsap.set(trackRef.current, { x: -wrappedX });
    };

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, [displayItems, isDragging, items]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    lastX.current = clientX;
    currentSpeed.current = 0;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const delta = clientX - lastX.current;
    lastX.current = clientX;
    xPos.current -= delta * 1.2; 
    dragVelocity.current = delta;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    currentSpeed.current = -dragVelocity.current * 1.2;
  };

  return (
    <div className="w-full py-12 overflow-hidden relative cursor-grab active:cursor-grabbing">
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}
        onMouseEnter={() => isHovering.current = true}
        onMouseLeave={() => { isHovering.current = false; setIsDragging(false); }} 
        onTouchStart={handleMouseDown} onTouchMove={handleMouseMove} onTouchEnd={handleMouseUp}
        onWheel={(e) => { xPos.current -= e.deltaY * 0.5; currentSpeed.current = -e.deltaY * 0.1; }}
        className="w-full h-full"
      >
        <div ref={trackRef} className="flex space-x-8 px-4 w-max select-none" style={{ willChange: 'transform' }}>
          {displayItems.map((project, index) => (
            <div key={`${project.id}-${index}`} className="flex-shrink-0 group relative pointer-events-none"> 
              <div className="relative w-[280px] h-[400px] md:w-[350px] md:h-[500px] overflow-hidden border border-white/20 rounded-2xl transform -skew-x-12 transition-all duration-500 bg-black mx-4 pointer-events-auto">
                
                {/* Image avec blending Mask radial sur TOUTES les images */}
                <div className="w-full h-full transform skew-x-12 scale-150 origin-center transition-transform duration-700 group-hover:scale-125">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center opacity-70" 
                    style={{
                      maskImage: 'radial-gradient(circle, black 45%, transparent 100%)',
                      WebkitMaskImage: 'radial-gradient(circle, black 45%, transparent 100%)'
                    }}
                    draggable="false" 
                  />
                </div>
                
                {/* Overlay Textuel */}
                <div className="absolute inset-0 bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 transform skew-x-12 scale-150 flex flex-col items-center justify-center p-6 text-center z-10">
                    <h3 className={`text-2xl font-bold mb-2 text-white ${getProjectFont(project.category)}`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 text-sm italic">{project.desc}</p>
                    <button 
                        onClick={(e) => { e.stopPropagation(); onOpenProject(project); }}
                        className="px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all cursor-pointer text-xs font-bold uppercase tracking-widest"
                    >
                        Détails
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