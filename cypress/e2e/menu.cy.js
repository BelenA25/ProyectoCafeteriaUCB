// describe("Menu", () => {
//   it("deberia mostrar todo el menu disponible ", () => {
//     cy.visit("/");
//     cy.get("#mostrar-button").click();
//     cy.get("div").should("contain", "Silpancho");
//   });
//   it("deberia mostrar todo el menu disponible (sopa de mani)", () => {
//     cy.visit("/");
//     cy.get("#mostrar-button").click();
//     cy.get("div").should("contain", "Sopa de mani");

//   });
// });

describe("Menu y precio", () => {
  it("deberia mostrar el precio de cada elemento del menu", () => {
    cy.visit("/");
    cy.get("#mostrar-button").click();
    cy.get("div").should("contain", "Solo Sopa = 5 Bs.");
  });
  it("deberia mostrar el precio de cada elemento del menu", () => {
    cy.visit("/");
    cy.get("#mostrar-button").click();
    cy.get("div").should("contain", "Solo Segundo = 13 Bs.");
  });
});

describe("Stock del menu", () => {
  it("deberia mostrar el stock por defecto del menu", () => {
    cy.visit("/");
    cy.get("#mostrar-button").click();
    cy.get("#stock-segundo").should("contain", "(Stock = AGOTADO)");
  });
});
describe("Reservas del menu", () => {
  it("deberia mostrar el numero de reservas de cada elemento del menu, que al inicar son 0", () => {
    cy.visit("/");
    cy.get("#mostrar-button").click();
    cy.get("#reservas-segundo").should("contain", "(Reservas = 0)");
  });
  // it("Debería mostrar un mensaje si es que el plato no esta disponible", () => {
  //   cy.visit("/");
  //   cy.get("#mostrar-button").click();
  //   cy.get("#reservas-sopa").should("contain", "Ya no se permiten mas reservas");
  // });
  // it("Debería mostrar el formulario de reservas", () => {
  //   cy.visit("/");
  //   cy.get("#reservar-button").click();
  //   cy.get("#reserva-sopa").should("contain", "Reservar sopa:");
  // });
});