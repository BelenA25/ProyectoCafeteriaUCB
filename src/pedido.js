class Pedido{
    constructor(id,nombre, id_item){
        this.id = id;
        this.nombre = nombre;
        this.numero = 0;
        this.id_item = id_item;
    }
    agregarReserva()
    {
        this.numero = this.numero + 1;
    }
}
export default Pedido;