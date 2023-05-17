it("debería agregar una reserva y verificar el stock actualizado", () => {
    cy.visit("/");
    cy.get("#mostrar-button").click();
    cy.get("div").should("contain", "Silpancho");
    cy.get("#reservar-segundo-button").click(); 
    cy.get("#stock-segundo").should("have.attr", "data-stock", "4");
  });
  