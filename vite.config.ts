import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/auto-parts-form.netlify.app",
  plugins: [react()],
  server: {
    port: 8080,
  },
})
