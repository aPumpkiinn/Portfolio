import React from 'react';

const Contact = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5em', marginBottom: '20px', color: '#333' }}>
        Me Contacter 📬
      </h2>
      <p style={{ color: '#555', marginBottom: '30px' }}>
        Que ce soit pour une opportunité d'emploi, une collaboration ou simplement pour dire bonjour, n'hésitez pas à me contacter !
      </p>

      {/* Remplacer par un vrai formulaire si vous utilisez une solution backend (comme Formspree) */}
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="text" 
          placeholder="Votre Nom" 
          style={inputStyle}
          required 
        />
        <input 
          type="email" 
          placeholder="Votre Email" 
          style={inputStyle}
          required 
        />
        <textarea 
          placeholder="Votre Message..." 
          rows="5" 
          style={inputStyle}
          required 
        />
        <button 
          type="submit" 
          style={submitButtonStyle}
          onMouseOver={e => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={e => e.target.style.backgroundColor = '#007bff'}
        >
          Envoyer le Message
        </button>
      </form>
      
      <div style={{ marginTop: '40px', fontSize: '1.1em' }}>
        <p>Email direct : **[votre.email@exemple.com]**</p>
        <p>LinkedIn : <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>**[Votre Profil LinkedIn]**</a></p>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: '12px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '1em',
};

const submitButtonStyle = {
  padding: '15px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1.1em',
  transition: 'background-color 0.3s',
};

export default Contact;