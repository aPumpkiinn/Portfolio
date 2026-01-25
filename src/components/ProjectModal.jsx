// src/components/ProjectModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiReact, SiTailwindcss, SiFigma } from 'react-icons/si'; 

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const handleContentClick = (e) => e.stopPropagation();

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

        <motion.div
          className="relative w-full max-w-6xl min-h-[80vh] bg-[#0d0d0d] border border-white/10 rounded-[45px] p-6 md:p-10 overflow-hidden shadow-2xl flex flex-col"
          initial={{ scale: 0.95, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 40, opacity: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          onClick={handleContentClick}
        >
          {/* Bouton Fermer */}
          <button
            onClick={onClose}
            className="absolute top-8 right-10 text-white/30 hover:text-white transition-colors z-50 p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 h-full flex-grow items-stretch">
            
            {/* GAUCHE : L'IMAGE */}
            <div className="md:col-span-3 relative w-full h-[350px] md:h-full bg-[#161616] rounded-[35px] overflow-hidden border border-white/5">
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover select-none"
                 draggable="false"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* DROITE : LE TEXTE */}
            <div className="md:col-span-2 flex flex-col h-full py-6 pr-2">
              
              {/* 1. TITRE */}
              <h2 className="text-4xl md:text-6xl font-title italic text-white mb-6 leading-[1.1] tracking-tight">
                {project.title}
              </h2>

              {/* 2. EXPERTISE / DOMAINE */}
              <div className="mb-8 p-4 bg-white/5 border border-white/10 rounded-2xl inline-block w-fit">
                 <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold block mb-1">Expertise — Domaine</span>
                 <span className="text-white text-xl font-medium">{project.category}</span>
              </div>

              {/* 3. DESCRIPTION DU PROJET */}
              <div className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 overflow-y-auto pr-4 scrollbar-hide flex-grow">
                <p className="mb-6">
                  {/* On affiche le champ 'longDesc' s'il existe, sinon on affiche une description par défaut */}
                  {project.longDesc || "Ce projet a été conçu avec une attention particulière portée à l'expérience utilisateur et à l'esthétique visuelle. L'objectif était de créer une interface fluide et immersive qui répond aux besoins spécifiques du secteur tout en intégrant des technologies modernes."}
                </p>
                <p>
                  Chaque détail a été peaufiné pour garantir une performance optimale et une identité graphique forte qui se démarque dans le paysage numérique actuel.
                </p>
              </div>

              {/* 4. TAGS / STACK TECHNIQUE */}
              <div className="mt-auto pt-6 flex flex-wrap items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold w-full mb-2">Technologies utilisées</span>
                {[<SiReact />, <SiTailwindcss />, <SiFigma />].map((icon, i) => (
                  <div key={i} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-xl">{icon}</span>
                  </div>
                ))}
                <div className="h-12 px-6 ml-auto bg-white/5 rounded-2xl flex items-center justify-center text-white border border-white/10 text-sm font-bold tracking-widest uppercase">
                  2026
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;