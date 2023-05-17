class User {
    constructor(nombre) {
        this.nombre = nombre;
        this.reservas = [];
    }
    AgregarProducto(producto){
        this.reservas.push(producto);
    }
    ReducirStock(producto){
        producto.cantidad--;
    }
    CalcularTotal(producto){
        var total = producto.precio * producto.cantidad;
        return total;
    }
}
  
export default User;