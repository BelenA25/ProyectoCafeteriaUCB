class Pedido{
    constructor(){
        this.producto=0;
    }
    agregarPedido(num){
        this.producto += num;
    }
    eliminarPedido(){
        this.producto=0;
    }
}
export default Pedido;
