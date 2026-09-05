/* systems/datasim.js */

function updateDataSim() {
  document.getElementById("sensorA").textContent = (Math.random() * 10).toFixed(2);
  document.getElementById("sensorB").textContent = (Math.random() * 10).toFixed(2);
  document.getElementById("noise").textContent = (Math.random() * 2).toFixed(2);
  document.getElementById("packet").textContent = `${Math.floor(Math.random() * 20)} p/s`;
}

setInterval(updateDataSim, 1200);
