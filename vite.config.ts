import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3008,
    host: true,
    strictPort: true,
  },
  preview: {
    port: 3008,
    host: true,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        about: resolve(import.meta.dirname, 'about.html'),
        servicesStyle2: resolve(import.meta.dirname, 'services-style-2.html'),
        gallery: resolve(import.meta.dirname, 'gallery.html'),
        whyChooseUs: resolve(import.meta.dirname, 'why-choose-us.html'),
        faq: resolve(import.meta.dirname, 'faq.html'),
        contact: resolve(import.meta.dirname, 'contact.html'),
      },
    },
  },
})

