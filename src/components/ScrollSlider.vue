<script setup>

import { onMounted  } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);


const scollSliderAnimation = () => {
  gsap.to(".slider_item", {
      scrollTrigger: {
          trigger: ".scrol_slider_area",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
      },
      xPercent: -200,
      ease: "power4.out",
  });
}

onMounted(() => {
  scollSliderAnimation();

});

</script>

<template>

  <section data-color="cyan" class="scrol_slider_area section w-full">
    <div class="">
      <div class="sliders_wrapper h-[400vh] relative">
        <div class="hrisliders flex overflow-hidden sticky top-0 left-0 w-full h-screen">
          <div class="slider_item w-full flex-shrink-0 items-center h-screen relative">
            <div class="hri_slider_content w-full flex h-full items-center justify-center">
              <div class="sli_content">
                <h2 class="md:text-8xl text-4xl font-bold">
                  Real Talk,<br />
                  Real Impact
                </h2>
              </div>
            </div>
            <div class="img_wrapper">
              <div
                class="img md:w-[300px] md:h-[300px] w-[150px] h-[150px] rounded-full absolute top-1/2 -right-28 -translate-y-1/2 overflow-hidden">
                <img src="/assets/img/slide/hslider1.jpg" alt="slider" />
              </div>
            </div>
          </div>
          <div class="slider_item w-full flex-shrink-0 items-center h-screen relative">
            <div class="hri_slider_content w-full flex h-full items-center justify-center">
              <div class="sli_content text-center relative z-10">
                <h2 class="sm:text-9xl text-7xl font-bold mb-6">300+</h2>
                <h4 class="md:text-2xl text-xl">
                  Real People — Real Solutions. Our web development expertise brings<br> impactful products to
                  life,transforming user experiences
                </h4>
              </div>
            </div>
            <div class="img_wrapper">
              <div
                class="img md:w-[300px] md:h-[300px] w-[150px] h-150px rounded-full absolute top-1/2 -right-28 -translate-y-1/2 overflow-hidden">
                <img src="/assets/img/slide/hslider2.jpg" alt="slider" />
              </div>
              <div
                class="img md:w-[300px] md:h-[300px] w-[150px] h-150px rounded-full absolute -top-[150px] left-1/2 -translate-x-1/2 overflow-hidden">
                <img src="/assets/img/slide/hslider3.jpg" alt="slider" />
              </div>
              <div
                class="img md:w-[300px] md:h-[300px] w-[150px] h-150px rounded-full absolute -bottom-[6rem] left-1/2 -translate-x-1/2 overflow-hidden">
                <img src="/assets/img/slide/hslider4.jpg" alt="slider" />
              </div>
            </div>
          </div>
          <div class="slider_item w-full flex-shrink-0 items-center h-screen relative">
            <div class="hri_slider_content w-full flex h-full items-center justify-center">
              <div class="sli_content text-center relative z-10">
                <h2 class="text-7xl md:text-9xl font-bold mb-6">100%</h2>
                <h4 class="md:text-4xl text-xl">Clients are satisfied with the quality of our work.</h4>
              </div>
            </div>
            <div class="img_wrapper">
              <div
                class="img md:w-[300px] md:h-[300px] w-[150px] h-150px rounded-full absolute top-1/2 -right-28 -translate-y-1/2 overflow-hidden">
                <img src="/assets/img/slide/hslider2.jpg" alt="slider" />
              </div>
              <div
                class="img md:w-[300px] md:h-[300px] w-[150px] h-150px rounded-full absolute -top-[150px] left-1/2 -translate-x-1/2 overflow-hidden">
                <img src="/assets/img/slide/hslider3.jpg" alt="slider" />
              </div>
              <div
                class="img w-[100px] h-[100px] rounded-full absolute bottom-10 left-1/2 -translate-x-1/2 overflow-hidden">
                <img src="/assets/img/slide/hslider4.jpg" alt="slider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>