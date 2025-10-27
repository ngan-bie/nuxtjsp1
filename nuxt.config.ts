import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@pinia/nuxt'
  ],
  vite: {
    plugins: [tsconfigPaths()]
  },
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
  },
  typescript: { strict: true }
})
