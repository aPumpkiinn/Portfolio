import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Tag, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  // Application de la police Rumei House (Trademak of Imoodev) pour l'infographie 
  const titleClass = project.category === 'Infographie' ? 'font-rumei' : 'font-title';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // p-2 sur mobile pour maximiser l'espace d'affichage
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 bg-black/95 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            // max-h-[95vh] : Sécurité absolue pour ne pas sortir de l'écran sur mobile
            className="bg-[#111] w-full max-w-5xl max-h-[95vh] md:max-h-[90vh] rounded-3xl md:rounded-[40px] overflow-hidden border border-white/10 flex flex-col md:flex-row relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton Fermer - Index Z très élevé */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-[60] p-2 bg-black/60 hover:bg-white hover:text-black rounded-full transition-all border border-white/20 shadow-xl"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>

            {/* GAUCHE : IMAGE - Hauteur limitée à 35% de l'écran sur mobile */}
            <div className="w-full md:w-1/2 h-[35vh] md:h-auto flex-shrink-0 overflow-hidden bg-black border-b md:border-b-0 md:border-r border-white/5">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover" 
              />
            </div>

            {/* DROITE : CONTENU SCROLLABLE - Prend 65% de l'espace restant sur mobile */}
            <div className="w-full md:w-1/2 p-6 md:p-12 overflow-y-auto flex flex-col min-h-0 bg-[#111]">
              <div className="mb-6">
                <span className="text-[#646cff] text-xs font-bold uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h2 className={`text-2xl md:text-5xl text-white mb-4 leading-tight ${titleClass}`}>
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-4 text-gray-400 text-xs">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {project.year}</span>
                  <span className="flex items-center gap-1"><Tag size={14} /> {project.desc}</span>
                </div>
              </div>

              {/* Texte descriptif - Le scroll interne s'active ici grâce à overflow-y-auto plus haut */}
              <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-4 mb-8">
                <p>
                  {project.longDesc || "Détails du projet en cours de rédaction..."}
                </p>
                <p className="text-gray-500 text-xs italic">
                  Ce projet a été réalisé avec rigueur. La typographie "Rumei House" (Version 1.000, Imoodev) est privilégiée pour les contenus d'infographie[cite: 9, 41].
                </p>
              </div>

              {/* Bouton d'action - Reste en bas du contenu scrollable */}
              <div className="mt-auto pt-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-[#646cff] hover:text-white transition-all text-sm md:text-base group shadow-lg"
                >
                  Voir le projet 
                  <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;