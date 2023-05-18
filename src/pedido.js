class Pedido{
    constructor(){
        this.sopa=0;
        this.segundo=0;
    }
    agregarPedidoSopa(numSopa){
        this.sopa += numSopa;
    }
    agregarPedidoSegundo(numSegundos){
        this.segundo += numSegundos;
    }
    eliminarPedido(){
        this.sopa=0;
        this.segundo=0;
    }
}
export default Pedido;