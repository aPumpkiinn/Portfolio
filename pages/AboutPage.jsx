import React from 'react';
import Header from '../components/Header';
import About from '../components/About'; 

// 1. On récupère la prop onOpenContact
const AboutPage = ({ onOpenContact }) => {
  return (
    <div className="bg-[#060010] min-h-screen">
      {/* (Le Header est géré dans App.jsx maintenant, donc on peut l'enlever d'ici
          si vous l'avez déjà retiré, sinon gardez-le) */}
      
      {/* 2. On la transmet au composant About */}
      <About onOpenContact={onOpenContact} />
    </div>
  );
};

export default AboutPage;