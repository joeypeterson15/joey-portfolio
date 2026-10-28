import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages project site: https://joeypeterson15.github.io/joey-portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/joey-portfolio/',
})
