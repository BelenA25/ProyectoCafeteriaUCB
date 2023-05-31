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


  describe("Mostrar categorias", () => {
    beforeEach(() => {
      items.length = 0;
    });
    it("deberia poder elegir una categoria del menu", () => {
    
      const item1 = new Item(1, "Coca cola", "3 litros", 10, "Gaseosas", 5);
      const item2 = new Item(2, "Alfafor", "Chocolate", 20, "Postre", 3);
      const item3 = new Item(3, "Fanta", "Descripción 3", 15, "Gaseosas", 2);
      items.push(item1, item2, item3);

      const categorias = item1.categorizarItems();

      expect(categorias).toHaveProperty("Gaseosas");
      expect(categorias).toHaveProperty("Postre");
   
      expect(categorias["Gaseosas"]).toContain(item1);
      expect(categorias["Gaseosas"]).toContain(item3);
      expect(categorias["Postre"]).toContain(item2);
    });
    it("deberia poder usar solo las categorias que tengo creadas", () => {
      const item1 = new Item(1, "Coca cola", "3 litros", 10, "Gaseosas", 5);
      items.push(item1);
      const categorias = item1.categorizarItems();
      expect(categorias).toHaveProperty("Gaseosas");
      expect(categorias).not.toHaveProperty("Postre");

    });
    it("deberia poder categorizar los items del menu correctamente", () => {

      const item1 = new Item(1, "Sopa de Mani", "sopa caliente", 10, "Almuerzo", 5);
      const item2= new Item(2, "Silpancho", "carne con papas y huevo", 10, "Segundo", 5);
      const item3 = new Item(3, "Cafe", "cafe express", 10, "Cafe", 5);
      const item4 = new Item(4, "Papas fritas", "picantes", 10, "Frituras", 5);
      const item5 = new Item(5, "Panini", "jamon y queso", 10, "Comida", 5);
      items.push(item1,item2,item3,item4,item5);
      
      const categorias = item1.categorizarItems();

      expect(categorias).toHaveProperty("Almuerzo");
      expect(categorias).toHaveProperty("Segundo");
      expect(categorias).toHaveProperty("Cafe");
      expect(categorias).toHaveProperty("Frituras");
      expect(categorias).toHaveProperty("Comida");

      expect(categorias["Almuerzo"]).toContain(item1);
      expect(categorias["Segundo"]).toContain(item2);
      expect(categorias["Cafe"]).toContain(item3);
      expect(categorias["Frituras"]).toContain(item4);
      expect(categorias["Comida"]).toContain(item5);

    });

  });
