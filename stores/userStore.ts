import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Guest',
    email: ''
  }),
  actions: {
    async fetchUser() {
      try {
        const res = await axios.get('/user')
        this.name = res.data.name
        this.email = res.data.email
      } catch (err) {
        console.error(err)
      }
    }
  }
})
