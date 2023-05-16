import Menu from "./menu.js";

const form = document.querySelector("#menu-form");
const divSopa = document.querySelector("#sopa");
const divSegundo = document.querySelector("#segundo");
const divStockSopa = document.querySelector("#stock-sopa");
const divStockSegundo = document.querySelector("#stock-segundo");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const menu = new Menu("Sopa de mani", "Silpancho");
  menu.agregarStockSegundo(20);
  menu.agregarStockSopa(15);
  console.log(menu.sopa)
  divSopa.innerHTML = menu.sopa;
  divSegundo.innerHTML = menu.segundo;
  divStockSopa.innerHTML = "(Stock = "+menu.stockSopa+")";
  divStockSegundo.innerHTML = "(Stock = "+menu.stockSegundo+")";
});
