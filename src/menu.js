class Menu {
  constructor(sopa, segundo) {
    this.sopa = sopa;
    this.segundo = segundo;
    this.stockSopa = 0;
    this.stockSegundo = 0;
    this.reservasSopa = 0;
    this.reservasSegundo = 0;

  }
  agregarStockSopa(stock, cantidad) {
    this.stockSopa = stock;
    this.StockCantidadSopa = cantidad;
  }

  agregarStockSegundo(stock, cantidad) {
    this.stockSegundo = stock;
    this.StockCantidadSegundo = cantidad;
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
}

export default Menu;