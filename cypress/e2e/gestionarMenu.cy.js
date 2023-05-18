describe("Crear Menu", () => {
  // it("debería agregar una reserva y verificar el stock actualizado", () => {
  //     cy.visit("/");
  //     cy.get("#mostrar-button").click();
  //     cy.get("div").should("contain", "Silpancho");
  //     cy.get("#reservar-segundo-button").click();
  //     cy.get("#stock-segundo").should("have.attr", "data-stock", "4");
  //   });
  //   it("debería verificar el stock de un plato específico después de agregar reservas", () => {
  //     cy.visit("/");
  //     cy.get("#mostrar-button").click();
  //     cy.get("div").should("contain", "Silpancho");
  //     cy.get("#reservar-segundo-button").click();
  //     cy.get("#stock-segundo").should("have.attr", "data-stock").then((stock) => {
  //       const stockValue = parseInt(stock);
  //       expect(stockValue).to.be.greaterThan(0);
  //     });
  //   });

  it("debería mostrar el formulario de creacion de menu", () => {
    cy.visit("/");
    cy.get("#crear-sopa").should("contain", "Crear sopa:");
  });
  it("debería mostrar el formulario de edicion de menu", () => {
    cy.visit("/");
    cy.get("#editar-sopa").should("contain", "Editar sopa:");
  });
  it("debería mostrar la sopa y segundo recien creados", () => {
    cy.visit("/");
    cy.get("#input-sopa-creada").type("Fideo");
    cy.get("#input-segundo-creada").type("Silpancho")
    cy.get("#crear-menu-button").click();
    cy.get("#sopa").should("contain", "Fideo");
    cy.get("#segundo").should("contain", "Silpancho");
  });
});
