import Menu from "./menu.js";
import Pedido from "./pedido.js";
import Reservas from "./reservas.js";
import Item from "./item.js";

const form = document.querySelector("#menu-form");
const formCrearItem = document.querySelector("#crear-menu-form");
const formEditarMenu = document.querySelector("#editar-menu-form");
const formMisPedidos = document.querySelector("#mis-pedidos-form");
const errorMessage = document.getElementById("error-message");
const nombreCreadoSopa = document.getElementById("input-sopa-creada");
const nombreCreadoSegundo = document.getElementById("input-segundo-creada");
const stockCreadoSopa = document.getElementById("input-sopa-stock-creada");
const stockCreadoSegundo = document.getElementById("input-segundo-stock-creada");
const nombreEditadoSopa = document.getElementById("input-sopa-editada");
const nombreEditadoSegundo = document.getElementById("input-segundo-editada");
const stockEditadoSopa = document.getElementById("input-sopa-stock-editada");
const stockEditadoSegundo = document.getElementById("input-segundo-stock-editada");
const miPedidoSopa = document.querySelector("#mi-pedido-sopa");
const miPedidoSegundo = document.querySelector("#mi-pedido-segundo");

let menu = new Menu("", "");
let pedido = new Pedido();
let reservaciones = new Reservas();
let items = new Array();

document.getElementById("boton-reserva-sopa").onclick = reservarSopa;
document.getElementById("boton-reserva-segundo").onclick = reservarSegundo;  

function reservarSopa(evento) {
  menu.agregarReservaSopa(1);
  pedido.agregarPedidoSopa(1);
  miPedidoSopa.innerHTML = "Sopa: " + pedido.sopa;
  alert("Se añadio una sopa al pedido!");
  mostrarMenu();
}

function reservarSegundo(evento) {
  menu.agregarReservaSegundo(1);
  pedido.agregarPedidoSegundo(1);
  miPedidoSegundo.innerHTML = "Segundo: " + pedido.segundo;
  alert("Se añadio un segundo al pedido!");
  mostrarMenu();
}

function comprobarAgotado(stock) {
  if (stock == 0) {
    return "AGOTADO";
  } else {
    return stock;
  }
}

function mostrarMenu() {
  const sopa = document.getElementById("sopa");
  const stockSopa = document.getElementById("stock-value-sopa");
  const reservasSopa = document.getElementById("reservas-sopa");
  const segundo = document.getElementById("segundo");
  const stockSegundo = document.getElementById("stock-value-segundo");
  const reservasSegundo = document.getElementById("reservas-segundo");

  sopa.textContent = "Sopa: " + menu.sopa;
  stockSopa.textContent = "(Stock = " + comprobarAgotado(menu.stockSopa) + ")";
  //reservasSopa.textContent = comprobarReservas(menu.reservasSopa, menu.stockSopa);
  reservasSopa.textContent = reservaciones.comprobarReservas(menu.reservasSopa, menu.stockSopa);
  segundo.textContent = "Segundo: " + menu.segundo;
  stockSegundo.textContent = "(Stock = " + comprobarAgotado(menu.stockSegundo) + ")";
  reservasSegundo.textContent = reservaciones.comprobarReservas(menu.reservasSegundo, menu.stockSegundo);
  // console.log(comprobarReservas(menu.reservasSegundo, menu.stockSegundo));
}
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

 
});

window.addEventListener("load", mostrarMenu);

formCrearItem.addEventListener("submit", (event) => {
  event.preventDefault();
  // menu = new Menu(nombreCreadoSopa.value, nombreCreadoSegundo.value);
  // menu.agregarStockSopa(stockCreadoSopa.value);
  // menu.agregarStockSegundo(stockCreadoSegundo.value);
  const nombre = document.getElementById("input-nombre-creada");
  const descripcion = document.getElementById("input-descripcion-creada");
  const precio = document.getElementById("input-precio-creada");
  const categoria = document.getElementById("input-categoria-creada");
  const stock = document.getElementById("input-stock-creada");

  let item = new Item(nombre.value, descripcion.value, precio.value, categoria.value, stock.value);
  items.push(item);
  console.log(item)
  // nombreEditadoSopa.value = menu.sopa;
  // nombreEditadoSegundo.value = menu.segundo;
  // stockEditadoSopa.value = menu.stockSopa;
  // stockEditadoSegundo.value = menu.stockSegundo;
  mostrarMenu();
});
formEditarMenu.addEventListener("submit", (event) => {
  event.preventDefault();
  menu.actualizarNombreSopa(nombreEditadoSopa.value);
  menu.actualizarNombreSegundo(nombreEditadoSegundo.value);
  menu.agregarStockSopa(stockEditadoSopa.value);
  menu.agregarStockSegundo(stockEditadoSegundo.value);
  mostrarMenu();

});
formMisPedidos.addEventListener("submit", (event) => {
  event.preventDefault();

  menu.decrementarReservasSopa(pedido.sopa);
  menu.decrementarReservasSegundo(pedido.segundo);
  
  pedido.eliminarPedido();

  miPedidoSopa.innerHTML = "Sopa: " + pedido.sopa;
  miPedidoSegundo.innerHTML = "Segundo: " + pedido.segundo;

});