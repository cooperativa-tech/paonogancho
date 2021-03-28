import styler from "stylefire";

// Make hash links smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Rotate stuff on scroll

const shouldAnimate = window.matchMedia("(prefers-reduced-motion: reduce)");

if (shouldAnimate)
  window.addEventListener("scroll", scrollRotate, {
    capture: true,
    passive: false,
  });

let step = 0;
let oldScroll;

function scrollRotate(event) {
  const elements = document.querySelectorAll('[data-rotate-on-scroll="true"]');
  const isUp = oldScroll > this.scrollY;

  if (isUp) step += 1;
  else step -= 1;

  oldScroll = this.scrollY;

  elements.forEach((element) => {
    styler(element).set({
      rotate: Number(element.dataset.rotateInitial) + step,
    });
  });
}
