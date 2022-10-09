<script setup></script>

<template>
  <div class="mx-5 d-flex flex-column">
    <div class="">
      <span class="float-start">
        <i class="bi-bell-fill" />
        <label for="jobAlerts" class="px-2">
          Get Job alerts for your searches
        </label>
        <input type="checkbox" name="" id="jobAlerts" />
      </span>
      <span class="float-end">Sort by Date</span>
    </div>

    <div class="mt-5">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Job title</h5>
          <p class="float-end fw-semibold">
            <i class="bi-link"></i>
            Share
            <i class="bi-bookmark ms-2"></i>
            Save
          </p>
          <br>
          <p style="font-size: smaller;">
            <i class="bi-building" /> Job Building
          <i class="ms-2 bi-geo-alt" />Job type: Location 1, Location2
          </p>
          <hr>
          <div class="card-text">
            <h5>
                Qualifications:
            </h5>
            <p>
                Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </p>
          </div>
        </div>
        <a href="#" class="mx-auto btn btn-outline-primary border-0">Go somewhere</a>
        <br>
      </div>
    </div>
  </div>
</template>


<style scoped>
    .card:hover{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
</style>