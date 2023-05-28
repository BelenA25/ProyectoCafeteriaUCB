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
    decrementarReservas(reserva) {
        this.reservas = this.reservas - reserva;
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
}
export default Item;