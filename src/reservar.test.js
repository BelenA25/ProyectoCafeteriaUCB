describe("Crear menu", () => {
    var cliente = new User("Juan");
    it("Debería reservar almenos un item", () => {
        cliente.AgregarProducto(new Item("Pique",10,2));
        expect(cliente.reservas).toEqual([{"nombre": "Pique", "precio": 10, "stock": 1}]);
    });
  });