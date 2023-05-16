import Menu from "./menu.js";

const form = document.querySelector("#menu-form");
const div = document.querySelector("#sopa");
const div2 = document.querySelector("#segundo");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const menu = new Menu("Sopa de mani", "Silpancho");
  console.log(menu.sopa)
  div.innerHTML = menu.sopa;
  div2.innerHTML = menu.segundo;
});
