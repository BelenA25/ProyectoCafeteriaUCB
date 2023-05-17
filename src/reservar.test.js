import Item from "./item";
import User from "./reservar";

describe("Crear Reservar Producto", () => {
    var cliente = new User("Juan");
    var sopa = new Item("Sopa de Mani",15,3);
    var segundo = new Item("Pique",10,2);
    it("Debería reservar almenos un item", () => {
        cliente.AgregarProducto(segundo);
        expect(cliente.reservas).toEqual([{"nombre": "Pique", "precio": 10, "cantidad": 2}]);
    });
    it("Debería reservar dos items", () => {
        cliente.AgregarProducto(sopa);
        expect(cliente.reservas).toEqual([{"nombre": "Pique", "precio": 10, "cantidad": 2}, {"nombre": "Sopa de Mani", "precio": 15, "cantidad": 3}]);
    });
    it("Debería reservar un item y reducir el stock", () => {
        cliente.ReducirStock(segundo);
        expect(segundo.cantidad).toEqual(1);
    });
    it("Calcular el total del a pagar de un producto", () => {
        expect(cliente.CalcularTotal(sopa)).toEqual(45);
    });
  });