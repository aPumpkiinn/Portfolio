import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  // Police Rumei House (Trademark of Imoodev) pour l'infographie
  const titleFont = project.category === 'Infographie' ? 'font-rumei' : 'font-title';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

          <motion.div
            className="relative w-full max-w-6xl max-h-[90vh] bg-[#0d0d0d] border border-white/10 rounded-3xl sm:rounded-[45px] p-4 sm:p-6 md:p-10 overflow-y-auto shadow-2xl"
            initial={{ scale: 0.95, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 40, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton Fermer */}
            <button onClick={onClose} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/30 hover:text-white transition-colors z-50 p-2">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12">
              
              {/* IMAGE */}
              <div className="lg:col-span-3 relative w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[#161616] rounded-2xl sm:rounded-[35px] overflow-hidden border border-white/5">
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover select-none" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* TEXTE */}
              <div className="lg:col-span-2 flex flex-col py-2 sm:py-4 lg:py-6">
                <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight ${titleFont}`}>
                  {project.title}
                </h2>

                <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl inline-block w-fit">
                   <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-gray-500 font-bold block mb-1">Expertise — Domaine</span>
                   <span className="text-white text-lg sm:text-xl font-medium">{project.category}</span>
                </div>

                <div className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 lg:mb-10 flex-grow">
                  <p className="mb-4 sm:mb-6">{project.longDesc}</p>
                  {project.longDesc2 && (
                    <p className="hidden sm:block opacity-80">{project.longDesc2}</p>
                  )}
                </div>

                {/* STACK TECHNIQUE */}
                <div className="mt-auto pt-4 sm:pt-6 flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-600 font-bold w-full mb-1 sm:mb-2">Logiciels utilisés</span>
                  {project.stack?.map((icon, i) => (
                    <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-xl sm:rounded-2xl flex items-center justify-center text-white border border-white/10">
                      <span className="text-lg sm:text-xl">{icon}</span>
                    </div>
                  ))}
                  <div className="h-10 sm:h-12 px-4 sm:px-6 ml-auto bg-white/5 rounded-xl sm:rounded-2xl flex items-center justify-center text-white border border-white/10 text-xs sm:text-sm font-bold tracking-widest uppercase">
                    {project.year}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;