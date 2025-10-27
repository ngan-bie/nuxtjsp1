import { defineStore } from 'pinia'

export const useAgencyStore = defineStore('agency', {
  state: () => ({
    aboutSections: [
      { id: 1, title: 'Our Mission', content: 'To deliver top-notch web solutions.' },
      { id: 2, title: 'Our Team', content: 'We are a team of creative developers.' }
    ],
    services: [
      { id: 1, title: 'Web Design', content: 'Modern, responsive UI/UX design.' },
      { id: 2, title: 'Development', content: 'Full-stack web development services.' },
      { id: 3, title: 'SEO Optimization', content: 'Improve ranking and performance.' }
    ]
  })
})
