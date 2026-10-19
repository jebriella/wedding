import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from https://jebriella.github.io/wedding/ on GitHub Pages.
  // Change to '/' if the site moves to a custom domain.
  base: '/wedding/',
})
