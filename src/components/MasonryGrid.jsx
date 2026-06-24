import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MasonryGrid = ({ items = [], onOpenProject }) => {
  const [hoveredId, setHoveredId] = useState(null);

  const getProjectFont = (category) => {
    if (category === 'Infographie') return 'font-rumei italic tracking-wide normal-case';
    if (category === 'Design UI') return 'font-sans italic tracking-normal normal-case';
    if (category === 'Web') return 'font-octuple';
    return 'font-title';
  };

  const renderCard = (project, index) => (
    <motion.div
      layout
      key={project.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: (index % 10) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative group w-full"
      onMouseEnter={() => setHoveredId(project.id)}
      onMouseLeave={() => setHoveredId(null)}
      onClick={() => onOpenProject(project)}
    >
      {/* Le fond de contour vert citron fluide */}
      <AnimatePresence>
        {hoveredId === project.id && (
          <motion.div
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="absolute -inset-4 md:-inset-6 bg-[#00c8ff] rounded-[2.5rem] sm:rounded-[3rem] z-0"
          />
        )}
      </AnimatePresence>

      {/* La carte elle-même */}
      <motion.div
        whileHover={{ scale: 1.02, transition: { delay: 0, duration: 0.3 } }}
        className="relative z-10 w-full h-[350px] md:h-[450px] cursor-pointer overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border-[3px] border-black bg-[#161616] shadow-[6px_6px_0_rgba(0,0,0,1)]"
      >
        {/* Média en cover */}
        <div className="absolute inset-0 w-full h-full">
          {(() => {
            const mediaSrc = project.images?.[0] || project.image;
            if (mediaSrc && mediaSrc.endsWith('.mp4')) {
              return (
                <video 
                  src={mediaSrc}
                  className="w-full h-full object-contain object-center transition-all duration-700 group-hover:brightness-75"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              );
            }
            return (
              <img 
                src={mediaSrc} 
                alt={project.title} 
                className="w-full h-full object-contain object-center transition-all duration-700 group-hover:brightness-75"
                loading="lazy"
              />
            );
          })()}
        </div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-500 flex flex-col justify-end p-6 md:p-8 pointer-events-none group-hover:from-black group-hover:via-black/60">
          <div className="flex flex-col items-start transition-transform duration-500 ease-out transform group-hover:-translate-y-2">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white font-bold block mb-2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
              {project.category}
            </span>
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white leading-tight drop-shadow-md ${getProjectFont(project.category)}`}>
              {project.title}
            </h3>
            
            {/* Reveal on hover */}
            <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out w-full">
              <div className="overflow-hidden">
                <p className="text-gray-300 text-xs md:text-sm mb-6 line-clamp-2 opacity-90 mt-2">
                  {project.description || project.desc}
                </p>
                <div className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-black rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  Découvrir
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 md:py-8">
      <AnimatePresence mode="popLayout">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {items.map((p, i) => renderCard(p, i))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default MasonryGrid;
