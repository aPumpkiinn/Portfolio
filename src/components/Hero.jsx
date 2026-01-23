// src/components/Hero.jsx

import React from 'react';

const Hero = () => {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
      // ✅ Fond transparent pour hériter de la section parente
      backgroundColor: 'transparent', 
      
      position: 'relative',
      padding: '60px 20px',
      width: '100%', 
      boxSizing: 'border-box'
    }}>
      
      {/* Contenu principal centré */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        width: '100%',
        padding: '0 24px',
        textAlign: 'center'
      }}>
          
        <p style={{
          color: '#ffffff',
          fontSize: '0.875rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom: '32px',
        }}>
          Portfolio
        </p>

        <h1 style={{
          fontSize: 'clamp(3rem, 12vw, 9rem)',
          fontWeight: '300',
          color: '#ffffff',
          marginBottom: '24px',
          lineHeight: '1',
          letterSpacing: '-0.02em'
        }}>
          ANGUILE-DIOP
          <br />
          <span style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>
            Kevin
          </span>
        </h1>

        <p style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
          color: '#ffffff',
          maxWidth: '700px',
          fontWeight: '300',
          lineHeight: '1.6',
          marginBottom: '48px',
          margin: '0 auto 48px auto' // Centrer le paragraphe
        }}>
          Etudiant de BUT MMI en recherche de stage.
        </p>

        {/* CTA */}
        <div style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'center', // Centrer les boutons
          flexWrap: 'wrap'
        }}>
          <a 
            href="#projects"
            style={{
              padding: '14px 28px',
              backgroundColor: '#000000',
              color: '#fafafa',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'inline-block',
              cursor: 'pointer',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              textAlign: 'center',
              minWidth: '150px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#404040'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#000000'}
          >
            Voir les projets
          </a>
          
          <a
            href="#contact"
            style={{
              padding: '14px 28px',
              border: '1px solid #ffffff',
              color: '#ffffff',
              backgroundColor: 'transparent',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'inline-block',
              cursor: 'pointer',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              textAlign: 'center',
              minWidth: '150px'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#14001d';
              e.target.style.color = '#fafafa';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ffffff';
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;