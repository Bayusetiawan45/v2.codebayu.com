import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: {
    global: true,
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'lcov', 'json-summary', 'json'],
      exclude: ['hooks/**', 'common/libs/**']
    },
    alias: {
      '@/': './'
    }
  }
})
