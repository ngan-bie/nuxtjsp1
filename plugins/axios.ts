// plugins/axios.ts
import axios from 'axios'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('axios', axios.create({
    baseURL: 'https://api.example.com'
  }))
})
