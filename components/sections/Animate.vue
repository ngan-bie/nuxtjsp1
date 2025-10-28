<template>
  <div class="text-4xl font-bold text-blue-400 my-6">
    <transition
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__fadeOutDown"
      mode="out-in"
    >
      <span :key="currentText" class="inline-block min-w-[200px] text-center color-text">
        {{ currentText }}
      </span>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  texts: {
    type: Array,
    default: () => ['web design', '3D animation', 'mobile design', 'UX/UI design']
  },
  interval: {
    type: Number,
    default: 3500 
  }
})

const currentIndex = ref(0)
const currentText = ref(props.texts[currentIndex.value])

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.texts.length
    currentText.value = props.texts[currentIndex.value]
  }, props.interval)
})
</script>

<style scoped>
@import "animate.css/animate.min.css";

.color-text {
    color: rgb(21, 197, 255);
    font-size: 45px;
    font-weight: bold;
}
</style>
