import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Guest'
  }),
  actions: {
    async fetchUser() {
      // Demo: giả lập API call
      this.name = 'Nuxt User'
    }
  }
})
