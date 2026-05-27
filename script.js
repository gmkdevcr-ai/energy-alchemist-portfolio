const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  alert("✨ Tu sesión fue reservada correctamente ✨");

});
const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", function() {

  document.body.classList.toggle("light-mode");

});
const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", function() {

  hiddenElements.forEach(function(element) {

    const elementTop = element.getBoundingClientRect().top;

    if(elementTop < window.innerHeight - 100) {

      element.classList.add("show");

    }

  });

});