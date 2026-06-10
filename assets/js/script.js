// Modal contatti: apertura e chiusura.

const overlay = document.getElementById("overlay-contatti");
const apri = document.getElementById("apri-contatti");
const chiudi = document.getElementById("chiudi-contatti");

apri.addEventListener("click", function () {
  overlay.removeAttribute("hidden");
});

chiudi.addEventListener("click", function () {
  overlay.setAttribute("hidden", "");
});

// Chiusura cliccando sull'overlay scuro (fuori dal modal).
overlay.addEventListener("click", function (event) {
  if (event.target === overlay) {
    overlay.setAttribute("hidden", "");
  }
});

const toggleBtn = document.getElementById("toggle-tema");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  
  // Cambia il testo del bottone
  toggleBtn.textContent = document.body.classList.contains("dark") ? "Tema chiaro" : "Tema scuro";
});