import React from 'react';
import PageTransition from '../components/PageTransition';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MentionsLegales = () => {
  return (
    <PageTransition>
      <title>Mentions Légales — Kevin Anguile Diop</title>
      <main className="min-h-screen bg-black text-gray-300 pt-32 pb-20 px-6 select-none">
        <div className="max-w-4xl mx-auto">
          
          {/* Retour */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#646cff] transition-colors mb-12 uppercase text-xs font-bold tracking-widest"
          >
            <FiArrowLeft /> Retour au portfolio
          </Link>

          {/* En-tête */}
          <header className="mb-16 border-b border-white/10 pb-8">
            <h1 className="text-5xl md:text-7xl font-rumei text-white mb-4">
              Mentions <span className="italic text-[#646cff]">Légales</span>
            </h1>
            <p className="text-sm opacity-50 uppercase tracking-widest">Dernière mise à jour : Janvier 2026</p>
          </header>

          {/* Contenu */}
          <div className="space-y-12 font-sans leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-rumei text-white mb-4 uppercase tracking-wider">1. Présentation du site</h2>
              <p>
                En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, 
                il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation :
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-white/80">
                <li><strong>Propriétaire & Créateur :</strong> Kevin Anguile Diop [cite: 41, 449]</li>
                <li><strong>Responsable publication :</strong> Kevin Anguile Diop – Kevinanguilediop@gmail.com</li>
                <li><strong>Hébergeur :</strong> [Votre Hébergeur, ex: Vercel Inc.] – 650 California St, San Francisco, CA 94108</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-rumei text-white mb-4 uppercase tracking-wider">2. Propriété intellectuelle</h2>
              <p>
                Kevin Anguile Diop est propriétaire des droits de propriété intellectuelle sur tous les éléments accessibles sur le site[cite: 41, 452].
              </p>
              <div className="mt-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-white font-bold mb-3 uppercase text-xs tracking-widest">Typographies utilisées :</h3>
                <ul className="text-sm space-y-3">
                  <li>
                    <span className="font-rumei text-lg text-[#646cff]">Rumei House Regular :</span> 
                    Marque déposée d'Imoodev. Tous droits réservés[cite: 9, 41].
                  </li>
                  <li>
                    <span className="font-octuple text-lg text-[#646cff]">Octuple Max Solid :</span> 
                    Création de Fernando Haro (deFharo). Usage personnel (FFP)[cite: 449, 451].
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-rumei text-white mb-4 uppercase tracking-wider">3. Protection des données (RGPD)</h2>
              <p>
                Les informations recueillies via le formulaire de contact (nom, email) sont uniquement destinées à la gestion de vos demandes par Kevin Anguile Diop. 
                Aucune donnée n'est cédée à des tiers.
              </p>
              <p className="mt-4">
                Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : <strong>Kevinanguilediop@gmail.com</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-rumei text-white mb-4 uppercase tracking-wider">4. Crédits projets</h2>
              <p>Les travaux présentés dans le portfolio (Watt Is, Breizh Immo, Genesis, Blue Lock) sont des réalisations de Kevin Anguile Diop[cite: 1, 457].</p>
            </section>

          </div>

          <footer className="mt-20 pt-8 border-t border-white/10 text-center text-xs text-white/30 uppercase tracking-[0.2em]">
            © 2026 Kevin Anguile Diop — Tous droits réservés
          </footer>
        </div>
      </main>
    </PageTransition>
  );
};

export default MentionsLegales;