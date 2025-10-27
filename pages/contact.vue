<template>
  <div class="container py-5">
    <h1 class="text-center mb-4 animate__animated animate__fadeInDown">
      Contact Us
    </h1>

    <p class="text-center animate__animated animate__fadeInUp">
      Feel free to reach out to us via this form.
    </p>

    <form class="mx-auto mt-4" style="max-width: 500px;">
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="Your Name" />
      </div>
      <div class="mb-3">
        <input type="email" class="form-control" placeholder="Your Email" />
      </div>
      <div class="mb-3">
        <textarea class="form-control" placeholder="Your Message"></textarea>
      </div>
      <button type="submit" class="btn btn-primary w-100 animate__animated animate__pulse">
        Send Message
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Contact - My Agency',
  meta: [
    { name: 'description', content: 'Contact us for collaborations or inquiries.' }
  ]
})
</script>

<style scoped>
form {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
}
</style>
