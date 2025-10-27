<template>
  <div :class="['card my-3 p-4 animate__animated', animation]">
    <h3 class="mb-2">{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
  animation?: string
}>()
</script>

<style scoped>
.card {
  border: none;
  background: #fff;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
}
</style>
