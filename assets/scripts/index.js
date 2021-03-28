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

function scrollRotate(event) {
  const elements = document.querySelectorAll('[data-rotate-on-scroll="true"]');

  elements.forEach((element) => {
    styler(element).set({
      rotate: (Number(element.dataset.rotateInitial) + window.pageYOffset) / 12,
    });
  });
}
