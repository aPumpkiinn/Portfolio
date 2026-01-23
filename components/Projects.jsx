import React from 'react';

// Fichier de données des projets intégré (peut être déplacé plus tard)
const projectData = [
  {
    title: 'Plateforme E-Commerce Modèle',
    description: "Une solution complète d'e-commerce construite avec React, Redux pour la gestion d'état, et Stripe pour les paiements. Intégration d'une API RESTful.",
    techs: ['React', 'Redux', 'Stripe', 'Node/Express'],
    link: '#', // Lien vers le projet ou le dépôt GitHub
  },
  {
    title: 'Application de Gestion de Tâches',
    description: "Un outil de productivité simple avec authentification utilisateur, permettant de créer, modifier et suivre des tâches en temps réel (websockets).",
    techs: ['Vue.js', 'Firebase', 'WebSockets', 'SCSS'],
    link: '#',
  },
  // Ajoutez d'autres projets ici
];

const Projects = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ fontSize: '2.5em', textAlign: 'center', marginBottom: '40px', color: '#333' }}>
        Mes Derniers Projets
      </h2>
        
      {/* Configuration de la grille responsive */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* Mapping des données pour générer les cartes de projet */}
        {projectData.map((project, index) => (
          <div key={index} style={{ 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            padding: '20px', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s',
            cursor: 'pointer'
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <h3 style={{ color: '#007bff', marginBottom: '10px' }}>{project.title}</h3>
            <p style={{ color: '#555', marginBottom: '15px' }}>{project.description}</p>
            
            <div style={{ marginBottom: '15px' }}>
              {project.techs.map((tech, i) => (
                <span key={i} style={{ 
                  display: 'inline-block', 
                  padding: '5px 10px', 
                  borderRadius: '3px', 
                  fontSize: '0.8em',
                  marginRight: '5px',
                  // Ajout de style pour les badges
                  background: '#f0f0f0', 
                  color: '#444' 
                }}>
                  {tech}
                </span>
              ))}
            </div>
            
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
              Voir le Projet →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;