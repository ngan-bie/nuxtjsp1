<template>
  <footer class="bg-footer relative text-white">
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
      <svg class="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86C662.27-3.25,743.84-1.52,820.57,9.54,908.2,22.5,985.66,55.47,1075.58,74.3c72.92,15.1,147.12,19.42,224.42,8.59V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          opacity="1"
          fill="#fff"
        ></path>
      </svg>
    </div>

   <div class="container px-4 pt-5 text-center">
    <div class="row align-items-center mb-5">
      <div class="col-12 col-md-9 text-center text-md-start mb-3 mb-md-0">
        <h1 class="fw-bold lh-base display-6 mx-auto mx-md-0 text-fami">
          Join our community by using our services and grow your business.
        </h1>
      </div>

      <div class="col-12 col-md-3 text-center text-md-end">
        <button
          class="btn btn-primary fw-semibold px-4 py-3 rounded-pill btn-try">
          Try It For Free
        </button>
      </div>
    </div>

      <hr class="border-gray-500/40 mb-12" />

        <div class="row text-start text-md-start">
        <div class="col-12 col-md-3 mb-4">
          <h3 class="h5 fw-bold mb-3">Sandbox</h3>
          <p class="text-secondary small">© 2025 Sandbox.<br>All rights reserved.</p>
          <div class="d-flex gap-2 mt-3">
            <i class="fab fa-twitter text-secondary fs-5"></i>
            <i class="fab fa-facebook-f text-secondary fs-5"></i>
            <i class="fab fa-dribbble text-secondary fs-5"></i>
            <i class="fab fa-instagram text-secondary fs-5"></i>
            <i class="fab fa-youtube text-secondary fs-5"></i>
          </div>
        </div>

        <div class="col-12 col-md-3 mb-4">
          <h4 class="h6 fw-semibold mb-3">Get in Touch</h4>
          <p class="text-secondary small mb-2">
            Moonshine St. 14/05<br>
            Light City, London,<br>
            United Kingdom
          </p>
          <p class="text-secondary small mb-0">
            info@email.com<br>
            00 (123) 456 78 90
          </p>
        </div>

        <div class="col-12 col-md-3 mb-4">
          <h4 class="h6 fw-semibold mb-3">Learn More</h4>
          <ul class="list-unstyled small text-secondary">
            <li><a href="#" class="text-decoration-none text-secondary">About Us</a></li>
            <li><a href="#" class="text-decoration-none text-secondary">Our Story</a></li>
            <li><a href="#" class="text-decoration-none text-secondary">Projects</a></li>
            <li><a href="#" class="text-decoration-none text-secondary">Terms of Use</a></li>
            <li><a href="#" class="text-decoration-none text-secondary">Privacy Policy</a></li>
          </ul>
        </div>

        <div class="col-12 col-md-2 mb-4">
          <h4 class="h6 fw-semibold mb-3">Our Newsletter</h4>
          <p class="text-secondary small mb-2">
            Subscribe to our newsletter to get our news & deals delivered to you.
          </p>
          <div class="input-group">
            <input type="email" class="form-control" placeholder="Email Address">
            <button class="btn btn-primary" type="button">Join</button>
          </div>
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style>
.bg-footer {
    background-color: #343f52;
}

.btn-try {
    padding: 10px 30px;
    border: none;
}
.text-fami {
    font-family: Urbanist, sans-serif;
}
</style>
