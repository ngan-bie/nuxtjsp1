import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  compatibilityDate: '2025-10-27',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@pinia/nuxt'
  ],
  vite: {
    plugins: [tsconfigPaths()]
  },
  css: [
    'animate.css/animate.min.css'
  ],
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
  },
  typescript: { strict: true }
})
