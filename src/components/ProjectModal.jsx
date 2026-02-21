import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lightbox, setLightbox] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  if (!project) return null;

  const projectImages = Array.isArray(project.images) ? project.images : [];
  const titleFont = project.category === 'Infographie' ? 'font-rumei' : 'font-title';

  const nextImage = (e) => {
    e?.stopPropagation();
    if (projectImages.length > 1) {
      setDirection(1);
      setCurrentIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    if (projectImages.length > 1) {
      setDirection(-1);
      setCurrentIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
    }
  };

  const goToIndex = (i) => {
    setDirection(i > currentIndex ? 1 : -1);
    setCurrentIndex(i);
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      delta > 0 ? nextImage() : prevImage();
    }
    touchStartX.current = null;
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />

      <motion.div
        className="relative w-full max-w-6xl max-h-[90vh] bg-[#0d0d0d] border border-white/10 rounded-[40px] p-6 md:p-10 overflow-y-auto shadow-2xl"
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* BOUTON FERMER */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/40 hover:text-white z-[110] p-2 bg-white/5 rounded-full transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 text-left">

          {/* ZONE CAROUSEL */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Image area */}
            <div
              className="relative bg-[#161616] rounded-[30px] overflow-hidden border border-white/5 flex items-center justify-center select-none"
              style={{ height: 'min(60vh, 500px)' }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait" custom={direction}>
                {projectImages.length > 0 ? (
                  <motion.img
                    key={currentIndex}
                    src={projectImages[currentIndex]}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute inset-0 w-full h-full object-contain cursor-zoom-in"
                    alt={`${project.title} vue ${currentIndex + 1}`}
                    onClick={() => setLightbox(true)}
                  />
                ) : (
                  <div className="text-white/20 uppercase tracking-widest text-xs font-bold">
                    Aucun visuel disponible
                  </div>
                )}
              </AnimatePresence>

              {/* Arrows */}
              {projectImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 p-3 rounded-full bg-black/60 text-white z-50 hover:bg-white hover:text-black transition-all border border-white/10 backdrop-blur-sm"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 p-3 rounded-full bg-black/60 text-white z-50 hover:bg-white hover:text-black transition-all border border-white/10 backdrop-blur-sm"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>

                  {/* Counter top-right */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 text-white/60 text-xs font-mono z-50">
                    {currentIndex + 1} / {projectImages.length}
                  </div>
                </>
              )}
            </div>

            {/* Dots + Thumbnails */}
            {projectImages.length > 1 && (
              <div className="flex items-center justify-center gap-3">
                {projectImages.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => goToIndex(i)}
                    className={`relative overflow-hidden rounded-xl border transition-all duration-300 ${
                      i === currentIndex
                        ? 'w-16 h-10 border-white/40 opacity-100'
                        : 'w-10 h-10 border-white/10 opacity-40 hover:opacity-70'
                    }`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                    {i === currentIndex && (
                      <div className="absolute inset-0 border-2 border-white/60 rounded-xl pointer-events-none" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* SECTION INFOS */}
          <div className="lg:col-span-2 flex flex-col justify-center py-6">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight tracking-tight ${titleFont}`}>
              {project.title}
            </h2>

            <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-2xl inline-block w-fit">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-bold block mb-1">
                Expertise — Domaine
              </span>
              <span className="text-white text-xl font-medium">{project.category}</span>
            </div>

            <div className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
              <p className="mb-4">{project.longDesc}</p>
              {project.longDesc2 && (
                <p className="opacity-70 text-base border-l border-white/10 pl-4">{project.longDesc2}</p>
              )}
            </div>

            <div className="mt-auto pt-8 border-t border-white/10 flex flex-wrap items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.15em] text-gray-600 font-bold w-full mb-2">
                Stack Technique
              </span>
              {project.stack?.map((icon, i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white border border-white/10 text-2xl"
                >
                  {icon}
                </div>
              ))}
              <div className="h-12 px-6 ml-auto bg-white/5 rounded-2xl flex items-center justify-center text-white border border-white/10 text-sm font-bold tracking-widest uppercase">
                {project.year}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-black cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => { e.stopPropagation(); setLightbox(false); }}
          >
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-6 right-6 text-white/40 hover:text-white z-10 p-2 bg-white/5 rounded-full transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <motion.img
              src={projectImages[currentIndex]}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-[95vw] max-h-[95vh] object-contain"
              alt={`${project.title} plein écran`}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectModal;