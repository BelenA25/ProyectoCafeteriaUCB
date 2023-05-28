class Pedido{
    constructor(nombre){
        this.nombre=nombre;
        this.numero = 0;
    }
    agregarReserva()
    {
        this.numero = this.numero + 1;
    }
}
export default Pedido;