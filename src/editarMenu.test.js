import Menu from "./menu.js";

describe("Editar el menu del dia con stock", () => {
    it("debería actualizar el nombre de la sopa en el menú", () => {
        const menu = new Menu("Sopa de Fideo", "Pique");
        const nuevoNombre = "Sopa de Verduras";
        menu.actualizarNombreSopa(nuevoNombre);
        expect(menu.sopa).toBe(nuevoNombre);
      });
      it("debería actualizar el nombre del segundo", () => {
        const menu = new Menu("Sopa de Fideo", "Pique");
        const nuevoNombre = "Silpancho";
        menu.actualizarNombreSegundo(nuevoNombre);
        expect(menu.segundo).toBe(nuevoNombre);
      });
    it("debería actualizar el precio del plato en el menú", () => {
        const menu = new Menu("Sopa de Fideo", "Pique");
        const nuevoPrecio = 18;
        menu.actualizarPrecio(nuevoPrecio);
        expect(menu.precio).toBe(nuevoPrecio);
    });
    it("debería aumentar el stock disponible del plato en el menú", () => {
        
        const menu = new Menu("Sopa de Fideo", "Pique");
        const cantidadAumento = 5;
        const stockInicial = menu.stock;
        menu.aumentarStock(cantidadAumento);
        expect(menu.stock).toBe(stockInicial + cantidadAumento);
    });
    it("debería disminuir el stock disponible del plato en el menú", () => {
      
        const menu = new Menu("Sopa de Fideo", "Pique");
        const cantidadReduccion = 3;
        const stockInicial = menu.stock;
        menu.reducirStock(cantidadReduccion);
        expect(menu.stock).toBe(stockInicial - cantidadReduccion);
    });

});