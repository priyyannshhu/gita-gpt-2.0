import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

/* Serves /api/chat during `npm run dev` using the exact same handler Vercel runs
   in production, so local and deployed behaviour match. Secrets are loaded from
   .env / .env.local into the Node process only — they are never given to the
   browser bundle (only VITE_-prefixed variables ever are, and none are used). */
function gitagptDevApi() {
  return {
    name: 'gitagpt-dev-api',
    apply: 'serve',
    configureServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), '')
      for (const key of ['OPENROUTER_API_KEY', 'OPENROUTER_MODEL', 'OPENROUTER_API_URL', 'SITE_URL']) {
        if (env[key] && !process.env[key]) process.env[key] = env[key]
      }
      server.middlewares.use('/api/chat', async (req, res) => {
        try {
          const { default: handler } = await server.ssrLoadModule('/api/chat.js')
          await handler(req, res)
        } catch (err) {
          console.error('[gitagpt] dev API error:', err && err.message)
          if (!res.headersSent) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
          }
          res.end(JSON.stringify({ error: { code: 'server_error', message: 'Something went wrong.' } }))
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), gitagptDevApi()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
