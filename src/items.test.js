import { Item, items } from './item';

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
    let item1, item2, item3;
  
    beforeEach(() => {
      items.length = 0;
      item1 = new Item(1, "Papitas", "Picantes", 10, "Frituras", 5);
      item2 = new Item(2, "Galletas", "Vainilla", 8, "Dulces", 3);
      item3 = new Item(3, "Refresco", "Cola", 15, "Bebidas", 7);
      items.push(item1, item2, item3);
    });
  
    it("deberia eliminar un producto creado", () => {
      expect(items.length).toBe(3);
      item1.eliminar();
      expect(items.length).toBe(2);
      expect(items).not.toContain(item1);
    });
  
    it("no deberia eliminar un producto si no existe en la lista", () => {
      const itemNoExistente = new Item(4, "Galletas", "Chocolate", 12, "Dulces", 4);
      expect(items.length).toBe(3);
      itemNoExistente.eliminar();
      expect(items.length).toBe(3);
    });
  
    it("deberia eliminar el producto correcto cuando hay varios en la lista", () => {
      expect(items.length).toBe(3);
      item2.eliminar();
      expect(items.length).toBe(2);
      expect(items).not.toContain(item2);
    });
  
    it("deberia poder eliminar varios productos de la lista", () => {
      expect(items.length).toBe(3);
      item1.eliminar();
      item3.eliminar();
      expect(items.length).toBe(1);
      expect(items[0].id).toBe(2);
    });
  
    it("deberia eliminar correctamente productos en diferentes posiciones de la lista", () => {
      expect(items.length).toBe(3);
      item2.eliminar();
      expect(items.length).toBe(2);
      expect(items[0].id).toBe(1);
      expect(items[1].id).toBe(3);
    });
  
    it("deberia actualizar correctamente los atributos del objeto eliminado", () => {
      expect(items.length).toBe(3);
      item1.eliminar();
      expect(items.length).toBe(2);
      expect(item1.id).toBeUndefined();
      expect(item1.nombre).toBeUndefined();
      expect(item1.descripcion).toBeUndefined();
      expect(item1.precio).toBeUndefined();
      expect(item1.categoria).toBeUndefined();
      expect(item1.stock).toBeUndefined();
    });
  });
