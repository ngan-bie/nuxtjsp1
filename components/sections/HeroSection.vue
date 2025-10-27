<template>
  <section class="hero py-5 text-center">
    <h1 class="display-4">{{ title }}</h1>
    <p class="lead">{{ subtitle }}</p>
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>
