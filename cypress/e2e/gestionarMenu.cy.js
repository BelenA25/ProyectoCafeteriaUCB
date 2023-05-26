describe("Crear Menu", () => {
  it("debería mostrar el formulario de creacion de menu", () => {
    cy.visit("/");
    cy.get("#crear-sopa").should("contain", "Crear sopa:");
  });
  it("debería mostrar la sopa y segundo recien creados", () => {
    cy.visit("/");
    cy.get("#input-sopa-creada").type("Fideo");
    cy.get("#input-segundo-creada").type("Silpancho")
    cy.get("#crear-menu-button").click();
    cy.get("#sopa").should("contain", "Fideo");
    cy.get("#segundo").should("contain", "Silpancho");
  });
  it("debería mostrar el stock de la sopa y segundo recien creados", () => {
    cy.visit("/");
    cy.get("#input-sopa-creada").type("Fideo");
    cy.get("#input-segundo-creada").type("Silpancho")
    cy.get("#input-sopa-stock-creada").type(200);
    cy.get("#input-segundo-stock-creada").type(30)
    cy.get("#crear-menu-button").click();
    cy.get("#sopa").should("contain", "Fideo");
    cy.get("#segundo").should("contain", "Silpancho");
    cy.get("#stock-sopa").should("contain", "(Stock = 200)");
    cy.get("#stock-segundo").should("contain", "(Stock = 30)");
  });
});
describe("Editar Menu", () => {
  it("debería mostrar el formulario de edicion de menu", () => {
    cy.visit("/");
    cy.get("#editar-sopa").should("contain", "Editar sopa:");
  });
  it("debería mostrar la sopa y segundo recien editados", () => {
    cy.visit("/");
    cy.get("#input-sopa-creada").type("Fideo");
    cy.get("#input-segundo-creada").type("Silpancho");
    cy.get("#crear-menu-button").click();
    cy.get("#input-sopa-editada").type("Corbatitas");
    cy.get("#input-segundo-editada").type("Pique")
    cy.get("#editar-button").click();
    cy.get("#sopa").should("contain", "Corbatitas");
    cy.get("#segundo").should("contain", "Pique");
  });
  it("debería mostrar el stock de la sopa y segundo editados", () => {
    cy.visit("/");
    cy.get("#input-sopa-creada").type("Fideo");
    cy.get("#input-segundo-creada").type("Silpancho")
    cy.get("#input-sopa-stock-creada").type(200);
    cy.get("#input-segundo-stock-creada").type(30)
    cy.get("#crear-menu-button").click();
    cy.get("#input-sopa-stock-editada").clear()
    cy.get("#input-segundo-stock-editada").clear()
    cy.get("#input-segundo-stock-editada").type(20)
    cy.get("#input-sopa-stock-editada").type(60);
    cy.get("#editar-button").click();
    cy.get("#stock-sopa").should("contain", "(Stock = 60)");
    cy.get("#stock-segundo").should("contain", "(Stock = 20)");
  });
});