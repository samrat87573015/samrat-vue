import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let lenis;

export function initLenis() {
  if (!lenis) {
    gsap.registerPlugin(ScrollTrigger);

    lenis = new Lenis({
      smooth: true,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // GSAP Ticker for Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // GSAP time in milliseconds
    });

    // Disable GSAP lag smoothing
    gsap.ticker.lagSmoothing(0);
  }

  return lenis;
}

export function destroyLenis() {
  if (lenis) {
    gsap.ticker.remove((time) => lenis.raf(time * 1000));
    lenis.destroy();
    lenis = null;
  }
}
