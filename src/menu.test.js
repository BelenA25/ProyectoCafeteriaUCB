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
    menu.agregarStockSopa(10);
    menu.agregarReservaSopa(2);
    expect(menu.reservasSopa).toEqual(2);
  });
  it("deberia devolver el valor de reservas del segundo", () => {
    const menu = new Menu("Sopa de mani", "Silpancho");
    menu.agregarStockSegundo(20);
    menu.agregarReservaSegundo(5);
    expect(menu.reservasSegundo).toEqual(5);
  });
  it("el valor de reservas deberia ser incremental", () => {
    const menu = new Menu("Sopa de mani", "Silpancho");
    menu.agregarStockSegundo(15);
    menu.agregarReservaSegundo(2);
    menu.agregarReservaSegundo(1);
    menu.agregarReservaSegundo(3);
    expect(menu.reservasSegundo).toEqual(6);
  });
  it("el valor de reservas deberia ser incremental", () => {
    const menu = new Menu("Sopa de mani", "Silpancho");
    menu.agregarStockSopa(15);
    menu.agregarReservaSopa(2);
    menu.agregarReservaSopa(1);
    menu.agregarReservaSopa(3);
    expect(menu.reservasSopa).toEqual(6);
  });
  it("el valor de reservas no debe sobrepasar el stock (limite de reservas) de la sopa", () => {
    const menu = new Menu("Sopa de mani", "Silpancho");
    menu.agregarStockSopa(15);
    menu.agregarReservaSopa(15);
    menu.agregarReservaSopa(1);
    expect(menu.reservasSopa).toEqual(15);
  });
  it("el valor de reservas no debe sobrepasar el stock (limite de reservas) del segundo", () => {
    const menu = new Menu("Sopa de mani", "Silpancho");
    menu.agregarStockSegundo(15);
    menu.agregarReservaSegundo(15);
    menu.agregarReservaSegundo(1);
    expect(menu.reservasSegundo).toEqual(15);
  });
});

  describe("Agregrar hora de reserva de Producto", () => {
    it("Deberia pedirme una hora aproximada de entrega del pedido", () =>{
      const menu = new Menu("Sopa de mani", "Silpancho");
      menu.agregarStockSopa(10);
      menu.agregarReservaSopa(2);
      menu.agregarHoraDeEntrega(13);
      expect(menu.horaReserva).toEqual(13);
    }); 
  
});
