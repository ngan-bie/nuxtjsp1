export const useServicesStore = defineStore('services', {
  state: () => ({
    services: [] as Array<{ title: string, desc: string }>
  }),
  actions: {
    async fetchServices() {
      const data = await $fetch('/api/services')
      this.services = data
    }
  }
})
