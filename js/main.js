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

const reproductor = new Audio();

reproductor.volume = 0.2;

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

// Botón de música
const btnMusica = document.getElementById("btnMusica");

btnMusica.addEventListener("click", function () {
  if (reproductor.paused) {
    reproductor.play();

    btnMusica.innerHTML = "❚❚";
  } else {
    reproductor.pause();

    btnMusica.innerHTML = "♫";
  }
});
