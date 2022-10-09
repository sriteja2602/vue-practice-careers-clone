<script setup>
import { RouterLink, RouterView } from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import MainNav from './components/layout/MainNav.vue';
import SubNav from './components/layout/SubNav.vue';
import Footer from './components/layout/Footer.vue';
</script>

<template>
  <header>
    <MainNav />
    <SubNav />
  </header>

  <main>
   <RouterView/>
  </main>
    <Footer></Footer>
</template>

<style scoped>
  
</style>
