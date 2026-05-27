const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  alert("✨ Tu sesión fue reservada correctamente ✨");

});
const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", function() {

  document.body.classList.toggle("light-mode");

});