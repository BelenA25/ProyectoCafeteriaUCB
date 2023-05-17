class User {
    constructor(nombre) {
        this.nombre = nombre;
        this.reservas = [];
    }

    AgregarProducto(producto){
        this.reservas.push(producto);
        producto.stock--;
    }
}
  
export default User;