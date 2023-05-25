 class Reservas{
    constructor(reservas, stock){ 
        this.reservas = reservas;
        this.stock = stock;
   }

    comprobarReservas(reservas, stock) {
        if (reservas < stock) {
            return "(Reservas = " + reservas + ")";
        } else {
            return "Ya no se permiten mas reservas";
        }
    }

    comprobarAgotado(stock) {
        if (stock == 0) {
          return "AGOTADO";
        } else {
          return stock;
        }
    }
      
}
export default Reservas;