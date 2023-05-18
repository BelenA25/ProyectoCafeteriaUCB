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
    menu.agregarStockSopa(10);
    expect(menu.stockSopa).toEqual(10);
    menu.agregarStockSegundo(5);
    expect(menu.stockSegundo).toEqual(5);
  });

  it("debería verificar si hay suficiente stock para un plato", () => {
    const menu = new Menu("Sopa de Chairo", "Majadito");
    menu.agregarStockSopa(8);
    expect(menu.verificarStock("Sopa de Chairo")).toBeGreaterThan(0);
    expect(menu.verificarStock("Majadito")).toBe(0);
  });

  it("debería reducir el stock al vender un plato", () => {
    const menu = new Menu("Sopa de mani", "Silpancho");
    const platoVendido = "Sopa de mani";
    menu.agregarStockSopa(10, 5);
    const stockInicial = menu.getStockSopa(platoVendido);
    menu.venderPlato(platoVendido);
    const stockFinal = menu.getStockSopa(platoVendido);
    expect(stockFinal).toEqual(stockInicial - 1);
  });
  it("debería reducir el stock al vender un plato", () => {
    const menu = new Menu("Sopa de mani", "Silpancho");
    const platoVendido = "Silpancho";
    menu.agregarStockSegundo(8, 2);
    const stockInicial = menu.getStockSegundo(platoVendido);
    menu.venderPlato(platoVendido);
    const stockFinal = menu.getStockSegundo(platoVendido);
    expect(stockFinal).toEqual(stockInicial - 1);
  });
  it("no debería permitir agregar reservas superiores al stock disponible", () => {
    const menu = new Menu("Sopa de Pescado", "Charque");
    menu.agregarStockSopa("Sopa de Pescado", 5);
    menu.agregarStockSegundo("Charque", 3);
    menu.agregarReservaSopa(3);
    menu.agregarReservaSegundo(2);
    expect(menu.reservasSopa).toEqual(0);
    expect(menu.reservasSegundo).toEqual(0);
  });
});
