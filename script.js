const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  alert("✨ Tu sesión fue reservada correctamente ✨");

});

const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", function() {

  document.body.classList.toggle("light-mode");

});

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", function() {

  navMenu.classList.toggle("active");

});