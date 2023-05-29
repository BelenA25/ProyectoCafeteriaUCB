describe("Mis pedidos", () => {

  it("deberia mostrar el apartado de mis pedidos", () => {
    cy.visit("index.html");
    cy.get("#tittle-mis-pedidos").should("contain", "Mis pedidos");
  });
  it("deberia mostrar el apartado de mis pedidos con mi  pedido realizado", () => {
    cy.visit("index.html");
    cy.get("#input-nombre-creada").type("Sopa");
    cy.get("#input-descripcion-creada").type("Sopa de fideo");
    cy.get("#input-precio-creada").type(5);
    cy.get("#input-categoria-creada").type("Almuerzo cotidiano");
    cy.get("#input-stock-creada").type(20);
    cy.get("#crear-menu-button").click();
    cy.get(".reservas-items").click();
    cy.get("#mis-pedidos").should("contain", "Sopa");
    cy.get("#mis-pedidos").should("contain", 1);
  });
  it("deberia mostrar el boton para eliminar un pedido", () => {
    cy.visit("index.html");
    cy.get("#input-nombre-creada").type("Sopa");
    cy.get("#input-descripcion-creada").type("Sopa de fideo");
    cy.get("#input-precio-creada").type(5);
    cy.get("#input-categoria-creada").type("Almuerzo cotidiano");
    cy.get("#input-stock-creada").type(20);
    cy.get("#crear-menu-button").click();
    cy.get(".reservas-items").click();
    cy.get("#mis-pedidos").should("contain", "Sopa");
    cy.get("#mis-pedidos").should("contain", "Eliminar");
  });
  it("deberia eliminar un pedido", () => {
    cy.visit("index.html");
    cy.get("#input-nombre-creada").type("Sopa");
    cy.get("#input-descripcion-creada").type("Sopa de fideo");
    cy.get("#input-precio-creada").type(5);
    cy.get("#input-categoria-creada").type("Almuerzo cotidiano");
    cy.get("#input-stock-creada").type(20);
    cy.get("#crear-menu-button").click();
    cy.get(".reservas-items").click();
    cy.get(".eliminar-reservas").click();
    cy.get("#cuerpoTablaPedidos").should("contain", "");

  });
  it("deberia eliminar un pedido y retornar la reserva a su valor anterior", () => {
    cy.visit("index.html");
    cy.get("#input-nombre-creada").type("Sopa");
    cy.get("#input-descripcion-creada").type("Sopa de fideo");
    cy.get("#input-precio-creada").type(5);
    cy.get("#input-categoria-creada").type("Almuerzo cotidiano");
    cy.get("#input-stock-creada").type(20);
    cy.get("#crear-menu-button").click();
    cy.get(".reservas-items").click();
    cy.get(".eliminar-reservas").click();
    cy.get("#cuerpoTabla").should("contain", "0");

  });
});
