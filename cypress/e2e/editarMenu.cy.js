describe("Editar Menu", () => {
    it("debería mostrar un mensaje cuando se agota el stock del segundo", () => {
        cy.visit("/");
        cy.get("#stock-segundo").invoke("attr", "data-stock", "0");
        cy.get("#stock-segundo").should("have.attr", "data-stock", "0");
        cy.get("#reservas-segundo").should("contain", "Ya no se permiten más reservas");
      });

});