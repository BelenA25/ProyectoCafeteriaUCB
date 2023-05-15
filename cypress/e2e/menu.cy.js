describe("menu", () => {
    it("deberia mostrar todo el menu disponible ", () => {
      cy.visit("/");
    //   cy.get("#primer-numero").type(4);
    //   cy.get("#segundo-numero").type(5);
    //   cy.get("#sumar-button").click();
    //   cy.get("#resultado-div").should("contain", "9");
         cy.get("div").should("contain", "Silpancho");
        
    });
  });
  
  describe("menu", () => {
    it("deberia mostrar todo el menu disponible (sopa de mani)", () => {
      cy.visit("/");
    //   cy.get("#primer-numero").type(4);
    //   cy.get("#segundo-numero").type(5);
    //   cy.get("#sumar-button").click();
    //   cy.get("#resultado-div").should("contain", "9");
         cy.get("div").should("contain", "Sopa de mani");
        
    });
  });