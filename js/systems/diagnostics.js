/* systems/diagnostics.js */

function updateDiagnostics() {
  document.getElementById("diag-cpu").textContent = `${Math.floor(Math.random() * 40)}%`;
  document.getElementById("diag-mem").textContent = `${Math.floor(Math.random() * 60)}%`;
  document.getElementById("diag-jitter").textContent = `${(Math.random() * 5).toFixed(1)}ms`;
  document.getElementById("diag-drift").textContent = (Math.random() * 1).toFixed(2);
  document.getElementById("diag-noise").textContent = (Math.random() * 2).toFixed(2);
  document.getElementById("diag-anom").textContent = Math.floor(Math.random() * 3);
  document.getElementById("diag-stability").textContent = Math.floor(Math.random() * 100);
}

setInterval(updateDiagnostics, 1800);
