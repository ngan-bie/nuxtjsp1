<template>
  <i :class="['bi', `bi-${name}`, customClass]"></i>
</template>

<script setup>
defineProps({
  name: String,
  customClass: {
    type: String,
    default: ''
  }
})
</script>
