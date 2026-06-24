import React from 'react';
import PageTransition from '../components/PageTransition';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MentionsLegales = () => {
  return (
    <PageTransition>
      <title>Mentions Légales — Kevin Anguile Diop</title>
      <main className="min-h-screen bg-black text-black pt-28 pb-12 px-4 md:px-8 flex flex-col font-sans">
        
        {/* CADRE BLANC BRUTALISTE */}
        <div className="relative z-10 w-full flex-grow bg-white border-[4px] md:border-[8px] border-black rounded-[32px] md:rounded-[45px] overflow-hidden flex flex-col pt-16 md:pt-24 px-6 md:px-12 xl:px-20 text-black">
          
          <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col pb-20 flex-grow">
            
            {/* Bouton Retour */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-black hover:text-[#00c8ff] transition-colors mb-12 uppercase text-xs font-bold tracking-widest"
            >
              <FiArrowLeft /> Retour au portfolio
            </Link>

            {/* En-tête (Header) */}
            <header className="mb-16 border-b-[4px] border-black pb-8">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-octuple text-black uppercase tracking-tighter mb-4">
                Mentions Légales
              </h1>
              <p className="text-sm text-black/60 uppercase tracking-widest font-bold">Dernière mise à jour : Janvier 2026</p>
            </header>

            {/* Corps du texte (Content) */}
            <div className="space-y-12 leading-relaxed text-black/80 font-medium">
              
              <section>
                <h2 className="text-2xl font-bold text-black mb-4 uppercase tracking-wider">1. Présentation du site</h2>
                <p>
                  En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, 
                  il est précisé aux utilisateurs du site l'identité des différents intervenants :
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  <li><strong className="text-black">Propriétaire & Créateur :</strong> Kevin Anguile Diop</li>
                  <li><strong className="text-black">Responsable publication :</strong> Kevin Anguile Diop – Kevinanguilediop@gmail.com</li>
                  <li><strong className="text-black">Hébergeur :</strong> Vercel Inc. – 650 California St, San Francisco, CA 94108</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4 uppercase tracking-wider">2. Propriété intellectuelle</h2>
                <p>
                  Kevin Anguile Diop est propriétaire des droits de propriété intellectuelle sur tous les éléments accessibles sur le site.
                </p>
                <div className="mt-6 p-6 bg-black/5 rounded-2xl border-[3px] border-black">
                  <h3 className="text-[#00c8ff] font-bold mb-3 uppercase text-xs tracking-widest drop-shadow-[1px_1px_0_rgba(0,0,0,1)]">Typographies & Crédits :</h3>
                  <ul className="text-sm space-y-4">
                    <li>
                      <span className="font-sans font-bold text-lg text-black block mb-1">DM Sans :</span> 
                      Colophon Foundry, Jonny Pinhorn, Indian Type Foundry. Sous licence SIL Open Font License (OFL).
                    </li>
                    <li>
                      <span className="font-rumei text-lg text-black block mb-1">Rumei House Regular :</span> 
                      Marque déposée d'Imoodev.
                    </li>
                    <li>
                      <span className="font-octuple text-lg text-black block mb-1">Octuple Max Solid :</span> 
                      Création de Fernando Haro (deFharo).
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4 uppercase tracking-wider">3. Protection des données</h2>
                <p>
                  Les informations recueillies via le formulaire de contact sont uniquement destinées à la gestion de vos demandes. 
                  Aucune donnée n'est cédée à des tiers.
                </p>
              </section>

            </div>

            <footer className="mt-20 pt-8 border-t-[4px] border-black text-center text-xs text-black/60 font-bold uppercase tracking-[0.2em]">
              © 2026 Kevin Anguile Diop — Tous droits réservés
            </footer>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default MentionsLegales;