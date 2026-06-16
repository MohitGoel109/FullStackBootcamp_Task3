import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: repo name = FullStackBootcamp_Task3
export default defineConfig({
  plugins: [react()],
  base: '/FullStackBootcamp_Task3/',
})