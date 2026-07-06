import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/wc': {
        target: 'https://nuhua.local',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/wc/, '/wp-json/wc/v3'),
      },
    },
  },
})
