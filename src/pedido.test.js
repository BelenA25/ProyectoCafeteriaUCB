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
  });