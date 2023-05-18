describe("Reservas menu", () => {
  it("debería mostrar las reservas en el menu", () => {
    cy.visit("/");
    cy.get("#input-sopa-creada").type("Fideo");
    cy.get("#input-segundo-creada").type("Silpancho");
    cy.get("#input-sopa-stock-creada").type(10);
    cy.get("#input-segundo-stock-creada").type(5);
    cy.get("#crear-menu-button").click();
    cy.get("#input-reserva-sopa").type(5);
    cy.get("#reserva-hecha-button").click();
    cy.get("#mostrar-button").click();
    cy.get("#reservas-sopa").should("contain", "(Reservas = 5)")
  });
});