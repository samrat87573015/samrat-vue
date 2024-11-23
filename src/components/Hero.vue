<script setup>

import { onMounted, ref  } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import skillsData from '../data/skills.json';

gsap.registerPlugin(ScrollTrigger);

const skills = ref(skillsData);



onMounted(() => {

// Set initial styles
gsap.set(".slides", {
  scale: 3,
});

// Define animation timeline
const lt = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero_area",
    start: "top top",
    end: "bottom bottom",
    scrub: 3,
  },
});

lt.to(
  ".video_div",
  {
    "--clip": "0%",
    ease: "power2",
    duration: 2,
  },
  "a"
)
  .to(
    ".slides",
    {
      scale: 1,
      ease: "power2",
      duration: 2,
    },
    "a"
  )
  .to(
    ".marqleft",
    {
      xPercent: -15,
      ease: "power4",
      duration: 3,
      stagger: 0.03,
    },
    "b"
  )
  .to(
    ".marqright",
    {
      xPercent: 15,
      ease: "power4",
      duration: 3,
      stagger: 0.03,
    },
    "b"
  );
});

const getTranslateClass = (index) => {
  if (index === 'marqqrow_left') return '-translate-x-[20%] marqleft';
  if (index === 'marqqrow_right') return '-translate-x-[30%] marqright';
  if (index === 'marqqrow_left2') return '-translate-x-[20%] marqleft';
  if (index === 'marqqrow_right2') return '-translate-x-[30%] marqright';
  return '';
}

</script>

<template>
      <section data-color="darkParpel" class="hero_area section w-full h-[200vh] relative">
        <div class="w-full sticky top-0 left-0">
            <div class="relative z-20">
                <div style="--clip: 100%"
                     class="video_div w-full h-screen absolute z-10 top-0 left-0 overflow-hidden">
                    <div class="hero_area_wrap w-full h-screen bg-[#0f0715] py-5">
                        <div class="container">
                            <div class="back_text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                <h2>DEVELOPER</h2>
                            </div>
                            <div class="flex flex-col md:flex-row gap-10 items-center h-screen justify-between relative z-20">
                                <div class="w-full lg:w-1/2 pt-20 md:pt-0">
                                    <h4 class="textAnimate subtitle md:text-4xl text-xl font-bold mb-4">
                                        I am Samrat
                                    </h4>
                                    <h2 class="textAnimate hero_title title font-Josefin text-4xl lg:text-7xl md:text-5xl font-bold leading-tight relative z-20">
                                        Web Developer & Designer
                                    </h2>
                                    <p class="textAnimate hero_para md:text-xl text-base">
                                        Full stack web developer with expertise in Laravel, Vue.js and WordPress development.
                                    </p>
                                    <div class="hero_btn_area inline-block magnet mt-8">
                                        <a class=" btn_primary" href="#contact">Hire Me</a>
                                    </div>
                                </div>
                                <div class="w-full lg:w-1/2">
                                    <div class="hero_img_area md:pl-32 pl-0 relative">
                                        <img class=" md:w-full sm:W-96 w-72 rotate-6 hover:rotate-0 transition-all rounded-xl opacity-50"
                                             src="/assets/img/hero.jpg" alt="hero img">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="marqqcontainer w-full h-screen relative overflow-hidden">
                <div class="skill_title absolute top-20 left-1/2 -translate-x-1/2">
                    <h2 class="title md:text-4xl text-2xl">My Skills</h2>
                    
                </div>
                <div class="slides w-[90%] scale-[1] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">

                    <div v-for="(skill, index) in skills"
                    :key="index"
                    :class="['marqqrow', 'w-fit', 'flex', 'items-center', 'gap-5', 'whitespace-nowrap', getTranslateClass(index)]">

                        <div v-for="item in skill" :key="item.id" class="marqq_text_block_item py-2 flex items-center gap-5">
                            <div class="marqqImg ">
                                <img :src="item.image" alt=""/>
                            </div>
                            <div class="marqqe_title">
                                <h3> {{ item.title }} </h3>
                            </div>
                        </div>
                        
                    </div>


                </div>
            </div>
        </div>
    </section>
</template>