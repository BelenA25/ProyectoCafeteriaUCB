import Pedido from "./pedido.js";

describe("Apartado de mis pedidos", () => {
    it("deberia devolver el valor de mis reservas de la sopa", () => {
      const pedidos = new Pedido();
      pedidos.agregarPedido(2);
      pedidos.agregarPedido(3);
      expect(pedidos.producto).toEqual(5);
    });
    it("deberia devolver el valor de mis reservas de la sopa de manera incremental", () => {
        const pedidos = new Pedido();
        pedidos.agregarPedido(2);
        pedidos.agregarPedido(3);
        expect(pedidos.producto).toEqual(5);
      });
      it("deberia devolver el valor de mis reservas de segundo", () => {
        const pedidos = new Pedido();
        pedidos.agregarPedido(2);
        expect(pedidos.producto).toEqual(2);
      });
      it("deberia devolver el valor de mis reservas del segundo de manera incremental", () => {
        const pedidos = new Pedido();
        pedidos.agregarPedido(3);
        pedidos.agregarPedido(3);
        expect(pedidos.producto).toEqual(6);
      });
      it("deberia poder eliminar mi pedido y reestablecerlo en 0", () => {
        const pedidos = new Pedido();
        pedidos.agregarPedido(3);
        pedidos.agregarPedido(3);
        pedidos.eliminarPedido();
        expect(pedidos.producto).toEqual(0);
      });
  });