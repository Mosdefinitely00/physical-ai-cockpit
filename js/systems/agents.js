/* systems/agents.js */

function updateAgents() {
  const statuses = ["OK", "WARN", "FAIL"];
  document.getElementById("agentAlpha").textContent = statuses[Math.floor(Math.random() * 3)];
  document.getElementById("agentBeta").textContent = statuses[Math.floor(Math.random() * 3)];
  document.getElementById("agentGamma").textContent = statuses[Math.floor(Math.random() * 3)];
}

setInterval(updateAgents, 4000);
