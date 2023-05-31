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
    beforeEach(() => {
        Item.items = []; 
      });
    it("debería eliminar un producto creado", () => {
      const item = new Item(1, "Papitas", "Picantes", 10, "Frituras", 5);
      Item.items.push(item);
      expect(Item.items.length).toBe(1);
      item.eliminar();
      expect(Item.items.length).toBe(0);
    });
    it("no debería eliminar un producto si no existe en la lista", () => {
        const item = new Item(1, "Papitas", "Picantes", 10, "Frituras", 5);
        Item.items.push(item);
        expect(Item.items.length).toBe(1);
        const itemNoExistente = new Item(2, "Galletas", "Vainilla", 8, "Dulces", 3);
        itemNoExistente.eliminar();
        expect(Item.items.length).toBe(1);
      });
      it("debería eliminar el producto correcto cuando hay varios en la lista", () => {
        const item1 = new Item(1, "Papitas", "Picantes", 10, "Frituras", 5);
        const item2 = new Item(2, "Galletas", "Vainilla", 8, "Dulces", 3);
        const item3 = new Item(3, "Refresco", "Cola", 15, "Bebidas", 7);
        Item.items.push(item1, item2, item3);
        expect(Item.items.length).toBe(3);
        item2.eliminar();
        expect(Item.items.length).toBe(2);
        expect(Item.items).not.toContain(item2);
      });
      it("debería eliminar varios productos de la lista", () => {
        const item1 = new Item(1, "Papitas", "Picantes", 10, "Frituras", 5);
        const item2 = new Item(2, "Chocolate", "Amargo", 20, "Dulces", 3);
        const item3 = new Item(3, "Refresco", "Cola", 15, "Bebidas", 7);
        Item.items.push(item1, item2, item3);
        expect(Item.items.length).toBe(3);
        item1.eliminar();
        item3.eliminar();
        expect(Item.items.length).toBe(1);
        expect(Item.items[0].id).toBe(2);
      });
      
  });