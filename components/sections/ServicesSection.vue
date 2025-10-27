<template>
  <section>
    <div v-for="service in servicesStore.services" :key="service.title">
      <h3>{{ service.title }}</h3>
      <p>{{ service.desc }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useServicesStore } from '~/stores/servicesStore'
const servicesStore = useServicesStore()
await servicesStore.fetchServices()
</script>
