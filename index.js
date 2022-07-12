// Ejecutar function evento click
document.getElementById("btnOpen").addEventListener("click", menuOpenClose);
// Declarar variables

let menuSide = document.getElementById("menuSide");
let btnOpen = document.getElementById("btnOpen");
let body = document.getElementById("body");

// Evento para ocultar y mostrar menu

function menuOpenClose () {
    body.classList.toggle("bodyMovimiento");
    menuSide.classList.toggle("menuSideMovimiento");
}