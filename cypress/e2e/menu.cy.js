describe("Menu", () => {
  it("deberia mostrar todo el menu disponible ", () => {
    cy.visit("/");
    cy.get("#mostrar-button").click();
    cy.get("div").should("contain", "Silpancho");
  });
  it("deberia mostrar todo el menu disponible (sopa de mani)", () => {
    cy.visit("/");
    cy.get("#mostrar-button").click();
    cy.get("div").should("contain", "Sopa de mani");

  });
});

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
  it("deberia mostrar el stock de cada elemento del menu", () => {
    cy.visit("/");
    cy.get("#mostrar-button").click();
    cy.get("div").should("contain", "(Stock = 15)");
  });
  it("deberia mostrar el stock de cada elemento del menu", () => {
    cy.visit("/");
    cy.get("#mostrar-button").click();
    cy.get("div").should("contain", "(Stock = 20)");

  });
});