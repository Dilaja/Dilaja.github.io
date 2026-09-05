import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Remove the 'base' property entirely or set it to '/'
  base: '/', 
  server: {
    port: 3000,
  },
})