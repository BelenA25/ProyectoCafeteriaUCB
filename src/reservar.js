class User {
    constructor(nombre) {
        this.nombre = nombre;
        this.reservas = [];
    }
    AgregarProducto(producto){
        if(producto.cantidad > 0){
            this.reservas.push(producto);
        }
    }
    ReducirStock(producto){
        producto.cantidad--;
    }
    CalcularTotalProducto(producto){
        var total = producto.precio * producto.cantidad;
        return total;
    }
    CalcularTotalPedido(){
        var total = 0;
        for(let i=0; i<this.reservas.length; i++){
            total = total + this.CalcularTotalProducto(this.reservas[i]);
        }
        return total;
    }
}
  
export default User;