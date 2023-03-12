import { URL, fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig, loadEnv, splitVendorChunk } from 'vite'
import { name } from './package.json'
import initPlugins from './scripts/vite/plugins'
import proxy from './scripts/vite/proxy'

export default defineConfig((cfg) => {
  const mode = cfg.mode
  const envData = loadEnv(mode, process.cwd())

  return {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('src', import.meta.url)),
      },
    },

    plugins: initPlugins(envData),

    server: {
      cors: true,
      host: '0.0.0.0',
      port: 9000,
      strictPort: false,
      open: true,
      proxy,
    },

    preview: {
      strictPort: false,
    },

    build: {
      outDir: resolve(process.cwd(), '../../../dist'),
      minify: 'terser',
      chunkSizeWarningLimit: 400,
      rollupOptions: {
        output: {
          manualChunks: (id, api) => {
            if (id.includes('naive-ui'))
              return 'naive-ui-vendor'
            else if (id.includes('mock'))
              return 'mock-vendor'
            else
              return splitVendorChunk()(id, api)
          },
        },
      },
      terserOptions: {
        compress: {
          drop_console: envData.VITE_ENV_TYPE === 'production',
          drop_debugger: envData.VITE_ENV_TYPE === 'production',
        },
      },
    },
  }
})
