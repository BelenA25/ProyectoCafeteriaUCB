class Item{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    mostrarItem(item) {
        console.log("Nombre: " + item.nombre);
        console.log("Precio: " + item.precio);
        console.log("Cantidad: " + item.cantidad);
    }
    
}

export default Item;