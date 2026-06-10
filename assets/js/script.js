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

//Funzionalità cambio tema
const toggleBtn = document.getElementById("toggle-tema");

toggleBtn.addEventListener("click", function () {
  //Aggiunge o toglie la classe 'dark' dal body
  document.body.classList.toggle("dark");
  
  //Aggiorna il testo del bottone in base al tema attivo
  toggleBtn.textContent = document.body.classList.contains("dark") ? "Tema chiaro" : "Tema scuro";
});
