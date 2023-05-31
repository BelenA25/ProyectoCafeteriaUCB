describe("Eliminar Item", () => {
    it("deberia eliminar el item del menu correctamente", () => {
      cy.visit("/");
      cy.get("#inputUsername").type("admin");
      cy.get("#inputpassword").type("password");
      cy.get("#login-button").click();

      cy.get("#input-nombre-creada").type("Sopa");
      cy.get("#input-descripcion-creada").type("Sopa de fideo");
      cy.get("#input-precio-creada").type(5);
      cy.get("#input-categoria-creada").type("Almuerzo cotidiano");
      cy.get("#input-stock-creada").type(20);
      cy.get("#crear-menu-button").click();

      cy.get(".eliminar-item").click();
      cy.get("#mostrar-items").should("contain", "");
      
    
    });

  });