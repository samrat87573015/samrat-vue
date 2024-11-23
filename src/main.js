import './assets/main.css'
import './assets/color.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initBodyColorChangeAnimation } from "./plugins/global";
// Import plugins
import { initMagnetEffect } from './plugins/magnet';
import { initMouseFollower } from './plugins/mouseFollower';


const app = createApp(App)



router.afterEach(() => {
  setTimeout(() => {
    // Initialize global features
    initMagnetEffect();
    initMouseFollower();
    initBodyColorChangeAnimation(); // Reinitialize after navigation
    // Initialize Shery.js effects

  },100); // Delay to ensure DOM is ready
});

app.use(router)

app.mount('#app')
