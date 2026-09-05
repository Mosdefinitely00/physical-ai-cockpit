/* systems/predictive.js */

const predictiveStatus = document.getElementById("predictiveStatus");

function updatePredictive() {
  const risk = ["LOW", "MEDIUM", "HIGH"];
  const level = risk[Math.floor(Math.random() * risk.length)];
  predictiveStatus.textContent = `Failure Risk: ${level}`;
}

setInterval(updatePredictive, 5000);
