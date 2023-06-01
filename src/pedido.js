class Pedido{
    constructor(id,nombre, id_item){
        this.id = id;
        this.nombre = nombre;
        this.numero = 0;
        this.id_item = id_item;
        this.hora = 11;
    }
    agregarReserva()
    {
        this.numero = this.numero + 1;
    }
    agregarHora()
    {
        this.hora = this.hora + 1;
    }
}
export default Pedido;