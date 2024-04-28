import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    reporters: ['junit', 'json', 'html', 'verbose'],
    outputFile: {
      junit: './test-report.xml',
      json: './test-report.json'
    }
  }
})
