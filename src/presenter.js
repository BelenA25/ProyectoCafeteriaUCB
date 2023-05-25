import { it } from "node:test";
import Item from "./item.js";
import Pedido from "./pedido.js";
import Reservas from "./reservas.js";

const form = document.querySelector("#menu-form");
const formCrearMenu = document.querySelector("#crear-menu-form");
const formEditarMenu = document.querySelector("#editar-menu-form");
const formMisPedidos = document.querySelector("#mis-pedidos-form");
const errorMessage = document.getElementById("error-message");

const nombreCreado = document.getElementById("input-producto-creado");
const descripcionCreado = document.getElementById("input-descripcion-creado");
const precioCreado = document.getElementById("input-precio-creado");
const categoriaCreado = document.getElementById("input-categoria-creado");
const stockCreado = document.getElementById("input-stock-creada");


const nombreEditado = document.getElementById("input-producto-editada");
const stockEditado = document.getElementById("input-producto-stock-editada");
const miPedido = document.querySelector("#mi-pedido");

let menu = new Item("", "",0 , "", 0);
let pedido = new Pedido();
let reservaciones = new Reservas();

document.getElementById("boton-reserva").onclick = reservar;

function reservar(evento) {
  menu.agregarReserva(1);
  pedido.agregarPedido(1);
  miPedido.innerHTML = "Producto: " + pedido.producto;
  alert("Se añadio un producto al pedido!");
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

  document.getElementById("producto").textContent = "Producto: " + menu.nombre;
  document.getElementById("stock-value-producto").textContent = "(Stock = " + comprobarAgotado(menu.stock) + ")";
  document.getElementById("reservas-producto").textContent = reservaciones.comprobarReservas(menu.reservas, menu.stock);
  
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const productoItem = document.getElementById("producto").textContent.trim();
  
  if ( productoItem === "Error: Nombre inválido"  ) {
    errorMessage.textContent = "Error: Nombre inválido";
  } else {
    errorMessage.textContent = "";
  }
 
});

window.addEventListener("load", mostrarMenu);

formCrearMenu.addEventListener("submit", (event) => {
  event.preventDefault();
  menu = new Item(nombreCreado.value, descripcionCreado.value, precioCreado.value, categoriaCreado.value, stockCreado.value);
  menu.agregarStock(stockCreado.value);
  nombreEditado.value = menu.nombre;
  stockEditado.value = menu.stock;
  mostrarMenu();
});
formEditarMenu.addEventListener("submit", (event) => {
  event.preventDefault();
  menu.actualizarNombre(nombreEditado.value);
  menu.agregarStock(stockEditado.value);
  mostrarMenu();

});
formMisPedidos.addEventListener("submit", (event) => {
  event.preventDefault();

  menu.decrementarReservas(pedido.producto);
  
  pedido.eliminarPedido();

  miPedido.innerHTML = "Producto" + pedido.producto;

});
/*import Menu from "./menu.js";
import Pedido from "./pedido.js";
import Reservas from "./reservas.js";

const form = document.querySelector("#menu-form");
const formCrearMenu = document.querySelector("#crear-menu-form");
const formEditarMenu = document.querySelector("#editar-menu-form");
const formMisPedidos = document.querySelector("#mis-pedidos-form");
const errorMessage = document.getElementById("error-message");
const nombreCreadoSopa = document.getElementById("input-sopa-creada");
const nombreCreadoSegundo = document.getElementById("input-segundo-creada");
const stockCreadoSopa = document.getElementById("input-sopa-stock-creada");
const stockCreadoSegundo = document.getElementById("input-segundo-stock-creada");
const nombreEditado = document.getElementById("input-sopa-editada");
const nombreEditadoSegundo = document.getElementById("input-segundo-editada");
const stockEditadoSopa = document.getElementById("input-sopa-stock-editada");
const stockEditadoSegundo = document.getElementById("input-segundo-stock-editada");
const miPedidoSopa = document.querySelector("#mi-pedido-sopa");
const miPedidoSegundo = document.querySelector("#mi-pedido-segundo");

let menu = new Menu("", "");
let pedido = new Pedido();
let reservaciones = new Reservas();

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

function mostrarMenu() {
  document.getElementById("sopa").textContent = "Sopa: " + menu.sopa;
  document.getElementById("stock-value-sopa").textContent = "(Stock = " + reservaciones.comprobarAgotado(menu.stockSopa) + ")";
  document.getElementById("reservas-sopa").textContent = reservaciones.comprobarReservas(menu.reservasSopa, menu.stockSopa);
  document.getElementById("segundo").textContent = "Segundo: " + menu.segundo;
  document.getElementById("stock-value-segundo").textContent = "(Stock = " + reservaciones.comprobarAgotado(menu.stockSegundo) + ")";
  document.getElementById("reservas-segundo").textContent = reservaciones.comprobarReservas(menu.reservasSegundo, menu.stockSegundo);
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

formCrearMenu.addEventListener("submit", (event) => {
  event.preventDefault();
  menu = new Menu(nombreCreadoSopa.value, nombreCreadoSegundo.value);
  menu.agregarStockSopa(stockCreadoSopa.value);
  menu.agregarStockSegundo(stockCreadoSegundo.value);
  nombreEditado.value = menu.sopa;
  nombreEditadoSegundo.value = menu.segundo;
  stockEditadoSopa.value = menu.stockSopa;
  stockEditadoSegundo.value = menu.stockSegundo;
  mostrarMenu();
});
formEditarMenu.addEventListener("submit", (event) => {
  event.preventDefault();
  menu.actualizarNombreSopa(nombreEditado.value);
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

});*/