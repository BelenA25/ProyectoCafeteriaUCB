describe("Mis pedidos", () => {

  it("deberia mostrar el apartado de mis pedidos", () => {
    cy.visit("/");
    cy.get("#tittle-mis-pedidos").should("contain", "Mis pedidos");
  });
  // it("deberia mostrar el apartado de mis pedidos con mi  pedido realizado", () => {
  //   cy.visit("/");
  //   cy.get("#input-sopa-creada").type("Fideo");
  //   cy.get("#input-segundo-creada").type("Silpancho");
  //   cy.get("#input-sopa-stock-creada").type(200);
  //   cy.get("#input-segundo-stock-creada").type(30);
  //   cy.get("#crear-menu-button").click();
  //   cy.get("#boton-reserva-sopa").click(1);
  //   cy.get("#mi-pedido-sopa").should("contain", "Sopa: 1");
  // });
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
