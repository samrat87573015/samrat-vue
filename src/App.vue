<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import { onMounted, onUnmounted } from "vue";
import { initLenis, destroyLenis } from "./plugins/lenis";
import { initBodyColorChangeAnimation } from "./plugins/global";



  onMounted(() => {
    initLenis(); // Initialize Lenis
    initBodyColorChangeAnimation();
  });

  onUnmounted(() => {
    destroyLenis(); // Cleanup Lenis on app unload (optional)
  });




</script>

<template>



  <Header />

  <RouterView />

  <Footer />

</template>

<style scoped></style>