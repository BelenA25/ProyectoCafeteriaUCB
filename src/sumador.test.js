import Menu from "./menu.js";

describe("Crear menu", () => {
  it("deberia devolver el valor de la sopa", () => {
    const menu = new Menu("Sopa de mani", "Silpancho");
    expect(menu.sopa).toEqual("Sopa de mani");
  });
  it("deberia devolver el valor del segundo", () => {
    const menu = new Menu("Sopa de mani", "Silpancho");
    expect(menu.segundo).toEqual("Silpancho");
  });
});
