import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Regroupe le CSS au lieu de le diviser en petits fichiers
    // Cela réduit le nombre de requêtes bloquantes au démarrage
    cssCodeSplit: false, 
    
    // Optimisation de la taille des fichiers générés
    chunkSizeWarningLimit: 1000,
    
    rollupOptions: {
      output: {
        // Personnalisation du découpage pour éviter les cascades de chargement
        manualChunks(id) {
          // Regroupe les bibliothèques lourdes (React, Framer Motion, GSAP) 
          // dans un fichier séparé pour profiter du cache navigateur
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})