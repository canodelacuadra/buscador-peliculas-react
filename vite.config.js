import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // descomentarla cuando hagamos el deploy
  //base: '/buscador-peliculas-react/', // importante para github , pero para netlify comentar
})
