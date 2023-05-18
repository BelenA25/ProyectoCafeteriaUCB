describe("Mis pedidos", () => {
    it("deberia mostrar el apartado de mis pedidos", () => {
      cy.visit("/");
      cy.get("#tittle-mis-pedidos").should("contain", "Mis pedidos");
    });
  });