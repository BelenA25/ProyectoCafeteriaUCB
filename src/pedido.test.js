import Pedido from "./pedido.js";

describe("Apartado de mis pedidos", () => {
    it("deberia devolver el valor de mis reservas de la sopa", () => {
      const pedidos = new Pedido();
      pedidos.agregarPedidoSopa(2);
      pedidos.agregarPedidoSopa(3);
      expect(pedidos.sopa).toEqual(5);
    });
    it("deberia devolver el valor de mis reservas de la sopa de manera incremental", () => {
        const pedidos = new Pedido();
        pedidos.agregarPedidoSopa(2);
        pedidos.agregarPedidoSopa(3);
        expect(pedidos.sopa).toEqual(5);
      });
      it("deberia devolver el valor de mis reservas de segundo", () => {
        const pedidos = new Pedido();
        pedidos.agregarPedidoSegundo(2);
        expect(pedidos.segundo).toEqual(2);
      });
      it("deberia devolver el valor de mis reservas del segundo de manera incremental", () => {
        const pedidos = new Pedido();
        pedidos.agregarPedidoSegundo(3);
        pedidos.agregarPedidoSegundo(3);
        expect(pedidos.segundo).toEqual(6);
      });
      it("deberia poder eliminar mi pedido y reestablecerlo en 0", () => {
        const pedidos = new Pedido();
        pedidos.agregarPedidoSegundo(3);
        pedidos.agregarPedidoSegundo(3);
        pedidos.eliminarPedido();
        expect(pedidos.segundo).toEqual(0);
      });
  });