import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',  // Divide el código en archivos más pequeños, incluyendo dependencias comunes
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar consolas para producción
      },
    },
  },
  plugins: [react()],
  base: '/portfolio/',
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
