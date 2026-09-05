/* systems/recovery.js */

const recoveryStatus = document.getElementById("recoveryStatus");

function updateRecovery() {
  const states = ["INACTIVE", "ACTIVE"];
  const state = states[Math.floor(Math.random() * states.length)];
  recoveryStatus.textContent = `Recovery: ${state}`;
}

setInterval(updateRecovery, 7000);
