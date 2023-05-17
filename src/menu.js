class Menu {
  constructor(sopa, segundo) {
    this.sopa = sopa;
    this.segundo = segundo;
    this.stockSopa = 0;
    this.stockSegundo = 0;
    this.reservasSopa = 0;
    this.reservasSegundo = 0;
    this.horaReserva = 0;
  }
  agregarStockSopa(stock){
    this.stockSopa = stock;
  }
  agregarStockSegundo(stock){
    this.stockSegundo = stock;
  }
  agregarReservaSopa(reserva){
    if(this.reservasSopa < this.stockSopa){
      this.reservasSopa  = this.reservasSopa +  reserva;
    }
  }
  agregarReservaSegundo(reserva){
    if(this.reservasSegundo < this.stockSegundo){
      this.reservasSegundo  = this.reservasSegundo +  reserva;
    }
  }
  agregarHoraDeEntrega(hora){
    this.horaReserva = hora;
  }
  
}

export default Menu;