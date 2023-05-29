import Menu from "./menu.js";
import Pedido from "./pedido.js";
import Reservas from "./reservas.js";
import Item from "./item.js";

const formCrearItem = document.querySelector("#crear-menu-form");
const formEditarMenu = document.querySelector("#editar-menu-form");
const formMisPedidos = document.querySelector("#mis-pedidos-form");

let pedidos = new Array();
let items = new Array();

function mostrarPedidos(){
  var tabla = document.getElementById("cuerpoTablaPedidos");
 
  while (tabla.firstChild) {
    tabla.removeChild(tabla.firstChild);
  }
  for (var pedido in pedidos) {
    var fila = document.createElement("tr");
    var celda_nombre = document.createElement("td");
    celda_nombre.textContent = pedidos[pedido]["nombre"];
    fila.appendChild(celda_nombre);
    var celda_cantidad = document.createElement("td");
    celda_cantidad.textContent = pedidos[pedido]["numero"];
    fila.appendChild(celda_cantidad);
    tabla.appendChild(fila);
  }
}

function mostrarMenu() {

  var tabla = document.getElementById("cuerpoTabla");
 
  while (tabla.firstChild) {
    tabla.removeChild(tabla.firstChild);
  }
  for (var item in items) {
    var fila = document.createElement("tr");
    var celda_nombre = document.createElement("td");
    celda_nombre.textContent = items[item]["nombre"];
    fila.appendChild(celda_nombre);
    var celda_descripcion = document.createElement("td");
    celda_descripcion.textContent = items[item]["descripcion"];
    fila.appendChild(celda_descripcion);
    var celda_precio = document.createElement("td");
    celda_precio.textContent = items[item]["precio"];
    fila.appendChild(celda_precio);
    var celda_categoria = document.createElement("td");
    celda_categoria.textContent = items[item]["categoria"];
    fila.appendChild(celda_categoria);
    var celda_stock = document.createElement("td");
    celda_stock.textContent = items[item]["stock"];
    fila.appendChild(celda_stock);
    var celda_reservas = document.createElement("td");
    celda_reservas.textContent = items[item]["reservas"];
    fila.appendChild(celda_reservas);
    if(items[item]["reservas"] < items[item]["stock"])
    {
      var boton_reservar = document.createElement("button");
      boton_reservar.textContent = "+1";
      boton_reservar.id = item;
      fila.appendChild(boton_reservar);
    }
    else {
      var celda_restrictiva = document.createElement("td");
      celda_restrictiva.textContent = "Ya no se permiten mas reservas";
      fila.appendChild(celda_restrictiva);
    }
    tabla.appendChild(fila);
  }

  var botones = document.getElementsByTagName("button");

  for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function(event) {
      var botonID = event.target.id;
      var elementoEncontrado = items.find(function(item) {
        return parseInt(item.id) === parseInt(botonID);
      });
      if (elementoEncontrado) {
        elementoEncontrado.agregarReserva(1);
        let pedido = new Pedido(elementoEncontrado.nombre);
        pedido.agregarReserva();
        pedidos.push(pedido);
        mostrarPedidos();
        mostrarMenu();

      }
    });
  }
}

window.addEventListener("load", mostrarMenu);

formCrearItem.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.getElementById("input-nombre-creada");
  const descripcion = document.getElementById("input-descripcion-creada");
  const precio = document.getElementById("input-precio-creada");
  const categoria = document.getElementById("input-categoria-creada");
  const stock = document.getElementById("input-stock-creada");

  let item = new Item(
    items.length,
    nombre.value,
    descripcion.value,
    precio.value,
    categoria.value,
    stock.value
  );
  items.push(item);
  mostrarMenu();
});
formEditarMenu.addEventListener("submit", (event) => {
  event.preventDefault();
  
  mostrarMenu();
});
formMisPedidos.addEventListener("submit", (event) => {
  event.preventDefault();

  pedido.eliminarPedido();
});
