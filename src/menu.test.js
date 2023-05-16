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
describe("Agregrar stock al menu", () => {
  it("deberia devolver el valor de stock de la sopa", () => {
    const menu = new Menu("Sopa de mani", "Silpancho");
    menu.agregarStockSopa(15);
    expect(menu.stockSopa).toEqual(15);
  });
  it("deberia devolver el valor de stock del segundo", () => {
    const menu = new Menu("Sopa de mani", "Silpancho");
    menu.agregarStockSegundo(20);
    expect(menu.stockSegundo).toEqual(20);
  });
});
describe("Agregrar reservas al menu", () => {
  it("deberia devolver el valor de reservas de la sopa", () => {
    const menu = new Menu("Sopa de mani", "Silpancho");
    menu.agregarReservaSopa(2);
    expect(menu.reservaSopa).toEqual(2);
  });
  it("deberia devolver el valor de reservas del segundo", () => {
    const menu = new Menu("Sopa de mani", "Silpancho");
    menu.agregarReservaSegundo(5);
    expect(menu.reservaSegundo).toEqual(5);
  });
});
