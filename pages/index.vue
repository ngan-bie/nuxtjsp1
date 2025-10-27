<template>
  <div>
    <h1>Welcome {{ userStore.name }}</h1>
    <button @click="fetchUser">Get User Info</button>

     <HeroSection title="Welcome to My Agency" subtitle="Demo site">
    <Logo />
  </HeroSection>
  <h1 class="animate__animated animate__fadeIn">Welcome</h1>

  </div>
</template>

<script setup lang='ts'>
import { useUserStore } from '@/stores/userStore'
import HeroSection from '~/components/sections/HeroSection.vue'
import Logo from '~/components/icons/Logo.vue'

const userStore = useUserStore()

const fetchUser = async () => {
  await userStore.fetchUser()
}
</script>
