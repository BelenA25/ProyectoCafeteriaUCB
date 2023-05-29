describe("Mis pedidos", () => {

  it("deberia mostrar el apartado de mis pedidos", () => {
    cy.visit("/");
    cy.get("#tittle-mis-pedidos").should("contain", "Mis pedidos");
  });
  it("deberia mostrar el apartado de mis pedidos con mi  pedido realizado", () => {
    cy.visit("/");
    cy.get("#input-nombre-creada").type("Sopa");
    cy.get("#input-descripcion-creada").type("Sopa de fideo");
    cy.get("#input-precio-creada").type(5);
    cy.get("#input-categoria-creada").type("Almuerzo cotidiano");
    cy.get("#input-stock-creada").type(20);
    cy.get("#crear-menu-button").click();
    cy.get("button").click();
    cy.get("#mis-pedidos").should("contain", "Sopa");
    cy.get("#mis-pedidos").should("contain", 1);
  });
  // it("deberia eliminar mi pedido", () => {
  //   cy.visit("/");
  //   cy.get("#input-sopa-creada").type("Fideo");
  //   cy.get("#input-segundo-creada").type("Silpancho");
  //   cy.get("#input-sopa-stock-creada").type(200);
  //   cy.get("#input-segundo-stock-creada").type(30);
  //   cy.get("#crear-menu-button").click();
  //   cy.get("#boton-reserva-sopa").click();
  //   cy.get("#eliminar-button").click();
  //   cy.get("#mi-pedido-sopa").should("contain", "Sopa: 0");
  // });
});
