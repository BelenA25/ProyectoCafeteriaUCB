class Menu {
  constructor(sopa, segundo) {
    this.sopa = sopa;
    this.segundo = segundo;
    this.stockSopa = 0;
    this.stockSegundo = 0;
    this.reservasSopa = 0;
    this.reservasSegundo = 0;
  }
  agregarStockSopa(stock){
    this.stockSopa= stock;
  }
  agregarStockSegundo(stock){
    this.stockSegundo= stock;
  }
  agregarReservaSopa(reserva){
    this.reservaSopa = reserva;
  }
  agregarReservaSegundo(reserva){
    this.reservaSegundo = reserva;
  }
}

export default Menu;