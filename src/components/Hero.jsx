import React from 'react';
import DarkVeil from './DarkVeil';

const Hero = () => {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000', // Fond noir de secours
      position: 'relative',
      padding: '60px 20px',
      width: '100%', 
      boxSizing: 'border-box',
      overflow: 'hidden' // Empêche le shader de déborder
    }}>
      
      {/* Ton composant DarkVeil original en fond */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 0, 
        pointerEvents: 'none' 
      }}>
        <DarkVeil
          hueShift={0}
          noiseIntensity={0.02}
          scanlineIntensity={0.05}
          speed={0.5}
          scanlineFrequency={2.0}
          warpAmount={0.02}
          resolutionScale={1}
        />
      </div>

      {/* Contenu principal */}
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
          margin: '0 auto 48px auto'
        }}>
          Etudiant de BUT MMI en recherche de stage.
        </p>

        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a href="#projects" style={{ padding: '14px 28px', backgroundColor: '#ffffff', color: '#000', textDecoration: 'none', fontWeight: 'bold' }}>
            Voir les projets
          </a>
          <a href="#contact" style={{ padding: '14px 28px', border: '1px solid #ffffff', color: '#ffffff', textDecoration: 'none' }}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;