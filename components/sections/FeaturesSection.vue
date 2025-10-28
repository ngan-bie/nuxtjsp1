<template>
  <section class="services-section py-5">
    <div class="container text-center">
      <p class="text-uppercase text-primary small fw-semibold">What We Do?</p>
      <h2 class="fw-bold mb-5">
        The service we offer is specifically designed to meet your needs.
      </h2>

      <div class="row g-4">
        <div class="col-md-4" v-for="(service, i) in services" :key="i">
          <div class="card border-0 bg-transparent">
            <img
              :src="service.img"
              class="service-img mb-3"
              :alt="service.title"
            />
            <h5 class="fw-semibold mb-2">{{ service.title }}</h5>
            <p class="text-muted small mb-3">{{ service.desc }}</p>
            <a href="#" class="text-primary fw-semibold small text-decoration-none">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="strategy-section py-5 bg-light">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <p class="text-uppercase text-primary small fw-semibold">Our Strategy</p>
        <h2 class="fw-bold mb-4">
          Here are 3 working steps to organize our projects.
        </h2>

        <p class="text-muted mb-4">
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
          Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula.
        </p>

        <p class="text-muted mb-3">
          Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis
          euismod semper. Aenean lacinia bibendum nulla sed consectetur.
        </p>
        <button class="btn btn-primary rounded-pill px-4">Learn More</button>
      </div>

      <div class="col-md-6">
        <div class="steps">
          <div
            v-for="(step, i) in steps"
            :key="i"
            class="step-item d-flex align-items-center shadow-sm p-3 mb-3 bg-white rounded-3 p-4">
            <div class="step-number me-3">
              <span class="circle">{{ i + 1 < 10 ? '0' + (i + 1) : i + 1 }}</span>
            </div>
            <div>
              <h6 class="fw-semibold mb-1">{{ step.title }}</h6>
              <p class="text-muted small mb-0">{{ step.desc }}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>

  
</template>

<script setup>
const services = [
  {
    title: 'Web Design',
    desc: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus tellus.',
    img: 'https://sandbox.elemisthemes.com/assets/img/illustrations/i24.png'
  },
  {
    title: 'Graphic Design',
    desc: 'Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.',
    img: 'https://sandbox.elemisthemes.com/assets/img/illustrations/i19.png'
  },
  {
    title: '3D Animation',
    desc: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.',
    img: 'https://sandbox.elemisthemes.com/assets/img/illustrations/i18.png'
  }
]

const steps = [
  { title: 'Collect Ideas', desc: 'Nulla vitae elit libero pharetra augue dapibus.' },
  { title: 'Data Analysis', desc: 'Vivamus sagittis lacus vel augue laoreet.' },
  { title: 'Finalize Product', desc: 'Cras mattis consectetur purus sit amet.' }
]
</script>

<style scoped>
.services-section {
  background-color: #f8fbff;
}

.service-img {
  width: 80%;
  margin: 0 auto;
  display: block;
}

.strategy-section h2 {
  max-width: 600px;
}

.step-item {
  transition: transform 0.2s ease;
}
.step-item:hover {
  transform: translateX(5px);
}
.circle {
  display: inline-block;
  background-color: #e9f5ff;
  color: #007bff;
  font-weight: 600;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
</style>
