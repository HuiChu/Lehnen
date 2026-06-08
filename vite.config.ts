import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg'],
      manifest: {
        name: '語塊學德文 · Lehnen',
        short_name: 'Lehnen',
        description: '用語塊（lexical chunks）學德文的跟讀練習工具',
        theme_color: '#E0863C',
        background_color: '#FDF6E3',
        display: 'standalone',
        lang: 'de',
        icons: [
          {
            src: 'icon.svg',
            sizes: '192x192 512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});
