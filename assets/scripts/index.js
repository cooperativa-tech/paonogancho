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
    translateY: ["0.5em", 0],
    duration: 750,
    delay: (el, i) => 75 * i,
  })
  /*.add({
    targets: ".title-opportunities",
    opacity: 1,
    translateY: ["0.5em", 0],
    duration: 750,
    delay: (el, i) => 100 * i,
  });*/

const opportunities = document.querySelectorAll('.title-opportunities-anim');
opportunities.forEach((el, i) => {
  setTimeout(() => {
    el.style.transform = `translate(0px, 0px)`;
    el.style.opacity = 1;
  }, 100 * i);
});

const navLinks = document.querySelector('nav').children[0].children;
console.log(navLinks);

for(let i = 0; i < navLinks.length; i++){
  setTimeout(() => {
    navLinks[i].style.transform = `translate(0px, 0px)`;
    navLinks[i].style.opacity = 1;
  }, 150 * i);
}

const faces = document.querySelectorAll('.face');
faces.forEach((el, i) => {
  setTimeout(() => {
    el.style.transform = `translate(0px, 0px)`;
    el.style.opacity = 1;
  }, 200 * i);
});
