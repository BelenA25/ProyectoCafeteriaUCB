import Menu from "./menu.js";

describe("Crear el menu del dia con stock", () => {
    it("debería crear un menú con los platos especificados", () => {
        const menu = new Menu("Sopa de Fideo", "Pique");
        expect(menu.sopa).toEqual("Sopa de Fideo");
        expect(menu.segundo).toEqual("Pique");
        
    }); 
    it("debería establecer un stock inicial de cero para los platos del menú", () => {
        const menu = new Menu("Sopa de Choclo", "Laping");
        expect(menu.stockSopa).toEqual(0);
        expect(menu.stockSegundo).toEqual(0);
      });

      it("debería aumentar el stock cuando se agregan platos al menú", () => {
        const menu = new Menu("Sopa de Arroz", "Asado");
        menu.agregarStockSopa("Sopa de Arroz", 10);
        expect(menu.StockCantidadSopa).toEqual(10);
        menu.agregarStockSegundo("Asado", 5);
        expect(menu.StockCantidadSegundo).toEqual(5);
      });
});