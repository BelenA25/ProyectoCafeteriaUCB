import Pedido from "./pedido.js";
import Item from "./item.js";

const formCrearItem = document.querySelector("#crear-menu-form");
const formEditarMenu = document.querySelector("#editar-menu-form");

let pedidos = new Array();
let items = new Array();

function editarItem(elementoEncontrado){
  document.getElementById("input-nombre-editado").value =  elementoEncontrado.nombre;
  document.getElementById("input-descripcion-editado").value =  elementoEncontrado.descripcion;
  document.getElementById("input-precio-editado").value =  elementoEncontrado.precio;
  document.getElementById("input-categoria-editado").value =  elementoEncontrado.categoria;
  document.getElementById("input-stock-editado").value =  elementoEncontrado.stock;
  
  formEditarMenu.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // items = items.filter(function(elemento) {
    //   return elemento.id !== elementoEncontrado.id;
    // });
    // console.log(items);
    let nombre = document.getElementById("input-nombre-editado").value;
    let descripcion = document.getElementById("input-descripcion-editado").value;
    let precio = document.getElementById("input-precio-editado").value;
    let categoria = document.getElementById("input-categoria-editado").value;
    let stock = document.getElementById("input-stock-editado").value;
  
    elementoEncontrado.nombre=nombre;
    elementoEncontrado.descripcion=descripcion;
    elementoEncontrado.precio=precio;
    elementoEncontrado.categoria=categoria;
    elementoEncontrado.stock=stock;
    
    console.log("Cambie items: ", items);
   mostrarMenu();
  // document.getElementById("input-nombre-editado").value= "";
  // document.getElementById("input-descripcion-editado").value =   "";
  // document.getElementById("input-precio-editado").value = "";
  // document.getElementById("input-categoria-editado").value = "";
  // document.getElementById("input-stock-editado").value = "";
  
  });
}

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
    var boton_eliminar = document.createElement("button");
    boton_eliminar.textContent = "Eliminar";
    boton_eliminar.id = pedido;
    boton_eliminar.classList.add("eliminar-reservas");
    fila.appendChild(boton_eliminar);
    tabla.appendChild(fila);
  }
  var botones = document.getElementsByClassName("eliminar-reservas");

  for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function(event) {
      var botonID = event.target.id;
      var elementoEncontrado = pedidos.find(function(pedido) {
        return parseInt(pedido.id) === parseInt(botonID);
      });
      if (elementoEncontrado) {
        items.find(function(item) {
          return parseInt(item.id) === parseInt(elementoEncontrado.id_item);
        }).decrementarReservas();
        pedidos = pedidos.filter(function(elemento) {
        return elemento !== elementoEncontrado;
      });
      mostrarPedidos();
      mostrarMenu();
      }
    });
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
      boton_reservar.classList.add("reservas-items");
      fila.appendChild(boton_reservar);
    }
    else {
      var celda_restrictiva = document.createElement("td");
      celda_restrictiva.textContent = "Ya no se permiten mas reservas";
      fila.appendChild(celda_restrictiva);
    }
    var boton_editar = document.createElement("button");
    boton_editar.textContent = "Editar";
    boton_editar.id = item;
    boton_editar.classList.add("editar-item");
    fila.appendChild(boton_editar);
    tabla.appendChild(fila);
  }

  var botones = document.getElementsByClassName("reservas-items");

  for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function(event) {
      var botonID = event.target.id;
      var elementoEncontrado = items.find(function(item) {
        return parseInt(item.id) === parseInt(botonID);
      });
      if (elementoEncontrado) {
        elementoEncontrado.agregarReserva(1);
        let pedido = new Pedido(pedidos.length, elementoEncontrado.nombre, elementoEncontrado.id);
        pedido.agregarReserva();
        pedidos.push(pedido);
        mostrarPedidos();
        mostrarMenu();
      }
    });
  }
  var botonesE = document.getElementsByClassName("editar-item");

  for (var i = 0; i < botonesE.length; i++) {
    botonesE[i].addEventListener("click", function(event) {
      var botonID = event.target.id;
      var elementoEncontrado = items.find(function(item) {
        return parseInt(item.id) === parseInt(botonID);
      });
      if (elementoEncontrado) {
        editarItem(elementoEncontrado);
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
