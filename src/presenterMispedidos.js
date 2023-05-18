import User from "./reservar";
import Productos from "./Productos";

const form = document.querySelector("#pedidos_form");
const div = document.querySelector("#lista_reservas");
const productos_lista = document.querySelector("#items_menu");

const cliente = new User('Juan');

function mostrarProductos() {
  productos_lista.innerHTML = "";

  Productos.forEach((producto) => {
    const li = document.createElement("li");
    li.innerHTML = `${producto.nombre}: Precio: $${producto.precio} - Cantidad: ${producto.cantidad}`;
   })
};

mostrarProductos();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const reservasCliente = cliente.reservas;
  div.innerHTML = "";

  reservasCliente.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.nombre} - Precio: $${item.precio}`;
    div.appendChild(li);
      mostrarProductos();
    });
  });