class Item{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    MostrarItem(){
        console.log(this.nombre, this.precio, this.stock);
    }
}

export default Item;