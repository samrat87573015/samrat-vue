<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

// Sample team data
const teamItems = ref([
  {
    id: 1,
    name: 'Samrat',
    role: 'Full Stack Developer(PHP, Laravel, Vue JS)',
    image: '/assets/img/hero.jpg',
  },
  {
    id: 2,
    name: 'Jane Doe',
    role: 'Forntend Developer(Vue JS)',
    image: '/assets/img/team/team1.png',
  },
  {
    id: 3,
    name: 'Bob Smith',
    role: 'Backend Developer(PHP, Laravel)',
    image: '/assets/img/team/team2.png',
  },
  {
    id: 4,
    name: 'Jane smith',
    role: 'UI/UX Designer',
    image: '/assets/img/team/team3.png',
  }

]);

// Function to initialize the animation
const teamAnimation = () => {
  // Loop through each team item and add event listeners
  document.querySelectorAll('.team_item').forEach((el) => {
    const teamImg = el.querySelector('.team_img');

    // Mousemove event to animate image on hover
    el.addEventListener('mousemove', (dets) => {
      gsap.to(teamImg, {
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        scale: 1,
        ease: 'power4.out',
      });
    });

    // Mouseleave event to reset the animation
    el.addEventListener('mouseleave', () => {
      gsap.to(teamImg, {
        scale: 0,
        ease: 'power4.out',
      });
    });
  });
};

// Call team animation onMounted
onMounted(() => {
  teamAnimation();
});
</script>

<template>
  <section data-color="white" class="team_area section py-20">
    <div class="container">
      <div class="team_wrapper">
        <h2 class="text-4xl md:text-6xl capitalize text-center mb-10">Team members</h2>

        <div
          v-for="(team, index) in teamItems"
          :key="team.id"
          class="team_item group relative"
        >
          <div class="team_content relative py-10 px-5 border-b-2 border-gray-300 flex items-center justify-between overflow-hidden">
            <div class="team_index flex md:flex-row flex-col md:items-center items-start gap-5 relative z-10">
              <span class="sm:text-4xl text-xl font-bold text-gray-700 group-hover:text-gray-200">01</span>
              <h2 class="font-bold sm:text-4xl text-xl group-hover:text-white">{{ team.name }}</h2>
              <div class="mddeviceimg w-[80px] h-[80px] block md:hidden">
                <img class="w-full h-full object-cover" :src="team.image" alt=""/>
              </div>
            </div>
            <div class="team_position relative z-10">
              <span class="font-bold sm:text-xl text-xl group-hover:text-white">{{ team.role }}</span>
            </div>
          </div>

          <div class="team_img w-[200px] h-[200px] bg-red-500 rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-[0] hidden md:block">
            <img class="w-full h-full object-cover rounded-full" :src="team.image" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

