import Pedido from "./pedido.js";

describe("Apartado de mis pedidos", () => {
    it("deberia devolver el valor de mis reservas de la sopa", () => {
      const pedidos = new Pedido();
      pedidos.agregarPedidoSopa(2);
      expect(pedidos.sopa).toEqual(2);
    });
  });