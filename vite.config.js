import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
// import { visualizer } from 'rollup-plugin-visualizer'

import { version } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VERSION__: JSON.stringify(version)
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      // plugins: [
      //   visualizer()
      // ],
      output: {
        manualChunks: {
          lucid: ['lucide-react'],
          chartjs: ['chart.js'],
          dateFns: ['date-fns'],
          axios: ['axios'],
          swr: ['swr'],
          daypicker: ['react-day-picker'],
          tailwindMerge: ['tailwind-merge']
        }
      }
    }
  },
  resolve: {
    alias: [
      {
        find: 'actions',
        replacement: path.resolve(__dirname, '/src/actions')
      },
      {
        find: 'assets',
        replacement: path.resolve(__dirname, '/src/assets')
      },
      {
        find: 'components',
        replacement: path.resolve(__dirname, '/src/components')
      },
      {
        find: 'config',
        replacement: path.resolve(__dirname, '/src/config')
      },
      {
        find: 'constants',
        replacement: path.resolve(__dirname, '/src/constants')
      },
      {
        find: 'context',
        replacement: path.resolve(__dirname, '/src/context')
      },
      {
        find: 'contexts',
        replacement: path.resolve(__dirname, '/src/contexts')
      },
      {
        find: 'hooks',
        replacement: path.resolve(__dirname, '/src/hooks')
      },
      {
        find: 'layouts',
        replacement: path.resolve(__dirname, '/src/layouts')
      },
      {
        find: 'modules',
        replacement: path.resolve(__dirname, '/src/modules')
      },
      {
        find: 'pages',
        replacement: path.resolve(__dirname, '/src/pages')
      },
      {
        find: 'reducers',
        replacement: path.resolve(__dirname, '/src/reducers')
      },
      {
        find: 'services',
        replacement: path.resolve(__dirname, '/src/services')
      },
      {
        find: 'store',
        replacement: path.resolve(__dirname, '/src/store')
      },
      {
        find: 'tests',
        replacement: path.resolve(__dirname, '/src/tests')
      },
      {
        find: 'theme',
        replacement: path.resolve(__dirname, '/src/theme')
      },
      {
        find: 'utils',
        replacement: path.resolve(__dirname, '/src/utils')
      }
    ]
  },
  plugins: [react()
    // visualizer({
    //   filename: './dist/stats.html',
    //   open: true
    // })
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/tests/setup.js',
    coverage: {
      reporter: ['json', 'html'],
      exclude: [
        'node_modules/'
      ]
    }
  }
})
