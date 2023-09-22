import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: false
  },
  server: {
    host: true,
    port: 8082,
    strictPort: true,
    hmr: false
  },
  base: '/thenetwork/'
})
