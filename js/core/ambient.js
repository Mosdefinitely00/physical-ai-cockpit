/* core/ambient.js */

function pulseAmbient() {
  const load = document.querySelector(".system-load");
  const health = document.querySelector(".health-dot");

  load.style.opacity = Math.random() * 0.8 + 0.2;
  health.style.opacity = Math.random() * 0.8 + 0.2;
}

setInterval(pulseAmbient, 900);
