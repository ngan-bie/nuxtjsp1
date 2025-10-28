<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top mt-2">
      <div class="container">
        <!-- Logo -->
        <a class="navbar-brand fw-bold text-dark" href="#">
          <img src="https://sandbox.elemisthemes.com/assets/img/logo-dark.png" alt="">
        </a>

        <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul class="navbar-nav align-items-center">
            <li class="nav-item dropdown mx-2">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Demos
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Demo 1</a></li>
                <li><a class="dropdown-item" href="#">Demo 2</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown mx-2">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">About</a></li>
                <li><a class="dropdown-item" href="#">Services</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown mx-2">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Project 1</a></li>
                <li><a class="dropdown-item" href="#">Project 2</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown mx-2">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blog
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Latest Posts</a></li>
                <li><a class="dropdown-item" href="#">Categories</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown mx-2">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blocks
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Block 1</a></li>
                <li><a class="dropdown-item" href="#">Block 2</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown mx-2">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Documentation
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Getting Started</a></li>
                <li><a class="dropdown-item" href="#">API Reference</a></li>
              </ul>
            </li>
          </ul>

          <!-- Nút Contact bên phải -->
          <button
            class="btn btn-primary rounded-pill ms-4 px-4 py-2"
            style="background-color: #7fc6ff; border-color: #7fc6ff;"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  margin-top: 1rem;
}
.nav-link {
  color: #2d3748; 
  font-weight: 500;
}
.nav-link:hover,
.nav-link:focus {
  color: #7fc6ff;
}

.btn-primary:hover,
.btn-primary:focus {
  background-color: #60a5fa !important;
  border-color: #60a5fa !important;
}
</style>
