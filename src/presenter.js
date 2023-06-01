import Pedido from "./pedido.js";

import Admin from "./Admin";
import User from "./User";
import { Item, items } from "./item";

const formulario = document.querySelector("#loginForm");
const usuario = document.querySelector("#inputUsername");
const password = document.querySelector("#inputpassword");
const formCrearItem = document.querySelector("#crear-menu-form");
const formEditarMenu = document.querySelector("#editar-menu-form");
var categoriaSelected = document.getElementById("select-categoria");

categoriaSelected.addEventListener("change", actualizarMenu);
let pedidos = new Array();

function añadirElementoATabla(fila, clave, items, item) {
  var celda = document.createElement("td");
  celda.textContent = items[item][clave];
  fila.appendChild(celda);
}

function añadirBotonATabla(fila, nombre, id, clase) {
  var boton = document.createElement("button");
  boton.textContent = nombre;
  boton.id = id;
  boton.classList.add(clase);
  fila.appendChild(boton);
}

function editarItem(elementoEncontrado) {
  document.getElementById("input-nombre-editado").value =
    elementoEncontrado.nombre;
  document.getElementById("input-descripcion-editado").value =
    elementoEncontrado.descripcion;
  document.getElementById("input-precio-editado").value =
    elementoEncontrado.precio;
  document.getElementById("input-categoria-editado").value =
    elementoEncontrado.categoria;
  document.getElementById("input-stock-editado").value =
    elementoEncontrado.stock;

  formEditarMenu.addEventListener("submit", (event) => {
    event.preventDefault();

    let nombre = document.getElementById("input-nombre-editado").value;
    let descripcion = document.getElementById(
      "input-descripcion-editado"
    ).value;
    let precio = document.getElementById("input-precio-editado").value;
    let categoria = document.getElementById("input-categoria-editado").value;
    let stock = document.getElementById("input-stock-editado").value;

    elementoEncontrado.nombre = nombre;
    elementoEncontrado.descripcion = descripcion;
    elementoEncontrado.precio = precio;
    elementoEncontrado.categoria = categoria;
    elementoEncontrado.stock = stock;

    mostrarMenu();
  });
}

function mostrarPedidos() {
  var tabla = document.getElementById("cuerpoTablaPedidos");

  while (tabla.firstChild) {
    tabla.removeChild(tabla.firstChild);
  }
  for (var pedido in pedidos) {
    var fila = document.createElement("tr");
    añadirElementoATabla(fila, "nombre", pedidos, pedido);
    añadirElementoATabla(fila, "numero", pedidos, pedido);
    añadirBotonATabla(fila, "Eliminar", pedido, "eliminar-reservas");
    tabla.appendChild(fila);
  }
  eliminacionPedido();
}

