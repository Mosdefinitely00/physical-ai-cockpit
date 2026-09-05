/* systems/autonomous.js */

const autoState = document.getElementById("autoState");

function toggleAutoMode() {
  const mode = autoState.textContent.includes("MANUAL") ? "AUTO" : "MANUAL";
  autoState.textContent = `Mode: ${mode}`;
}

setInterval(toggleAutoMode, 8000);
