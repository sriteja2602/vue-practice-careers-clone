<script setup>
import {useRoute, useRouter, RouterLink} from 'vue-router'
import {ref, computed} from 'vue'

</script>

<template>
  <nav class="border navbar">
    <div style="margin-left: 2.2rem;" class="py-2 hello">
      <svg style="margin-right: 20px;"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
        />
      </svg>
      <span>Find your next job at Google.
        <!-- <a href="">Hi</a> -->
        <a class="fs-6" href="#">What do you want to do?</a>
      </span>
      <div class="px-3 fs-6 tt">
      </div>
    </div>
  </nav>
</template>

<style scoped>
.hello {
  display: "inline-block";
  vertical-align: "middle";
  margin-top: 2px;
}
.tt {
  display: block;
}
</style>
