<template>
  <section class="testimonials-section py-5 bg-light">
    <div class="container text-center">
      <p class="text-uppercase text-primary small fw-semibold mb-2">
        Happy Customers
      </p>
      <h2 class="fw-bold mb-5">
        Don't take our word for it. See what customers are saying about us.
      </h2>

      <div class="row g-4">
        <div
          class="col-12 col-md-6 col-lg-4"
          v-for="(review, i) in reviews"
          :key="i"
        >
          <div class="card h-100 border-0 shadow-sm p-4 text-start">
            <div class="text-warning mb-3">
              ★★★★★
            </div>
            <p class="text-muted mb-4">{{ review.text }}</p>

            <div class="d-flex align-items-center mt-auto">
              <img
                :src="review.image"
                alt="customer"
                class="rounded-circle me-3"
                width="50"
                height="50"
              />
              <div>
                <h6 class="fw-semibold mb-0">{{ review.name }}</h6>
                <small class="text-muted">{{ review.role }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    text: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.',
    name: 'Coriss Ambady',
    role: 'Financial Analyst',
    image: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    text: 'Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
    name: 'Cory Zamora',
    role: 'Marketing Specialist',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    text: 'Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum.',
    name: 'Nikolas Brooten',
    role: 'Sales Manager',
    image: 'https://randomuser.me/api/portraits/men/35.jpg'
  },
  {
    text: 'Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt.',
    name: 'Coriss Ambady',
    role: 'Financial Analyst',
    image: 'https://randomuser.me/api/portraits/women/43.jpg'
  },
  {
    text: 'Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes.',
    name: 'Laura Widerski',
    role: 'Sales Specialist',
    image: 'https://randomuser.me/api/portraits/women/48.jpg'
  },
  {
    text: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus magnis dis montes, nascetur ridiculus mus.',
    name: 'Jackie Sanders',
    role: 'Investment Planner',
    image: 'https://randomuser.me/api/portraits/women/50.jpg'
  }
]
</script>

<style scoped>
.testimonials-section {
  background-image: linear-gradient(rgb(237, 246, 255) , #fff);
}

.card {
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
}
</style>
