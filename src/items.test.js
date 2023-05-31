import Item from "./item.js";

describe("Crear item", () => {
    it("debería crear un item de la cafeteria", () => {
        const item = new Item(1,"Sopa", "Sopa de verduras", 5, "Almuerzo cotidiano", 25);
        expect(item.nombre).toBe("Sopa");
        expect(item.descripcion).toBe("Sopa de verduras");
        expect(item.precio).toBe(5);
        expect(item.categoria).toBe("Almuerzo cotidiano");
        expect(item.stock).toBe(25);
    });
});

describe("Eliminar Item", () => {
    it("debería eliminar un producto creado", () => {
      const item = new Item(1, "Papitas", "Picantes", 10, "Frituras", 5);
      Item.items.push(item);
      expect(Item.items.length).toBe(1);
      item.eliminar();
      expect(Item.items.length).toBe(0);
    });
  });