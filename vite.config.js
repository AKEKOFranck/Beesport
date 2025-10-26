import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo sport.svg', 'robots.txt'],
      manifest: {
        name: 'TheBeesport',
        short_name: 'TheBee',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',   // ✅ doit être une couleur hex ou nommée
        theme_color: '#000000',        // ✅ même remarque
        description: 'Salle de sport TheBeesport - fitness, boxe et coaching personnalisé.',
        orientation: 'portrait',       // ✅ optionnelle mais recommandée
        icons: [
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'    // ✅ permet l’affichage adaptatif (Android)
          }
        ]
      },
      devOptions: {
        enabled: true                 // ✅ active le mode PWA pendant le dev
      }
    })
  ]
})
