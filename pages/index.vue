<template>
  <div>
    <h1>Welcome {{ userStore.name }}</h1>
    <button @click="fetchUser">Get User Info</button>
  </div>
</template>

<script setup lang='ts'>
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

const fetchUser = async () => {
  await userStore.fetchUser()
}
</script>
