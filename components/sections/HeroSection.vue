<template>
  <section class="container py-16">
    <div class="row align-items-center">
      <div class="col-lg-5 mb-5 mb-lg-0">
        <h1 class="display-5 fw-bold text-dark mb-4">
          A digital agency specializing on
          <span class="text-primary">
            <Animate :texts="['web design', '3D animation', 'mobile design', 'UX/UI design']" :interval="2000" />
          </span>
        </h1>

        <p class="text-muted mb-4 fs-4">
          We are an award winning design agency that strongly believes in the power of creative ideas.
        </p>

        <button class="btn btn-primary btn-lg rounded-5 btn-get">
          Get Started
        </button>
      </div>

      <div class="col-lg-7 text-right">
        <img src="https://sandbox.elemisthemes.com/assets/img/illustrations/i21.png" alt="web-design" class="img-fluid" style="max-width: 80%;" />
      </div>
    </div>

    <div class="mt-5 text-center text-muted">
      Trusted by over <strong>2K+ clients</strong> across the world
    </div>

    <div class="d-flex flex-wrap justify-content-center gap-3 mt-3 text-secondary fw-semibold mb-5">
      <span>Slowave</span>
      <span>Keepsake</span>
      <span>Skybox</span>
      <span>[brailie]</span>
      <span>Malory</span>
      <span>crea;tink</span>
      <span>Webpaint</span>
    </div>
  </section>
</template>

<script setup>
import Animate from '~/components/sections/Animate.vue'
</script>

<style>
.btn-get {
  padding: 10px 30px;
  font-size: 18px;
}

.btn-get:hover {
  transform: translateY(-.15rem);
  box-shadow: 0 .25rem .75rem rgba(30, 34, 40, .15);
}
</style>
