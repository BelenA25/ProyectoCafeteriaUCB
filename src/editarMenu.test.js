import Menu from "./menu.js";

describe("Editar el menu del dia con stock", () => {
    it("debería actualizar el nombre de la sopa en el menú", () => {
        const menu = new Menu("Sopa de Fideo", "Pique");
        const nuevoNombre = "Sopa de Verduras";
        menu.actualizarNombre(nuevoNombre);
        expect(menu.sopa).toBe(nuevoNombre);
      });
      
      
});