import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import banner from 'vite-plugin-banner'
import dts from 'vite-plugin-dts'
import { resolve } from 'pathe'

import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(), 
    dts({
      insertTypesEntry: true,
    }),
    banner({
      content: `/**\n * name: ${pkg.name}\n * version: v${
        pkg.version
      }\n * (c) ${new Date().getFullYear()}\n * description: ${pkg.description}\n * author: ${pkg.author}\n */`,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vite-vue-lib',
      fileName: 'vite-vue-lib',
    },
    watch: {
      include: [resolve(__dirname, 'src')],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['vue'],
  },
})
