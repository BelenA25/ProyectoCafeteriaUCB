class User {
    constructor(nombre) {
        this.nombre = nombre;
        this.reservas = [];
    }
    AgregarProducto(producto){
        this.reservas.push(producto);
    }
    ReducirStock(producto){
        producto.stock--;
    }
}
  
export default User;