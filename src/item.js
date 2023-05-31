let items = new Array();
class Item {
    
    constructor(id, nombre, descripcion, precio, categoria, stock) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
        this.reservas = 0;
    }
    agregarReserva(reserva) {
        if (this.reservas < this.stock) {
            this.reservas = this.reservas + reserva;
        }
    }
    decrementarReservas() {
        this.reservas = this.reservas - 1;
    }
    eliminar() {
        const index = items.findIndex(item => item.id === this.id);
        if (index !== -1) {
          items.splice(index, 1);
          Object.getOwnPropertyNames(this).forEach(prop => {
            this[prop] = undefined;
          });
        }
      }
    categorizarItems() { 
        const categorias = {};
        for (const item of items) {
          if (categorias[item.categoria]) { 
            categorias[item.categoria].push(item);
          } else {
            categorias[item.categoria] = [item];
          }
        }
        return categorias;
      }
      
}
export { Item, items };