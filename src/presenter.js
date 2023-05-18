import Menu from "./menu.js";

const form = document.querySelector("#menu-form");
const formReservas = document.querySelector("#reservar-form");
const formCrearMenu = document.querySelector("#crear-menu-form");
const formEditarMenu = document.querySelector("#editar-menu-form");
const botonMostrar = document.querySelector("#mostrar-button");
const botonReservar = document.querySelector("#reservar-button");
const botonCrearMenu = document.querySelector("#crear-menu-button");
const divSopa = document.querySelector("#sopa");
const divSegundo = document.querySelector("#segundo");
const divStockSopa = document.querySelector("#stock-sopa");
const divStockSegundo = document.querySelector("#stock-segundo");
const divReservasSopa = document.querySelector("#reservas-sopa");
const divReservasSegundo = document.querySelector("#reservas-segundo");
const errorMessage = document.getElementById("error-message");
const nombreCreadoSopa = document.getElementById("input-sopa-creada");
const nombreCreadoSegundo = document.getElementById("input-segundo-creada");
const stockCreadoSopa = document.getElementById("input-sopa-stock-creada");
const stockCreadoSegundo = document.getElementById(
  "input-segundo-stock-creada"
);
const nombreEditadoSopa = document.getElementById("input-sopa-editada");
const nombreEditadoSegundo = document.getElementById("input-segundo-editada");
const stockEditadoSopa = document.getElementById("input-sopa-stock-editada");
const stockEditadoSegundo = document.getElementById(
  "input-segundo-stock-editada"
);

function comprobarAgotado(stock) {
  if (stock == 0) {
    return "AGOTADO";
  } else {
    return stock;
  }
}

function comprobarReservasSopa(menu) {
  if (menu.reservasSopa <= menu.stockSopa) {
    return "(Reservas = " + menu.reservasSopa + ")";
  } else {
    return "Ya no se permiten mas reservas";
  }
}
function comprobarReservasSegundo(menu) {
  if (menu.reservasSegundo <= menu.stockSegundo) {
    return "(Reservas = " + menu.reservasSegundo + ")";
  } else {
    return "Ya no se permiten mas reservas";
  }
}
let menu = new Menu("", "");
botonReservar.style.display = "none";
//formReservas.style.display='none';
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const sopa = document.getElementById("sopa").textContent.trim();
  const segundo = document.getElementById("segundo").textContent.trim();

  botonMostrar.remove();
  botonReservar.style.display = "block";

  if (
    sopa === "Error: Nombre inválido" ||
    segundo === "Error: Nombre inválido"
  ) {
    errorMessage.textContent = "Error: Nombre inválido";
  } else {
    errorMessage.textContent = "";
  }

  divSopa.innerHTML = "Sopa: " + menu.sopa;
  divSegundo.innerHTML = "Segundo: " + menu.segundo;
  divStockSopa.innerHTML = "(Stock = " + comprobarAgotado(menu.stockSopa) + ")";
  divStockSegundo.innerHTML =
    "(Stock = " + comprobarAgotado(menu.stockSegundo) + ")";
  divReservasSopa.innerHTML = comprobarReservasSopa(menu);
  divReservasSegundo.innerHTML = comprobarReservasSegundo(menu);
});
formCrearMenu.addEventListener("submit", (event) => {
  event.preventDefault();
  menu = new Menu(nombreCreadoSopa.value, nombreCreadoSegundo.value);
  menu.agregarStockSopa(stockCreadoSopa.value);
  menu.agregarStockSegundo(stockCreadoSegundo.value);
  divSopa.innerHTML = "Sopa: " + menu.sopa;
  divSegundo.innerHTML = "Segundo: " + menu.segundo;
  divStockSopa.innerHTML = "(Stock = " + comprobarAgotado(menu.stockSopa) + ")";
  divStockSegundo.innerHTML =
    "(Stock = " + comprobarAgotado(menu.stockSegundo) + ")";
  nombreEditadoSopa.value = menu.sopa;
  nombreEditadoSegundo.value = menu.segundo;
  stockEditadoSopa.value = menu.stockSopa;
  stockEditadoSegundo.value = menu.stockSegundo;
});
formEditarMenu.addEventListener("submit", (event) => {
  event.preventDefault();
  menu.actualizarNombreSopa(nombreEditadoSopa.value);
  menu.actualizarNombreSegundo(nombreEditadoSegundo.value);
  menu.agregarStockSopa(stockEditadoSopa.value);
  menu.agregarStockSegundo(stockEditadoSegundo.value);
  divSopa.innerHTML = "Sopa: " + menu.sopa;
  divSegundo.innerHTML = "Segundo: " + menu.segundo;
  divStockSopa.innerHTML = "(Stock = " + comprobarAgotado(menu.stockSopa) + ")";
  divStockSegundo.innerHTML =
    "(Stock = " + comprobarAgotado(menu.stockSegundo) + ")";
});
