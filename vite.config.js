import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const apiUrl = env.VITE_WP_API_URL
  const target = new URL(apiUrl).origin

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/wc': {
          target,
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api\/wc/, '/wp-json/wc/v3'),
        },
      },
    },
  }
})
