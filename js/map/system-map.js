/* map/system-map.js */

const canvas = document.getElementById("mapCanvas");
const ctx = canvas.getContext("2d");

function drawMap() {
  ctx.fillStyle = "#0f172a";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#4fd1ff";
  for (let i = 0; i < 20; i++) {
    ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 4, 4);
  }
}

setInterval(drawMap, 1000);
