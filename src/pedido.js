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
}
export default Pedido;