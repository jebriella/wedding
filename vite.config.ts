import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from the root of https://gabriellafredrik.se/ (custom domain on GitHub Pages).
  base: '/',
})
