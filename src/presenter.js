import Item from "./item.js";
import Menu from "./menu.js";
import User from "./reservar.js";

const form = document.querySelector("#menu-form");
const formReservas = document.querySelector("#reservar-form");
const botonMostrar = document.querySelector("#mostrar-button");
const botonReservar = document.querySelector("#reservar-button");
const divSopa = document.querySelector("#sopa");
const divSegundo = document.querySelector("#segundo");
const divStockSopa = document.querySelector("#stock-sopa");
const divStockSegundo = document.querySelector("#stock-segundo");
const divReservasSopa = document.querySelector("#reservas-sopa");
const divReservasSegundo = document.querySelector("#reservas-segundo");
const divPedidos = document.querySelector('#Pedidos');

function comprobarAgotado(stock){
  if(stock == 0){
    return "AGOTADO"
  }
  else{
    return stock;
  }
}

function comprobarReservasSopa(menu){
  if(menu.reservasSopa === menu.stockSopa){
    return "Ya no se permiten mas reservas"
  }
  else
  {
    return "(Reservas = "+ menu.reservasSopa+")";
  }
}
function showForm() {
  document.getElementById('reservar-form').style.display = "block";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  botonMostrar.remove();
  botonReservar.style.display = 'block';
  const menu = new Menu("Sopa de mani", "Silpancho");
  const cliente = new User("Juan");
  const sopa = new Item("Sopa de Mani",15,3);
  const segundo = new Item("Pique",10,2);
  const postre = new Item("Cheesecake",15,0);
  menu.agregarStockSegundo(20);
  menu.agregarStockSopa(10);

  menu.agregarReservaSopa(10);
  menu.agregarReservaSegundo(4);

  cliente.AgregarProducto(sopa);
  cliente.AgregarProducto(segundo);
  cliente.AgregarProducto(postre);


  divSopa.innerHTML = "Sopa: " + menu.sopa;
  divSegundo.innerHTML = "Segundo: " + menu.segundo;
  divStockSopa.innerHTML = "(Stock = "+ comprobarAgotado(menu.stockSopa)+")";
  divStockSegundo.innerHTML = "(Stock = "+ comprobarAgotado(menu.stockSegundo)+")";
  divReservasSopa.innerHTML = comprobarReservasSopa(menu);
  divReservasSegundo.innerHTML = "(Reservas = "+ menu.reservasSegundo+")";
  divPedidos.innerHTML = "(Pedidos Confirmados = " + cliente.MostrarPedidos + ")"; 
});
