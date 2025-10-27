<template>
  <div class="container py-5 animate__animated animate__fadeInUp">
    <h1 class="text-center mb-4">About Us</h1>
    <SectionCard
      v-for="section in aboutSections"
      :key="section.id"
      :title="section.title"
      :content="section.content"
      animation="animate__fadeInUp"
    />
  </div>
</template>

<script setup lang="ts">
import SectionCard from '@/components/SectionCard.vue'
import { useAgencyStore } from '@/stores/agencyStore'

const store = useAgencyStore()
const aboutSections = store.aboutSections

useHead({
  title: 'About - My Agency',
  meta: [{ name: 'description', content: 'About our agency team and mission.' }]
})
</script>
