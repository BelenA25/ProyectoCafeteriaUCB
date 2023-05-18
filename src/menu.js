class Menu {
  constructor(sopa, segundo) {
    this.sopa = sopa;
    this.segundo = segundo;
    this.stockSopa = 0;
    this.stockSegundo = 0;
    this.reservasSopa = 0;
    this.reservasSegundo = 0;
    this.StockCantidadSopa=0;
    this.StockCantidadSegundo=0;
    this.precio=0;
    
  }
  agregarStockSopa(stock) {
    this.stockSopa = stock;
  }

  agregarStockSegundo(stock) {
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
  getStockSopa() {
    return Math.max(0, this.stockSopa - this.reservasSopa);
  }
  getStockSegundo() {
    return Math.max(0, this.stockSegundo - this.reservasSegundo);
  }
  verificarStock(plato) {
    if (plato === this.sopa) {
      return Math.max(0, this.stockSopa - this.reservasSopa >0);
    } else if (plato ===  this.segundo) {
      return Math.max(0, this.stockSegundo - this.reservasSegundo>0);
    } else {
      return -1; 
    }
  }
  venderPlato(plato) {
    if (plato === this.sopa) {
      if (this.getStockSopa() > 0) {
        this.reservasSopa++;
      }
    }
    else if (plato === this.segundo) {
      if (this.getStockSegundo() > 0) {
          this.reservasSegundo++;
      }
    }
  }
  actualizarNombreSopa(nuevoNombre) {
    this.sopa = nuevoNombre;
  }
  actualizarNombreSegundo(nuevoNombre) {
    this.segundo = nuevoNombre;
  }
  actualizarPrecio(nuevoPrecio) {
    this.precio = nuevoPrecio;
  }
  aumentarStock(cantidadAumento) {
    this.stock += cantidadAumento;
  }
  reducirStock(cantidadReducir) {
    this.stock -= cantidadReducir;
  }
} 
  

export default Menu;