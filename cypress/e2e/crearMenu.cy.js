describe("Crear Menu", () => {
    it("debería agregar una reserva y verificar el stock actualizado", () => {
        cy.visit("/");
        cy.get("#mostrar-button").click();
        cy.get("div").should("contain", "Silpancho");
        cy.get("#reservar-segundo-button").click(); 
        cy.get("#stock-segundo").should("have.attr", "data-stock", "4");
      });
      it("debería verificar el stock de un plato específico después de agregar reservas", () => {
        cy.visit("/");
        cy.get("#mostrar-button").click();
        cy.get("div").should("contain", "Silpancho");
        cy.get("#reservar-segundo-button").click();
        cy.get("#stock-segundo").should("have.attr", "data-stock").then((stock) => {
          const stockValue = parseInt(stock);
          expect(stockValue).to.be.greaterThan(0);
        });
      });
    //   it("debería mostrar un mensaje de reserva agotada después de alcanzar el límite de stock", () => {
    //     cy.visit("/");
    //     cy.get("#mostrar-button").click();
    //     cy.get("div").should("contain", "Sopa de mani");
    //     cy.get("#reservar-sopa-button").click({ multiple: true, force: true });
    //     cy.get("#reservas-sopa").should("contain", "Ya no se permiten más reservas");
    //   });
      
      
  });

