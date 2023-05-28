describe("Reservas menu", () => {
  it("debería mostrar las reservas en el menu", () => {
    cy.visit("/");
    cy.get("#input-nombre-creada").type("Sopa");
    cy.get("#input-descripcion-creada").type("Sopa de fideo");
    cy.get("#input-precio-creada").type(5);
    cy.get("#input-categoria-creada").type("Almuerzo cotidiano");
    cy.get("#input-stock-creada").type(20);
    cy.get("#crear-menu-button").click();
    cy.get("button").click();
    cy.get("td").should("contain", "1")
  });
});
