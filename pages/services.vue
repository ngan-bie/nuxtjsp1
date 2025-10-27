<template>
  <div class="container py-5">
    <h1 class="text-center mb-4 animate__animated animate__fadeInDown">
      Our Services
    </h1>

    <p class="text-center animate__animated animate__fadeInUp mb-5">
      We provide a wide range of creative digital services to elevate your business.
    </p>

    <div class="row g-4">
      <div
        v-for="service in services"
        :key="service.id"
        class="col-md-4 animate__animated animate__fadeInUp"
      >
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <div class="fs-1 mb-3">{{ service.icon }}</div>
            <h5 class="card-title">{{ service.title }}</h5>
            <p class="card-text text-muted">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const services = ref([])

const fetchServices = async () => {
  // Giả lập gọi API (mock data)
  const res = await fetch('/api/services')
  services.value = await res.json()
}

onMounted(fetchServices)

useHead({
  title: 'Services - My Agency',
  meta: [
    { name: 'description', content: 'Explore our professional services.' }
  ]
})
</script>

<style scoped>
.card {
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
</style>
