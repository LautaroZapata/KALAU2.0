document.addEventListener('DOMContentLoaded', function () {
    let menuSide = document.getElementById("menuSide");
let btnOpen = document.getElementById("btnOpen");
let body = document.getElementById("body");

    // Ejecutar function evento click
btnOpen.addEventListener("click", menuOpenClose);
// Declarar variables



// Evento para ocultar y mostrar menu

function menuOpenClose () {
    body.classList.toggle("bodyMovimiento");
    menuSide.classList.toggle("menuSideMovimiento");

}
});

