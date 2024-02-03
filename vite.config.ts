import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      app: '/src/app',
      common: '/src/common',
      pages: '/src/pages'
    }
  }
})
