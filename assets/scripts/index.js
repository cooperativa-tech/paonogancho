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
  });
  
const opportunities = document.querySelectorAll('.title-opportunities-anim');
opportunities.forEach((el, i) => {
  setTimeout(() => {
    el.style.transform = `translate(0px, 0px)`;
    el.style.opacity = 1;
  }, 100 * i);
});

const navLinks = document.querySelector("nav").children[0].children;

for (let i = 0; i < navLinks.length; i++) {
  setTimeout(() => {
    navLinks[i].style.transform = `translate(0px, 0px)`;
    navLinks[i].style.opacity = 1;
  }, 150 * i);
}

const faces = document.querySelectorAll('.face');
const reveal = document.querySelectorAll('.reveal');
const rands = [];
for (let i = 0; i < faces.length; i++) {
  const rand = Math.random();
  if (rand > 0.5) rands.push(Math.random() * 0.5 + 0.5);
  else rands.push(Math.random() * 0.5 - 1);
}

setTimeout(() => {
  faces.forEach((el, i) => {
    if (i < 5) {
      setTimeout(() => {
        el.style.transform = `translate(0px, 0px)`;
        el.style.opacity = 1;
      }, 100 * i);
    }
  });
}, 700);

const titles = document.querySelectorAll(".reveal-title svg");

setTimeout(() => {
  whenEntersViewport();
}, 1200);

window.addEventListener("scroll", () => {
  whenEntersViewport();
  whenScrolling();
});

function whenEntersViewport() {
  faces.forEach((el, i) => {
    if (i >= 5) {
      if (inViewport(el)) {
        el.style.opacity = 1;
      }
    }
  });

  reveal.forEach((el, i) => {
    if (inViewport(el)) {
      el.style.transform = `translate(0px, 0px)`;
      el.style.opacity = 1;
    }
  });

  titles.forEach((el, i) => {
    if (inViewport(el)) {
      el.style.transform = `translate(0px, 0px)`;
      el.style.opacity = 1;
    }
  });
}

function whenScrolling() {
  faces.forEach((el, i) => {
    if (i >= 5) {
      el.style.transform =
        "translate(0px, 0px) rotate(" +
        (window.pageYOffset / 2) * rands[i] +
        "deg) scale(1)";
    }
  });
}

function inViewport(el) {
  let r, html;
  if (!el || 1 !== el.nodeType) {
    return false;
  }
  html = document.documentElement;
  r = el.getBoundingClientRect();

  return (
    !!r &&
    r.bottom >= html.clientHeight * 0.05 &&
    r.right >= 0 &&
    r.top <= html.clientHeight * 0.95 &&
    r.left <= html.clientWidth
  );
}
