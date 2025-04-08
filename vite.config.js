// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path' // You need to import 'resolve' for paths

// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': 'https://web3-assignment1.onrender.com',
    },
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Make sure this points to the correct path for your index.html
      },
    },
  },

  // Optional: If your assets are located in `src/assets`, you can specify how to handle them
  assetsInclude: ['src/assets/**', 'src/components/**'], // Ensure your components and assets are bundled


})
