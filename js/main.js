const imagenPrincipal = document.getElementById("imagenPrincipal");
const miniaturas = document.querySelectorAll(".miniaturas img");

miniaturas.forEach(function (imagen) {
  imagen.addEventListener("click", function () {
    imagenPrincipal.src = this.src;
  });
});
