<script setup>
import { onMounted, ref } from 'vue';
import projectsData from '../data/projects.json';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = ref(projectsData);


onMounted(() => {

  gsap.set(".project_item", {
    scale: 1.5,
  });

  gsap.to(".project_item", {
    scrollTrigger: {
      trigger: ".project_area",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
    y: 0,
    scale: 1,
    ease: "power4.out",
    duration: 3,
    stagger: 3,
  });

});

</script>


<template>
  <section data-color="black" class="project_area section w-full h-[250vh] my-[70px] relative">
    <div class="w-full h-screen sticky overflow-hidden top-[80px] left-0">
      <div class="container">
        <div class="project_title_area">
          <h2 class="text-4xl md:text-6xl capitalize text-end mb-10">Our Projects</h2>
        </div>
        <div class="project_wrapper relative">

          <div v-for="(project, index) in projects" :key="index"  class="project_item  ">
            <div class="project_img md:w-1/2 w-full">
              <a target="_blank" :href="project.links[0].url">
                <img class="w-full h-full object-cover" :src="project.image" alt="project_img">
              </a>
            </div>
            <div class="project_content md:w-1/2 w-full">
              <h3 class="md:text-6xl text-base font-bold py-2">0{{ index+1 }}</h3>
              <h2 class="md:text-4xl text-2xl font-bold py-2">{{ project.title }}</h2>
              <p class="mt-2"><strong>Technology:</strong> {{ project.Technology }} </p>
              <p class="mt-2"><strong>Core Features:</strong> {{ project.coreFeatures }} </p>
              <div class="Pbtnarea flex gap-4">

                <div v-for="link in project.links" class="magnet">
                  <a target="_blank" :href="link.url"
                    class="rounded-md px-4 py-2 bg-[#8750F7] text-white text-sm inline-block mt-4">{{ link.label }}</a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>