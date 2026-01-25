import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const projectData = [
    {
        title: 'Identité Visuelle - Café Artisanal',
        description: "Création d'une identité de marque complète pour une nouvelle chaîne de cafés haut de gamme : logo, charte graphique, et déclinaisons print/web.",
        techs: ['Illustrator', 'Photoshop', 'Branding', 'Print'],
        link: '#', // Lien vers le Behance ou Dribbble du projet
        color: '#A855F7', 
    },
    {
        title: 'Refonte Site Web - Agence de Voyage',
        description: "Conception de l'interface utilisateur (UI/UX) pour la refonte complète d'un site d'agence de voyage, avec prototypage haute fidélité.",
        techs: ['Figma', 'UX/UI', 'Prototypage', 'Design System'],
        link: '#',
        color: '#EC4899',
    },
    {
        title: 'Série d\'Affiches - Festival de Musique',
        description: "Conception et production de la série d'affiches promotionnelles pour un festival de musique électronique, incluant l'adaptation pour les réseaux sociaux.",
        techs: ['InDesign', 'Typographie', 'Composition', 'Campagne Pub'],
        link: '#',
        color: '#10B981',
    },
    {
        title: 'Packaging Éco-responsable - Cosmétiques',
        description: "Design du packaging d'une gamme de produits cosmétiques naturels, en mettant l'accent sur les matériaux durables et l'esthétique minimaliste.",
        techs: ['Rendu 3D', 'Maquette', 'Éco-design', 'Impression'],
        link: '<img src="https://picsum.photos/800/600" alt="Photo aléatoire" />',
        color: '#F59E0B', 
    }
];

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projectData.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projectData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projectData.length) % projectData.length);
  };

  const getCardStyle = (index) => {
    const diff = (index - currentIndex + projectData.length) % projectData.length;
    const totalCards = projectData.length;
    const isHoveredThis = hoveredCard === index;
    
    if (diff === 0) {
      return {
        transform: isHoveredThis 
          ? 'translateX(0) translateZ(50px) rotateY(0deg) scale(1.05)' 
          : 'translateX(0) translateZ(0) rotateY(0deg) scale(1)',
        opacity: 1,
        zIndex: 10,
        boxShadow: isHoveredThis 
          ? '0 30px 80px rgba(0,0,0,0.5)' 
          : '0 20px 60px rgba(0,0,0,0.3)'
      };
    } else if (diff === 1 || diff === -(totalCards - 1)) {
      return {
        transform: 'translateX(60%) translateZ(-200px) rotateY(-25deg) scale(0.8)',
        opacity: 0.7,
        zIndex: 5,
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
      };
    } else if (diff === totalCards - 1 || diff === -1) {
      return {
        transform: 'translateX(-60%) translateZ(-200px) rotateY(25deg) scale(0.8)',
        opacity: 0.7,
        zIndex: 5,
        filter: 'brightness(0.7) blur(0px)',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
      };
    } else {
      return {
        transform: 'translateX(0) translateZ(-400px) scale(0.6)',
        opacity: 0,
        zIndex: 1,
        filter: 'brightness(0.5) blur(0px)',
        boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
      };
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0a0a0a',
      padding: '60px 20px',
      fontFamily: '"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600;700&display=swap');
          
          @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(30px, -30px) rotate(120deg); }
            66% { transform: translate(-20px, 20px) rotate(240deg); }
          }
          
          @keyframes float2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(-40px, 40px) rotate(-120deg); }
            66% { transform: translate(30px, -20px) rotate(-240deg); }
          }
          
          .floating-shape {
            position: absolute;
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            opacity: 0.03;
            filter: blur(60px);
          }
        `}
      </style>
      
      <div className="floating-shape" style={{
        width: '400px',
        height: '400px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        top: '10%',
        left: '10%',
        animation: 'float 20s ease-in-out infinite'
      }}></div>
      
      <div className="floating-shape" style={{
        width: '500px',
        height: '500px',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        bottom: '10%',
        right: '10%',
        animation: 'float2 25s ease-in-out infinite'
      }}></div>

      <h2 style={{ 
        fontSize: '3em', 
        textAlign: 'center', 
        marginBottom: '60px', 
        color: 'white',
        fontWeight: '700',
        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
        position: 'relative',
        zIndex: 1
      }}>
        Mes Derniers Projets
      </h2>

      <div 
        style={{ 
          position: 'relative',
          height: '500px',
          perspective: '1500px',
          overflow: 'visible'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d'
        }}>
          {projectData.map((project, index) => {
            const style = getCardStyle(index);
            return (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: '450px',
                  maxWidth: '90vw',
                  marginLeft: '-225px',
                  marginTop: '-285px',
                  height: '570px',
                  transformStyle: 'preserve-3d',
                  pointerEvents: 'none'
                }}
              >
                {hoveredCard === index && (
                  <div style={{
                    position: 'absolute',
                    inset: '-80px',
                    background: `radial-gradient(circle at center, ${project.color}50 0%, transparent 70%)`,
                    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    pointerEvents: 'none',
                    filter: 'blur(60px)',
                    zIndex: -1,
                    opacity: 1
                  }}></div>
                )}
                
                <div
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: style.transform,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                    filter: style.filter,
                    boxShadow: style.boxShadow,
                    pointerEvents: style.zIndex === 10 ? 'auto' : 'none'
                  }}
                >
                  <div style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative'
                  }}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '33.33%',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 50%, transparent 100%)',
                      padding: '20px 30px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end'
                    }}>
                      <h3 style={{ 
                        color: 'white', 
                        marginBottom: '6px',
                        fontSize: '1.3em',
                        fontWeight: '700',
                        textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                        lineHeight: '1.2'
                      }}>
                        {project.title}
                      </h3>

                      <p style={{
                        color: '#e0e0e0',
                        fontSize: '0.8em',
                        marginBottom: '10px',
                        lineHeight: '1.4',
                        textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                      }}>
                        {project.description}
                      </p>

                      <div style={{ marginBottom: '10px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {project.techs.map((tech, i) => (
                          <span 
                            key={i} 
                            style={{ 
                              padding: '4px 10px', 
                              borderRadius: '15px', 
                              fontSize: '0.7em',
                              background: `${project.color}30`,
                              color: 'white',
                              fontWeight: '600',
                              border: `1px solid ${project.color}60`,
                              textShadow: '0 1px 4px rgba(0,0,0,0.6)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ 
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: 'white',
                          background: project.color,
                          padding: '8px 18px',
                          borderRadius: '10px',
                          textDecoration: 'none', 
                          fontWeight: '600',
                          transition: 'all 0.3s ease',
                          fontSize: '0.85em',
                          alignSelf: 'flex-start',
                          textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                        }}
                        onMouseOver={e => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.4)';
                        }}
                        onMouseOut={e => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
                        }}
                      >
                        Voir le Projet
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            zIndex: 100,
            transition: 'all 0.3s'
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
          }}
        >
          <ChevronLeft size={24} color="white" />
        </button>

        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            zIndex: 100,
            transition: 'all 0.3s'
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
          }}
        >
          <ChevronRight size={24} color="white" />
        </button>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        marginTop: '60px'
      }}>
        {projectData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: index === currentIndex ? '40px' : '12px',
              height: '12px',
              borderRadius: '6px',
              border: 'none',
              background: index === currentIndex ? 'white' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCarousel;