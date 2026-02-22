import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        people: resolve(__dirname, 'people.html'),
        sponsors: resolve(__dirname, 'sponsors.html'),
      },
    },
  },
})
