import Menu from "./menu.js";

describe("Crear el menu del dia con stock", () => {
    it("debería crear un menú con los platos especificados", () => {
        const menu = new Menu("Sopa de Fideo", "Pique");
        expect(menu.sopa).toEqual("Sopa de Fideo");
        expect(menu.segundo).toEqual("Pique");
        
      });
    
  });