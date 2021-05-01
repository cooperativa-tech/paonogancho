import anime from "animejs/lib/anime.es.js";

// Make hash links smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Animate title

anime
  .timeline({ loop: false })
  .add({
    targets: ".title-letter",
    opacity: 1,
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 100 * i,
  })
  .add({
    targets: ".title-opportunities",
    opacity: 1,
    duration: 1500,
  });
