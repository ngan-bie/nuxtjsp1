import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    siteTitle: 'My Agency Demo',
    logoUrl: '/logo.png',
    themeColor: '#0d6efd'
  })
})
