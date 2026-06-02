// ===============================
// GALERÍA DE IMÁGENES
// ===============================

const imagenPrincipal = document.getElementById("imagenPrincipal");
const miniaturas = document.querySelectorAll(".miniaturas img");

miniaturas.forEach(function (imagen) {
  imagen.addEventListener("click", function () {
    imagenPrincipal.src = this.src;
  });
});

// ===============================
// REPRODUCTOR DE MÚSICA
// ===============================

const playlist = ["audio/cancion1.aac", "audio/cancion2.aac"];

let indiceActual = 0;
let musicaIniciada = false;

const reproductor = new Audio();

reproductor.volume = 0.1;

reproductor.src = playlist[indiceActual];

// Cuando termina una canción
reproductor.addEventListener("ended", function () {
  indiceActual++;

  if (indiceActual >= playlist.length) {
    indiceActual = 0;
  }

  reproductor.src = playlist[indiceActual];
  reproductor.play();
});

// Iniciar música una sola vez
function iniciarMusica() {
  if (musicaIniciada) return;

  musicaIniciada = true;

  reproductor
    .play()
    .then(() => {
      console.log("Música iniciada");
    })
    .catch((error) => {
      console.error("Error reproduciendo audio:", error);
    });
}

// Primera interacción del usuario
document.addEventListener("click", iniciarMusica);
