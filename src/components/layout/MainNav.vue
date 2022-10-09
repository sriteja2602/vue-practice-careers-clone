<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";

</script>

<style scoped>
.offcanvas,
.offcanvas-xxl,
.offcanvas-xl,
.offcanvas-lg,
.offcanvas-md,
.offcanvas-sm {
  --bs-offcanvas-width: 75%;
}
</style>
<template>
  <nav class="navbar navbar-expand-lg border-bottom">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="fs-4 navbar-brand mx-4" href="#">Google Careers</a>
      
      <div
        class="offcanvas offcanvas-start pr-5"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item px-lg-2">
              <RouterLink class="nav-link" to="/teams">Teams</RouterLink>
            </li>
            <li class="nav-item px-lg-2">
              <RouterLink class="nav-link" to="/locations">Locations</RouterLink>
            </li>
            <li class="nav-item px-lg-2">
              <a class="nav-link" href="#">Benefits</a>
            </li>
            <li class="nav-item px-lg-2">
              <RouterLink class="nav-link" to="/jobs">Jobs</RouterLink>
            </li>
            <li class="nav-item px-lg-2">
              <a class="nav-link" href="#">Students</a>
            </li>
          </ul>
        </div>
      </div>
      <button type="button" class="btn btn-primary fs-6 fw-light">Sign in</button>

    </div>
  </nav>

</template>

<style scoped>
a:hover,
a:active,
a.router-link-active{
  color: black;
}
</style>