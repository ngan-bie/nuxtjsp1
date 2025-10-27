import { defineStore } from 'pinia'

export const useAboutStore = defineStore('about', {
  state: () => ({
    sections: [] as Array<{ id: number; title: string; content: string }>
  }),
  actions: {
    async fetchSections() {
      const data = await $fetch('/api/about')
      this.sections = data
    }
  }
})
