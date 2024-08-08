const mobileMenu = document.querySelector("#mobileMenu");
const mainMenu = document.querySelector("#mainMenu");

mobileMenu.addEventListener("click", () => {
  mainMenu.classList.toggle("invisible");
});
