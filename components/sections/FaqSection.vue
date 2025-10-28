<template>
  <section class="py-5">
    <div class="container">
      <div class="row align-items-start">
        <div class="col-lg-5 mb-4 mb-lg-0">
          <p class="text-primary fw-semibold text-uppercase mb-2">FAQ</p>
          <h2 class="fw-bold display-6 mb-3">
            If you don't see an answer to your question, you can send us an email from our contact form.
          </h2>
          <p class="text-muted mb-4">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare.
          </p>
          <button class="btn btn-primary rounded-pill px-4 py-2">
            All FAQ
          </button>
        </div>

        <div class="col-lg-7">
          <div class="accordion" id="faqAccordion">
            <div class="accordion-item mb-3 shadow-sm border-0 rounded-3">
              <h2 class="accordion-header">
                <button
                  class="accordion-button text-primary fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                  aria-expanded="true"
                >
                  How do I get my subscription receipt?
                </button>
              </h2>
              <div
                id="faq1"
                class="accordion-collapse collapse show"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body text-muted">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                  Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </div>
              </div>
            </div>

            <div class="accordion-item mb-3 shadow-sm border-0 rounded-3">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed text-primary fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                >
                  Are there any discounts for people in need?
                </button>
              </h2>
              <div
                id="faq2"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body text-muted">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                  Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </div>
              </div>
            </div>

            <div class="accordion-item mb-3 shadow-sm border-0 rounded-3">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed text-primary fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                >
                  Do you offer a free trial edit?
                </button>
              </h2>
              <div
                id="faq3"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body text-muted">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                  Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </div>
              </div>
            </div>

            <div class="accordion-item shadow-sm border-0 rounded-3">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed text-primary fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq4"
                >
                  How do I reset my Account password?
                </button>
              </h2>
              <div
                id="faq4"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body text-muted">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                  Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
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
</script>

<style scoped>
.accordion-button:not(.collapsed) {
  background-color: #f8f9fa;
  box-shadow: none;
}
</style>
