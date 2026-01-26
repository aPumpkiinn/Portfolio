import React from 'react';
import PageTransition from '../components/PageTransition';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MentionsLegales = () => {
  return (
    <PageTransition>
      <title>Mentions Légales — Kevin Anguile Diop</title>
      <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Bouton Retour */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#646cff] hover:text-white transition-colors mb-12 uppercase text-xs font-bold tracking-widest"
          >
            <FiArrowLeft /> Retour au portfolio
          </Link>

          {/* En-tête (Header) */}
          <header className="mb-16 border-b border-white/10 pb-8">
            <h1 className="text-5xl md:text-7xl font-rumei text-white mb-4">
              Mentions <span className="italic text-[#646cff]">Légales</span>
            </h1>
            <p className="text-sm text-gray-500 uppercase tracking-widest">Dernière mise à jour : Janvier 2026</p>
          </header>

          {/* Corps du texte (Content) - Forçage des couleurs pour visibilité */}
          <div className="space-y-12 leading-relaxed text-gray-300">
            
            <section>
              <h2 className="text-2xl font-rumei text-white mb-4 uppercase tracking-wider">1. Présentation du site</h2>
              <p>
                En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, 
                il est précisé aux utilisateurs du site l'identité des différents intervenants :
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li><strong className="text-white">Propriétaire & Créateur :</strong> Kevin Anguile Diop</li>
                <li><strong className="text-white">Responsable publication :</strong> Kevin Anguile Diop – Kevinanguilediop@gmail.com</li>
                <li><strong className="text-white">Hébergeur :</strong> Vercel Inc. – 650 California St, San Francisco, CA 94108</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-rumei text-white mb-4 uppercase tracking-wider">2. Propriété intellectuelle</h2>
              <p>
                Kevin Anguile Diop est propriétaire des droits de propriété intellectuelle sur tous les éléments accessibles sur le site.
              </p>
              <div className="mt-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-[#646cff] font-bold mb-3 uppercase text-xs tracking-widest">Typographies & Crédits :</h3>
                <ul className="text-sm space-y-3">
                  <li>
                    <span className="font-rumei text-lg text-white">Rumei House Regular :</span> 
                    Marque déposée d'Imoodev[cite: 9, 41].
                  </li>
                  <li>
                    <span className="font-octuple text-lg text-white">Octuple Max Solid :</span> 
                    Création de Fernando Haro (deFharo)[cite: 449, 451].
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-rumei text-white mb-4 uppercase tracking-wider">3. Protection des données</h2>
              <p>
                Les informations recueillies via le formulaire de contact sont uniquement destinées à la gestion de vos demandes. 
                Aucune donnée n'est cédée à des tiers.
              </p>
            </section>

          </div>

          <footer className="mt-20 pt-8 border-t border-white/10 text-center text-xs text-gray-600 uppercase tracking-[0.2em]">
            © 2026 Kevin Anguile Diop — Tous droits réservés
          </footer>
        </div>
      </main>
    </PageTransition>
  );
};

export default MentionsLegales;