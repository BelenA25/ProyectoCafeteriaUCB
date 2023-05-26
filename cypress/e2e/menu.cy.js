describe("Menu y precio", () => {
  it("deberia mostrar el precio de cada elemento del menu", () => {
    cy.visit("/");
    cy.get("div").should("contain", "Solo Sopa = 5 Bs.");
  });
  it("deberia mostrar el precio de cada elemento del menu", () => {
    cy.visit("/");   
    cy.get("div").should("contain", "Solo Segundo = 13 Bs.");
  });
});

describe("Stock del menu", () => {
  it("deberia mostrar el stock por defecto del menu", () => {
    cy.visit("/");
    cy.get("#stock-segundo").should("contain", "(Stock = AGOTADO)");
  });
});
describe("Reservas del menu", () => {
  it("deberia mostrar el numero de reservas de cada elemento del menu, que al inicar no se permite debido a que es 0", () => {
    cy.visit("/");
    cy.get("#reservas-segundo").should("contain", "Ya no se permiten mas reservas");
  });
});