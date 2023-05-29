describe("Crear Menu", () => {
  it("debería mostrar el formulario de creacion de menu", () => {
    cy.visit("/");
    cy.get("#crear-nombre").should("contain", "Nombre:");
  });
  it("debería mostrar la sopa recien creados", () => {
    cy.visit("/");
    cy.get("#input-nombre-creada").type("Sopa");
    cy.get("#input-descripcion-creada").type("Sopa de fideo");
    cy.get("#input-precio-creada").type(5);
    cy.get("#input-categoria-creada").type("Almuerzo cotidiano");
    cy.get("#input-stock-creada").type(20);
    cy.get("#crear-menu-button").click();
    cy.get("td").should("contain", "Sopa");
    cy.get("td").should("contain", "5");
  });
  it("debería mostrar las reservas iniciales en 0", () => {
    cy.visit("/");
    cy.get("#input-nombre-creada").type("Sopa");
    cy.get("#input-descripcion-creada").type("Sopa de fideo");
    cy.get("#input-precio-creada").type(5);
    cy.get("#input-categoria-creada").type("Almuerzo cotidiano");
    cy.get("#input-stock-creada").type(20);
    cy.get("#crear-menu-button").click();
    cy.get("td").should("contain", 0);
  });
});

  // it("debería mostrar la sopa y segundo recien editados", () => {
  //   cy.visit("/");
  //   cy.get("#input-sopa-creada").type("Fideo");
  //   cy.get("#input-segundo-creada").type("Silpancho");
  //   cy.get("#crear-menu-button").click();
  //   cy.get("#input-sopa-editada").type("Corbatitas");
  //   cy.get("#input-segundo-editada").type("Pique")
  //   cy.get("#editar-button").click();
  //   cy.get("#sopa").should("contain", "Corbatitas");
  //   cy.get("#segundo").should("contain", "Pique");
  // });
  // it("debería mostrar el stock de la sopa y segundo editados", () => {
  //   cy.visit("/");
  //   cy.get("#input-sopa-creada").type("Fideo");
  //   cy.get("#input-segundo-creada").type("Silpancho")
  //   cy.get("#input-sopa-stock-creada").type(200);
  //   cy.get("#input-segundo-stock-creada").type(30)
  //   cy.get("#crear-menu-button").click();
  //   cy.get("#input-sopa-stock-editada").clear()
  //   cy.get("#input-segundo-stock-editada").clear()
  //   cy.get("#input-segundo-stock-editada").type(20)
  //   cy.get("#input-sopa-stock-editada").type(60);
  //   cy.get("#editar-button").click();
  //   cy.get("#stock-sopa").should("contain", "(Stock = 60)");
  //   cy.get("#stock-segundo").should("contain", "(Stock = 20)");
  // });
describe("Reservas menu", () => {
  it("debería mostrar las reservas en el menu", () => {
    cy.visit("/");
    cy.get("#input-nombre-creada").type("Sopa");
    cy.get("#input-descripcion-creada").type("Sopa de fideo");
    cy.get("#input-precio-creada").type(5);
    cy.get("#input-categoria-creada").type("Almuerzo cotidiano");
    cy.get("#input-stock-creada").type(20);
    cy.get("#crear-menu-button").click();
    cy.get(".reservas-items").click();
    cy.get("#cuerpoTabla").should("contain", "1");
  });
  it("Debería mostrar un mensaje si es que el plato no esta disponible", () => {
    cy.visit("/");
    cy.get("#input-nombre-creada").type("Sopa");
    cy.get("#input-descripcion-creada").type("Sopa de fideo");
    cy.get("#input-precio-creada").type(5);
    cy.get("#input-categoria-creada").type("Almuerzo cotidiano");
    cy.get("#input-stock-creada").type(2);
    cy.get("#crear-menu-button").click();
    cy.get(".reservas-items").click();
    cy.get(".reservas-items").click();
    cy.get("td").should("contain", "Ya no se permiten mas reservas");
  });
});
describe("Editar menu", () => {
  it("debería mostrar el boton de edicion en el menu", () => {
    cy.visit("/");
    cy.get("#input-nombre-creada").type("Sopa");
    cy.get("#input-descripcion-creada").type("Sopa de fideo");
    cy.get("#input-precio-creada").type(5);
    cy.get("#input-categoria-creada").type("Almuerzo cotidiano");
    cy.get("#input-stock-creada").type(20);
    cy.get("#crear-menu-button").click();
    cy.get("#cuerpoTabla").should("contain", "Editar");
  });
});