function eliminacionPedido() {
  var botones = document.getElementsByClassName("eliminar-reservas");

  for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function (event) {
      var botonID = event.target.id;
      var elementoEncontrado = pedidos.find(function (pedido) {
        return parseInt(pedido.id) === parseInt(botonID);
      });

      if (elementoEncontrado) {
        items
          .find(function (item) {
            return parseInt(item.id) === parseInt(elementoEncontrado.id_item);
          })
          .decrementarReservas();
        pedidos = pedidos.filter(function (elemento) {
          return elemento !== elementoEncontrado;
        });
        mostrarMenu();
        mostrarPedidos();
      }
    });
  }
}
function realizarReservaItem(elementoEncontrado) {
  elementoEncontrado.agregarReserva(1);
  let pedido = new Pedido(
    pedidos.length,
    elementoEncontrado.nombre,
    elementoEncontrado.id
  );
  pedido.agregarReserva();
  pedidos.push(pedido);
  mostrarPedidos();
  mostrarMenu();
}
function realizarAccion(claseBotones, accion){
  var botones = document.getElementsByClassName(claseBotones);

  for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function (event) {
      var botonID = event.target.id;
      var elementoEncontrado = items.find(function (item) {
        return parseInt(item.id) === parseInt(botonID);
      });
      if (elementoEncontrado) {
        accion(elementoEncontrado);
      }
    });
  }
}
function actualizarMenu() {
  var tabla = document.getElementById("cuerpoTabla");

  while (tabla.firstChild) {
    tabla.removeChild(tabla.firstChild);
  }

  for (var item in items) {
    if (items[item]["categoria"] == categoriaSelected.value) {
      var fila = document.createElement("tr");
      añadirElementoATabla(fila, "nombre", items, item);
      añadirElementoATabla(fila, "descripcion", items, item);
      añadirElementoATabla(fila, "precio", items, item);
      añadirElementoATabla(fila, "stock", items, item);
      añadirElementoATabla(fila, "reservas", items, item);

      if (items[item]["reservas"] < items[item]["stock"]) {
        añadirBotonATabla(fila, "+1", item, "reservas-items");
      } else {
        var celda_restrictiva = document.createElement("td");
        celda_restrictiva.textContent = "Ya no se permiten mas reservas";
        fila.appendChild(celda_restrictiva);
      }
      añadirBotonATabla(fila, "Editar", item, "editar-item");
      añadirBotonATabla(fila, "Eliminar", item, "eliminar-item");
      tabla.appendChild(fila);
    }
  }
  realizarAccion("reservas-items", realizarReservaItem);
  realizarAccion("editar-item", editarItem);

  var botonesE = document.getElementsByClassName("eliminar-item");

  for (var i = 0; i < botonesE.length; i++) {
    botonesE[i].addEventListener("click", function () {
      var botonID = this.id;
      var elementoEncontrado = items.find(function (item) {
        return parseInt(item.id) === parseInt(botonID);
      });
      if (elementoEncontrado instanceof Item) {
        var confirmacion = confirm("¿Estás seguro de eliminar este item?");
        if (confirmacion) {
          elementoEncontrado.eliminar();
          if (items.indexOf(elementoEncontrado) === -1) {
            alert("El item se eliminó correctamente");
            mostrarMenu();
          } else {
            alert("Error al eliminar el item");
          }
        } else {
          alert("La eliminación del item ha sido cancelada");
        }
      }
    });
  }
}

function mostrarMenu() {
  categoriaSelected.innerHTML = "";
  var categorias = [...new Set(items.map((Item) => Item.categoria))];

  categorias.forEach(function (valor) {
    var optionElement = document.createElement("option");
    optionElement.text = valor;
    optionElement.value = valor;
    categoriaSelected.appendChild(optionElement);
  });
  actualizarMenu();
}

function mostrarContenidoAdmin(esAdmin) {
  const elementosAdmin = document.getElementsByClassName("admin-only");
  if (esAdmin) {
    for (let i = 0; i < elementosAdmin.length; i++) {
      elementosAdmin[i].style.display = "block";
    }
    formCrearItem.style.display = "block";
    formEditarMenu.style.display = "block";
  } else {
    for (let i = 0; i < elementosAdmin.length; i++) {
      elementosAdmin[i].style.display = "none";
    }
    formCrearItem.style.display = "none";
    formEditarMenu.style.display = "none";
  }
}
function mostrarContenidoUsuario(esUsuario) {
  const elementosUsuario = document.getElementsByClassName("user-only");

  if (esUsuario) {
    for (let i = 0; i < elementosUsuario.length; i++) {
      // elementosUsuario[i].style.display = "block";
      elementosUsuario[i].style.display = "table-cell";
      elementosUsuario[i].setAttribute("valign", "middle");
    }
  } else {
    for (let i = 0; i < elementosUsuario.length; i++) {
      elementosUsuario[i].style.display = "none";
    }
  }
}

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

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  var admin = new Admin(usuario.value, password.value);
  var user = new User(usuario.value, password.value);
  if (admin.Admin()) {
    alert("Welcome Admin!");
    mostrarContenidoAdmin(true);
    mostrarContenidoUsuario(false);
  } else if (!admin.validarDatos()) {
    alert("Un campo esta vacío o incorrecto, Inténtelo nuevamente!");
  } else if (user.Usuario()) {
    alert("Welcome User!");
    mostrarContenidoAdmin(false);
    mostrarContenidoUsuario(true);
  } else if (user.VerifyData()) {
    alert("Un campo esta vacío o incorrecto, Inténtelo nuevamente!");
  }
});
