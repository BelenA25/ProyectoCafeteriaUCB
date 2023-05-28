describe("Menu y precio", () => {
  it("deberia mostrar el precio de cada elemento del menu", () => {
    cy.visit("/");
    cy.get("div").should("contain", "Solo Sopa = 5 Bs.");
  });
  it("deberia mostrar el precio de cada elemento del menu", () => {
    cy.visit("/");   
    cy.get("div").should("contain", "Solo Segundo = 13 Bs.");
  });
  it("deberia mostrar las reservas de cada elemento del menu", () => {
    cy.visit("/");   
    cy.get("th").should("contain", "Reservas");
  });
});
  // it("Debería mostrar un mensaje si es que el plato no esta disponible", () => {
  //   cy.visit("/");
  //   cy.get("#mostrar-button").click();
  //   cy.get("#reservas-sopa").should("contain", "Ya no se permiten mas reservas");
  // });
  // it("Debería mostrar el formulario de reservas", () => {
  //   cy.visit("/");
  //   cy.get("#reservar-button").click();
  //   cy.get("#reserva-sopa").should("contain", "Reservar sopa:");
  // });