class Menu {
  constructor(sopa, segundo) {
    this.sopa = sopa;
    this.segundo = segundo;
    this.stockSopa = 0;
    this.stockSegundo = 0;
  }
  agregarStockSopa(stock){
    this.stockSopa= stock;
  }
  agregarStockSegundo(stock){
    this.stockSegundo= stock;
  }
}

export default Menu;