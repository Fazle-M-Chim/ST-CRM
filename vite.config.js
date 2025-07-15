import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: 'https://fazle-m-chim.github.io/ST-CRM/', // 👈 critical for GitHub Pages
  plugins: [react(), tailwindcss()],
})