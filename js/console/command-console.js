/* console/command-console.js */

const output = document.getElementById("consoleOutput");
const input = document.getElementById("consoleInput");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    if (cmd.length > 0) {
      output.innerHTML += `<div>> ${cmd}</div>`;
    }
    input.value = "";
    output.scrollTop = output.scrollHeight;
  }
});
