import WOW from 'wow.js'

export default defineNuxtPlugin(() => {
  if (process.client) {
    new WOW().init()
  }
})
