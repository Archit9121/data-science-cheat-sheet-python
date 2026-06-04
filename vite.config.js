
import { defineConfig } from 'vite'
import react from '@vitejs/react-vite-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/data-science-cheat-sheet-python/', // Must match your exact GitHub repository name
})
