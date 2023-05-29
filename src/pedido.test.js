import Pedido from "./pedido.js";

describe("Apartado de mis pedidos", () => {
    it("deberia devolver el valor de mi reserva de la sopa", () => {
      const pedidos = new Pedido(1,"Sopa");
      expect(pedidos.nombre).toEqual("Sopa");
    });
      it("deberia devolver el valor numerico de reserva", () => {
        const pedidos = new Pedido(1,"Sopa");
        pedidos.agregarReserva();
        expect(pedidos.numero).toEqual(1);
      });
      it("deberia devolver el valor de mis reservas del segundo de manera incremental", () => {
        const pedidos = new Pedido(1,"Sopa");
        pedidos.agregarReserva();
        pedidos.agregarReserva();
        expect(pedidos.numero).toEqual(2);
     });
      // it("deberia poder eliminar mi pedido y reestablecerlo en 0", () => {
      //   const pedidos = new Pedido();
      //   pedidos.agregarPedidoSegundo(3);
      //   pedidos.agregarPedidoSegundo(3);
      //   pedidos.eliminarPedido();
      //   expect(pedidos.segundo).toEqual(0);
      // });
  });