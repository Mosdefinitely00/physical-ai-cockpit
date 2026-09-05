/* core/sound.js */

const consoleInput = document.getElementById("consoleInput");

consoleInput.addEventListener("keydown", () => {
  const beep = new Audio("assets/beep.mp3");
  beep.volume = 0.2;
  beep.play().catch(() => {});
});
