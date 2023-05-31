class Item {
    static items = [];
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
    actualizarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    actualizarDescripcion(nuevaDescripcion) {
        this.descripcion = nuevaDescripcion;
    }
    actualizarPrecio(nuevoPrecio) {
        this.precio = nuevoPrecio;
    }
    actualizarCategoria(nuevaCategoria) {
        this.categoria = nuevaCategoria;
    }
    actualizarStock(nuevoStock) {
        this.stock = nuevoStock;
    }
    eliminar() {
        const index = Item.items.findIndex(item => item.id === this.id);
        if (index !== -1) {
            Item.items.splice(index, 1);
            Object.getOwnPropertyNames(this).forEach(prop => {
                this[prop] = undefined;
              });
        }
      
    }
}
export default Item;