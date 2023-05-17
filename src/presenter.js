import Menu from "./menu.js";

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
const divReservasSopaHora = document.querySelector("#reservas-sopa-hora");
const divReservasSegundoHora = document.querySelector("#reservas-segundo-hora");

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

function comprobarReservasHora(menu){
  if(menu.horaReserva < 13){
    return "Cato Break aun no abre las reservas del menu"
  }
  if(menu.horaReserva > 17){
    return "Cato Break ya cerro las reservas del menu"
  }
  else
  {
    return "(Hora = "+ menu.horaReserva +")";
  }
}

function showForm() {
  document.getElementById('reservar-form').style.display = "block";
}

botonReservar.style.display='none';
formReservas.style.display='none';
form.addEventListener("submit", (event) => {
  event.preventDefault();
  botonMostrar.remove();
  botonReservar.style.display = 'block';
  const menu = new Menu("Sopa de mani", "Silpancho");

  menu.agregarStockSegundo(20);
  menu.agregarStockSopa(10);

  menu.agregarReservaSopa(10);
  menu.agregarReservaSegundo(4);
  
  divSopa.innerHTML = "Sopa: " + menu.sopa;
  divSegundo.innerHTML = "Segundo: " + menu.segundo;
  divStockSopa.innerHTML = "(Stock = "+ comprobarAgotado(menu.stockSopa)+")";
  divStockSegundo.innerHTML = "(Stock = "+ comprobarAgotado(menu.stockSegundo)+")";
  divReservasSopa.innerHTML = comprobarReservasSopa(menu);
  divReservasSegundo.innerHTML = "(Reservas = "+ menu.reservasSegundo+")";

  divReservasSopaHora.innerHTML = "(Hora = "+ menu.horaReserva+")";
  menu.agregarHoraDeEntrega(12);
  divReservasSopaHora.innerHTML = comprobarReservasHora(menu);

  divReservasSegundoHora.innerHTML = "(Hora = "+ menu.horaReserva +")";
  menu.agregarHoraDeEntrega(18);
  divReservasSegundoHora.innerHTML = comprobarReservasHora(menu);
  
});
