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
    background_color: '#000000',
    theme_color: '#000000',
    description: 'Salle de sport TheBeesport - fitness, boxe et coaching personnalisé.',
    icons: [
      { src: 'icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: 'icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      { src: 'icons/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
    ]
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,woff2}'], // ✅ met tout en cache
    runtimeCaching: [
      {
        urlPattern: ({ request }) => request.destination === 'document',
        handler: 'NetworkFirst', // ✅ charge la page depuis le réseau ou le cache
        options: {
          cacheName: 'html-cache',
        }
      },
      {
        urlPattern: ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'asset-cache',
        }
      },
      {
        urlPattern: ({ request }) => request.destination === 'image',
        handler: 'CacheFirst',
        options: {
          cacheName: 'image-cache',
          expiration: { maxEntries: 50 },
        }
      }
    ]
  },
  devOptions: { enabled: true }
})

  ]
})
