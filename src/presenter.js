import Menu from "./menu.js";
import Pedido from "./pedido.js";

const form = document.querySelector("#menu-form");
const formReservas = document.querySelector("#reservar-form");
const formCrearMenu = document.querySelector("#crear-menu-form");
const formEditarMenu = document.querySelector("#editar-menu-form");
const formMisPedidos = document.querySelector("#mis-pedidos-form");
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
const stockCreadoSegundo = document.getElementById("input-segundo-stock-creada");
const nombreEditadoSopa = document.getElementById("input-sopa-editada");
const nombreEditadoSegundo = document.getElementById("input-segundo-editada");
const stockEditadoSopa = document.getElementById("input-sopa-stock-editada");
const stockEditadoSegundo = document.getElementById("input-segundo-stock-editada");
const numeroReservasSopa = document.querySelector("#input-reserva-sopa");
const numeroReservasSegundo = document.querySelector("#input-reserva-segundo");
const miPedidoSopa = document.querySelector("#mi-pedido-sopa");
const miPedidoSegundo = document.querySelector("#mi-pedido-segundo");

function comprobarAgotado(stock) {
  if (stock == 0) {
    return "AGOTADO";
  } else {
    return stock;
  }
}

function comprobarReservasSopa(menu) {
  if (menu.reservasSopa < menu.stockSopa) {
    numeroReservasSopa.disabled = false;
    return "(Reservas = " + menu.reservasSopa + ")";
  } else {
    numeroReservasSopa.value = 0;
    numeroReservasSopa.disabled = true;
    return "Ya no se permiten mas reservas";
  }
}
function comprobarReservasSegundo(menu) {
  if (menu.reservasSegundo < menu.stockSegundo) {
    numeroReservasSegundo.disabled = false;
    return "(Reservas = " + menu.reservasSegundo + ")";
  } else {
    numeroReservasSegundo.value = 0;
    numeroReservasSegundo.disabled = true;
    return "Ya no se permiten mas reservas";
  }
}
let menu = new Menu("", "");
let pedido = new Pedido();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const sopa = document.getElementById("sopa").textContent.trim();
  const segundo = document.getElementById("segundo").textContent.trim();

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

});
formReservas.addEventListener("submit", (event) => {
  event.preventDefault();

  menu.agregarReservaSopa(parseInt(numeroReservasSopa.value));
  menu.agregarReservaSegundo(parseInt(numeroReservasSegundo.value));

  pedido.agregarPedidoSegundo(parseInt(numeroReservasSegundo.value));
  pedido.agregarPedidoSopa(parseInt(numeroReservasSopa.value));

  miPedidoSopa.innerHTML = "Sopa: " + pedido.sopa;
  miPedidoSegundo.innerHTML = "Segundo: " + pedido.segundo;
});
formMisPedidos.addEventListener("submit", (event) => {
  event.preventDefault();

  menu.decrementarReservasSopa(pedido.sopa);
  menu.decrementarReservasSegundo(pedido.segundo);
  
  pedido.eliminarPedido();

  miPedidoSopa.innerHTML = "Sopa: " + pedido.sopa;
  miPedidoSegundo.innerHTML = "Segundo: " + pedido.segundo;
});
