<script setup>

import { onMounted, onUnmounted } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const aboutAnimation = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      if (isMobile) {
        gsap.to(".abright_box", {
          scrollTrigger: {
            trigger: ".about",
            start: "top 30%",
            end: "bottom bottom",
            scrub: 3,
          },
          y: 0,
          ease: "power4",
          duration: 3,
          stagger: 0.03,
        });
      } else {
        gsap.to(".abright_box", {
          scrollTrigger: {
            trigger: ".about",
            start: "top 30%",
            end: "bottom 80%",
            scrub: 3,
          },
          yPercent: -100,
          ease: "power4",
          duration: 3,
          stagger: 0.03,
        });
      }
    };

    const handleResize = () => {
      // Clear existing animations to prevent duplicates
      gsap.killTweensOf(".abright_box");
      aboutAnimation();
    };

    onMounted(() => {
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      aboutAnimation();
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      // Cleanup event listeners and GSAP animations
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(".abright_box");
    });



</script>


<template>
    <section  data-color="black" class="about section container h-[300vh] flex gap-[50px] py-24 items-start flex-col md:flex-row px-4 sm:px-0">
        <div class="abcontent md:w-1/2 w-full space-y-6 md:sticky top-20">
            <p class="text-xl font-Josefin font-medium leading-snug">

                I possess a comprehensive skill set in web development and animation, adept at creating dynamic and visually appealing websites and web applications.<br>

                My combination of front-end and back-end development skills, along with advanced animation capabilities, enables me to deliver complete and compelling web solutions that meet modern standards and user expectations.
            </p>
            <h1 class="sm:text-6xl text-4xl font-normal">
                Full Stack Web Developer with PHP, Laravel & Vue JS
            </h1>
            <div class="magnet inline-block">
                <a class="inline-block border border-[#8750F7] py-4 px-7 font-normal text-[18px] capitalize"
                   href="#">Our solutions</a>
            </div>
        </div>
        <div class="abright_box translate-y-1/2 md:w-1/2 w-full">
            <div class="box_item magnet mb-5 flex justify-between p-6 border border-[#8750F7]">
                <div class="ab_box_content w-[70%]">
                    <h3 class="text-2xl font-medium mb-5">HTML & CSS</h3>
                    <p>
                        Proficient in structuring and styling web pages with clean and efficient code.
                    </p>
                </div>
                <div class="abibox_icon w-[30%] flex items-center justify-end">
                    <div class="abBox_icon_wrapper w-20">
                        <img src="/assets/img/services/html.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="box_item magnet mb-5 flex justify-between p-6 border border-[#8750F7]">
                <div class="ab_box_content w-[70%]">
                    <h3 class="text-2xl font-medium mb-5">Bootstrap & Tailwind CSS</h3>
                    <p>
                        Skilled in using these frameworks to build responsive, mobile-first websites quickly.
                    </p>
                </div>
                <div class="abibox_icon w-[30%] flex items-center justify-end">
                    <div class="abBox_icon_wrapper w-20">
                        <img src="/assets/img/services/responsive.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="box_item magnet mb-5 flex justify-between p-6 border border-[#8750F7]">
                <div class="ab_box_content w-[70%]">
                    <h3 class="text-2xl font-medium mb-5">JavaScript</h3>
                    <p>
                        Advanced knowledge in JavaScript for creating interactive and functional web elements.
                    </p>
                </div>
                <div class="abibox_icon w-[30%] flex items-center justify-end">
                    <div class="abBox_icon_wrapper w-20">
                        <img src="/assets/img/services/javascript.svg" alt="">
                    </div>
                </div>
            </div>

            <div class="box_item magnet mb-5 flex justify-between p-6 border border-[#8750F7]">
                <div class="ab_box_content w-[70%]">
                    <h3 class="text-2xl font-medium mb-5">Vue js</h3>
                    <p>
                        Experienced in building single-page applications (SPAs) with Vue.js, leveraging its reactive data binding and component-based architecture.
                    </p>
                </div>
                <div class="abibox_icon w-[30%] flex items-center justify-end">
                    <div class="abBox_icon_wrapper w-20">
                        <img src="/assets/img/services/vuejs.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="box_item magnet mb-5 flex justify-between p-6 border border-[#8750F7]">
                <div class="ab_box_content w-[70%]">
                    <h3 class="text-2xl font-medium mb-5">GSAP (GreenSock Animation Platform)</h3>
                    <p>
                        Expertise in advanced animations, creating engaging user experiences with smooth, high-performance animations.
                    </p>
                </div>
                <div class="abibox_icon w-[30%] flex items-center justify-end">
                    <div class="abBox_icon_wrapper w-20">
                        <img src="/assets/img/services/gsap-greensock.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="box_item magnet mb-5 flex justify-between p-6 border border-[#8750F7]">
                <div class="ab_box_content w-[70%]">
                    <h3 class="text-2xl font-medium mb-5">Laravel</h3>
                    <p>
                        Proficient in using Laravel for developing robust and scalable backend solutions, implementing MVC architecture, and ensuring seamless data management.
                    </p>
                </div>
                <div class="abibox_icon w-[30%] flex items-center justify-end">
                    <div class="abBox_icon_wrapper w-20">
                        <img src="/assets/img/services/laravel.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="box_item magnet mb-5 flex justify-between p-6 border border-[#8750F7]">
                <div class="ab_box_content w-[70%]">
                    <h3 class="text-2xl font-medium mb-5">MySQL</h3>
                    <p>
                        Skilled in database design, management, and optimization with MySQL, ensuring efficient data storage and retrieval.
                    </p>
                </div>
                <div class="abibox_icon w-[30%] flex items-center justify-end">
                    <div class="abBox_icon_wrapper w-20">
                        <img src="/assets/img/services/database.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>