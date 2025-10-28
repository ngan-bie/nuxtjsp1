<template>
  <section class="py-5 bg-white">
    <div class="container text-center mb-5">
      <p class="text-primary fw-semibold text-uppercase mb-2">Latest Projects</p>
      <h2 class="fw-bold display-6 mb-3">
        Check out some of our awesome projects<br />
        with creative ideas and great design.
      </h2>
    </div>

    <div id="projectsCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">

        <div
          v-for="(group, gIndex) in groupedProjects"
          :key="gIndex"
          class="carousel-item"
          :class="{ active: gIndex === 0 }">
          <div class="container">
            <div class="row justify-content-center">
              <div
                v-for="(project, index) in group"
                :key="index"
                class="col-12 col-md-4 mb-4"
              >
                <div class="card border-0 shadow-sm h-100">
                  <div class="ratio ratio-1x1">
                    <img
                      :src="project.image"
                      class="card-img-top object-fit-cover rounded-3"
                      alt="project"
                    />
                  </div>
                  <div class="card-body text-center mt-3">
                    <h5 class="fw-semibold">{{ project.title }}</h5>
                    <p class="text-muted small text-uppercase mb-0">
                      {{ project.category }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    <div class="d-flex justify-content-center">
      <button
        class="carousel-control-prev position-static bg-transparent border-0 p-0 shadow-none"
        type="button"
        data-bs-target="#projectsCarousel"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon bg-prev rounded-circle p-3 shadow"></span>
      </button>

      <button
        class="carousel-control-next position-static bg-transparent border-0 p-0 shadow-none"
        type="button"
        data-bs-target="#projectsCarousel"
        data-bs-slide="next">
        <span class="carousel-control-next-icon bg-next rounded-circle p-3 shadow"></span>
      </button>
    </div>


   </div> 
  </section>
</template>

<script setup>
import { computed } from 'vue'

const projects = [
  {
    image: 'https://sandbox.elemisthemes.com/assets/img/photos/sp1.jpg',
    title: 'Venenatis Euismod Vehicula',
    category: 'Web Design',
  },
  {
    image: 'https://sandbox.elemisthemes.com/assets/img/photos/sp2.jpg',
    title: 'Tortor Tellus Cursus',
    category: 'Stationary',
  },
  {
    image: 'https://sandbox.elemisthemes.com/assets/img/photos/sp3.jpg',
    title: 'Ridiculus Sem Parturient',
    category: 'Web Application',
  },
  {
    image: 'https://sandbox.elemisthemes.com/assets/img/photos/sp4.jpg',
    title: 'Curabitur Bibendum',
    category: 'UI/UX Design',
  },
  {
    image: 'https://sandbox.elemisthemes.com/assets/img/photos/sp1.jpg',
    title: 'Fermentum Risus',
    category: 'Graphic Design',
  },
  {
    image: 'https://sandbox.elemisthemes.com/assets/img/photos/sp5.jpg',
    title: 'Vestibulum Porta',
    category: 'Branding',
  },
]

const groupedProjects = computed(() => {
  const groups = []
  for (let i = 0; i < projects.length; i += 3) {
    groups.push(projects.slice(i, i + 3))
  }
  return groups
})
</script>

<style scoped>
.bg-prev {
  background-color: #23abff !important;
}

.bg-next {
  background-color: #23abff !important;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.bg-prev:hover,
.bg-next:hover {
  opacity: 0.85;
  transition: 0.2s ease;
}

</style>
