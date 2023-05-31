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
    it("deberia mostrar una ventana emergente de confirmacion de la eliminacion de ese item", () => {
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
  
        cy.window().then((win) => {
            cy.stub(win, "confirm").returns(true); 
            cy.get(".eliminar-item").click();
            cy.get("#mostrar-items").should("contain", ""); 
          });
        
      
      });
      it("debería mostrar un mensaje de error si el item no se elimina correctamente", () => {
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
      
        cy.window().then((win) => {
          cy.stub(win, "confirm").returns(false); 
          cy.stub(win, "alert").as("alertStub"); 
      
          cy.get(".eliminar-item").click();
      
          
          cy.get("@alertStub").should("be.calledWith", "La eliminación del item ha sido cancelada");
        });
      });
      it("debería mostrarse aun el item al cancelar la eliminacion de la misma", () => {
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
      
        cy.window().then((win) => {
          cy.stub(win, "confirm").returns(false); 
          cy.stub(win, "alert").as("alertStub"); 
      
          cy.get(".eliminar-item").click(); 
          cy.get("@alertStub").should("be.calledWith", "La eliminación del item ha sido cancelada");
          cy.get("#mostrar-items").should("contain", "Sopa");

        });
      });
  });