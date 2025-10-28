<template>
  <div class="container py-5 my-5">
    <div class="row align-items-center">
      <div class="col-md-6 text-center mb-4 mb-md-0">
        <img
          src="https://sandbox.elemisthemes.com/assets/img/illustrations/i22.png"
          alt="Why Choose Us"
          class="img-fluid w-75"
        />
      </div>

      <div class="col-md-6">
        <p class="text-uppercase text-primary fw-semibold small mb-2">Why Choose Us?</p>
        <h2 class="fw-bold mb-3">We bring solutions to make life easier.</h2>

        <div class="accordion" id="whyAccordion">
          <div class="accordion-item border-0 mb-3 shadow-sm">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button text-primary fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne">
                Professional Design
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#whyAccordion">
              <div class="accordion-body text-muted">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur
                purus sit amet fermentum. Praesent commodo cursus magna, vel.
              </div>
            </div>
          </div>

          <div class="accordion-item border-0 mb-3 shadow-sm">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo">
                Top-Notch Support
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#whyAccordion">
              <div class="accordion-body text-muted">
                Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.
              </div>
            </div>
          </div>

          <div class="accordion-item border-0 shadow-sm">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree">
                Header and Slider Options
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#whyAccordion">
              <div class="accordion-body text-muted">
                Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
.accordion-button {
  background-color: white !important;
  box-shadow: none !important;
}
.accordion-button:not(.collapsed) {
  color: #0d6efd;
}
</style>
