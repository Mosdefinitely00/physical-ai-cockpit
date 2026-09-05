/* core/cursor.js */

document.addEventListener("mousemove", (e) => {
  const root = document.documentElement;
  root.style.setProperty("--cursor-x", `${e.clientX}px`);
  root.style.setProperty("--cursor-y", `${e.clientY}px`);
});
