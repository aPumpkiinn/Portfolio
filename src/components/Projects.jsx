import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectModal from '../components/ProjectModal';
import { ALL_PROJECTS } from '../data/projects.data.jsx';  // ✅ import centralisé

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="min-h-screen bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-6xl md:text-8xl font-title text-center mb-24 uppercase tracking-tighter">
          Mes Créations
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {ALL_PROJECTS.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-[#0d0d0d] border border-white/10 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/20"
            >
              <div className="h-72 overflow-hidden bg-[#161616]">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="p-10">
                <span className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-3 block">{project.category}</span>
                <h3 className="text-white text-4xl font-medium mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-8">{project.description}</p>
                <button className="text-white font-bold border-b border-white/20 pb-1 group-hover:border-white transition-all">
                  Voir le projet →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;