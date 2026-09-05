/* core/holographic.js */

const holoElements = document.querySelectorAll(".holo-hover");

holoElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    el.style.boxShadow = "0 0 24px rgba(79, 209, 255, 0.45)";
  });

  el.addEventListener("mouseleave", () => {
    el.style.boxShadow = "none";
  });
});
