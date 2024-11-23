<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// Automatically close the menu when navigating to a new route
const route = useRoute();
watch(
  () => route.path,
  () => {
    menuOpen.value = false;
    window.scrollTo(0, 0);
  }
);

onMounted(() => {
  window.scrollTo(0, 0);
});


</script>

<template>
  <header
    :class="menuOpen ? 'active' : ''"
    class="header_area fixed top-0 left-0 w-full z-30 py-4"
  >
    <div class="container">
      <div class="flex justify-between">
        <!-- Logo Section -->
        <div class="logo magnet">
          <router-link to="/"> <h1 class="text-3xl font-bold">Samrat</h1></router-link>
        </div>
        <!-- Menu Toggle Button -->
        <div @click="toggleMenu" class="menubar magnet cursor-pointer relative z-30">
          <span
            :class="menuOpen ? 'active' : ''"
            class="icon1 w-[40px] h-[2px] block my-1.5"
          ></span>
          <span
            :class="menuOpen ? 'active' : ''"
            class="icon2 w-[40px] h-[2px] block my-1.5"
          ></span>
        </div>
      </div>
    </div>
    <!-- Menu Area -->
    <div
      :class="menuOpen ? 'active' : ''"
      class="menu_area bg-black w-full h-screen fixed top-0 left-0"
    >
      <div class="container">
        <nav>
          <ul class="menu_list flex flex-col gap-4 pt-[100px] max-w-fit">
            <li class="menuItem magnet">
              <router-link to="/">Home</router-link>
            </li>
            <li class="menuItem magnet">
              <router-link to="/about">About</router-link>
            </li>
            <li class="menuItem magnet">
              <a href="#project">Project</a>
            </li>
            <li class="menuItem magnet">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>


