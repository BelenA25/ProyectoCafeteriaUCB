import Item from "./item";
import User from "./reservar";

describe("Crear menu", () => {
    var cliente = new User("Juan");
    var sopa = new Item("Sopa de Mani",15,3);
    var segundo = new Item("Pique",10,2);
    it("Debería reservar almenos un item", () => {
        cliente.AgregarProducto(segundo);
        expect(cliente.reservas).toEqual([{"nombre": "Pique", "precio": 10, "stock": 2}]);
    });
    it("Debería reservar dos items", () => {
        cliente.AgregarProducto(sopa);
        expect(cliente.reservas).toEqual([{"nombre": "Pique", "precio": 10, "stock": 2}, {"nombre": "Sopa de Mani", "precio": 15, "stock": 3}]);
    });
    it("Debería reservar un item y reducir el stock", () => {
        cliente.ReducirStock(sopa);
        expect(sopa.stock).toEqual(2);
    });
  });