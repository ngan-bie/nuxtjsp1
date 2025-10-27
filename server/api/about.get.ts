// server/api/about.get.ts
export default defineEventHandler(() => {
  return [
    { id: 1, title: 'Web Design', content: 'We build modern, beautiful websites.' },
    { id: 2, title: 'Development', content: 'Our apps are fast, scalable and secure.' },
    { id: 3, title: 'Branding', content: 'We help brands stand out with creative identity.' }
  ]
})
