import Menu from "./menu.js";

const form = document.querySelector("#menu-form");
const divSopa = document.querySelector("#sopa");
const divSegundo = document.querySelector("#segundo");
const divStockSopa = document.querySelector("#stock-sopa");
const divStockSegundo = document.querySelector("#stock-segundo");

function comprobarAgotado(stock){
  if(stock == 0){
    return "AGOTADO"
  }
  else{
    return stock;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const menu = new Menu("Sopa de mani", "Silpancho");
  menu.agregarStockSegundo(20);
  menu.agregarStockSopa(0);
  console.log(menu.sopa)
  divSopa.innerHTML = "Sopa: " + menu.sopa;
  divSegundo.innerHTML = "Segundo: " + menu.segundo;
  divStockSopa.innerHTML = "(Stock = "+ comprobarAgotado(menu.stockSopa)+")";
  divStockSegundo.innerHTML = "(Stock = "+ comprobarAgotado(menu.stockSegundo)+")";
});
