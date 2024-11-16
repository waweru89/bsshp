import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Use './' for relative paths or '/subdirectory/' if hosted in a subdirectory
  plugins: [react()],
})
