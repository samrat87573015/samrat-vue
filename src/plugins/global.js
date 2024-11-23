import { reactive } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const currentTheme = reactive({ value: "" });

export function initBodyColorChangeAnimation() {
  const sectionElements = document.querySelectorAll(".section");
  const header = document.querySelector("header");

  sectionElements.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 20%",
      end: "bottom 80%",
      onEnter: () => {
        const color = section.dataset.color;
        document.body.setAttribute("theme", color);
        if (header) header.setAttribute("theme", color);
        currentTheme.value = color;
      },
      onEnterBack: () => {
        const color = section.dataset.color;
        document.body.setAttribute("theme", color);
        if (header) header.setAttribute("theme", color);
        currentTheme.value = color;
      },
    });
  });
}



