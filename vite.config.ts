/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { shortcuts } from './shortcuts'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      reactivityTransform: true,
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass',
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extendRoute(route) {
        // rutas que no requieren autrenticacion
        if (route.path === '/') {
          // Index is unauthenticated.
          return route
        }

        // todas las demas requiren autenticacion
        return {
          ...route,
          meta: { auth: true },
        }
      },
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        '@vueuse/core',
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss({
      shortcuts: { ...shortcuts },
      rules: [
        ['gradient-rotate', { animation: '30s ease 0s infinite normal none running gradient-rotate' }],
        ['h-head', { 'min-height': 'calc(100vh - 90px)' }],
        ['cool-gradient', { background: 'linear-gradient(-45deg, #0061ff, #60efff, #0061ff, #43c6ac) 0% 0% / 400% 400%;' }],
      ],
    }),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
