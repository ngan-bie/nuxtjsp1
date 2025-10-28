<template>
  <section class="py-5">
    <div class="container">
      <div class="row align-items-start gy-5">
        <!-- LEFT COLUMN -->
        <div class="col-lg-5 text-lg-start text-center">
          <p class="text-primary fw-semibold text-uppercase">Company Facts</p>
          <h2 class="fw-bold display-6 mb-3">
            We are proud of <br />
            our design team
          </h2>
          <p class="text-muted mb-5">
            Just sit back and relax while we take care <br />
            of your business needs for you.
          </p>

          <div class="row text-center text-lg-start">
            <div
              class="col-4 mb-4"
              v-for="fact in facts"
              :key="fact.title"
            >
              <div
                class="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style="width: 70px; height: 70px; background-color: #e9f5ff;"
              >
                <i :class="fact.icon" class="fs-3 text-primary"></i>
              </div>
              <h4 class="fw-bold mb-0">{{ fact.number }}</h4>
              <p class="text-muted small mb-0">{{ fact.title }}</p>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="col-lg-7">
          <div class="row">
            <div
              class="col-md-6 col-lg-6 mb-4"
              v-for="member in team"
              :key="member.name"
            >
              <div class="card border-0 shadow-sm h-100 rounded-4 text-center">
                <div class="card-body p-4">
                  <img
                    :src="member.image"
                    alt="team member"
                    class="rounded-circle mb-3"
                    style="width: 100px; height: 100px; object-fit: cover;"
                  />
                  <h5 class="fw-bold">{{ member.name }}</h5>
                  <p class="text-uppercase text-muted small fw-semibold mb-2">
                    {{ member.role }}
                  </p>
                  <p class="text-muted small">{{ member.description }}</p>
                  <div>
                    <a
                      v-for="(icon, index) in member.social"
                      :key="index"
                      href="#"
                      class="text-primary me-3 fs-5 social-link"
                    >
                      <i :class="icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const facts = [
  { icon: 'bi bi-airplane-engines', number: '1000+', title: 'Completed Projects' },
  { icon: 'bi bi-airplane-engines', number: '50K+', title: 'Happy Customers' },
  { icon: 'bi bi-airplane-engines', number: '20+', title: 'Awards Won' },
]

const team = [
  {
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Coriss Ambady',
    role: 'FINANCIAL ANALYST',
    description: 'Fermentum massa justo sit amet risus morbi leo.',
    social: ['bi bi-twitter', 'bi bi-facebook', 'bi bi-dribbble'],
  },
  {
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Cory Zamora',
    role: 'MARKETING SPECIALIST',
    description: 'Fermentum massa justo sit amet risus morbi leo.',
    social: ['bi bi-twitter', 'bi bi-facebook', 'bi bi-dribbble'],
  },
  {
    image: 'https://randomuser.me/api/portraits/men/83.jpg',
    name: 'Nikolas Brooten',
    role: 'SALES MANAGER',
    description: 'Fermentum massa justo sit amet risus morbi leo.',
    social: ['bi bi-twitter', 'bi bi-facebook', 'bi bi-dribbble'],
  },
  {
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Jackie Sanders',
    role: 'INVESTMENT PLANNER',
    description: 'Fermentum massa justo sit amet risus morbi leo.',
    social: ['bi bi-twitter', 'bi bi-facebook', 'bi bi-dribbble'],
  },
]
</script>

<style scoped>
.text-primary {
  color: #3a86ff !important;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

.social-link:hover {
  color: #0d6efd !important;
}
</style>
