document.addEventListener('DOMContentLoaded', function () {
    let menuSide = document.getElementById("menuSide");
let btnOpen = document.getElementById("btnOpen");
let body = document.getElementById("body");



btnOpen.addEventListener("click", menuOpenClose);

function menuOpenClose () {
    body.classList.toggle("bodyMovimiento");
    menuSide.classList.toggle("menuSideMovimiento");
}
});