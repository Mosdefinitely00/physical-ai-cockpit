/* systems/dashboard.js */

function updateDashboard() {
  document.querySelector(".dash-cpu span").textContent = `${Math.floor(Math.random() * 40)}%`;
  document.querySelector(".dash-mem span").textContent = `${Math.floor(Math.random() * 60)}%`;
  document.querySelector(".dash-net span").textContent = `${Math.floor(Math.random() * 120)}kb/s`;
  document.querySelector(".dash-sys span").textContent = "OK";
}

setInterval(updateDashboard, 1500);
