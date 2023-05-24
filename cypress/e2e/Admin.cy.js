import Admin from "../../src/Admin";

describe("Iniciar Sesion", () => {
    cy.visit("/");
    cy.get("#mostrar-button").click();
    cy.get("div").should("contain", "Solo Sopa = 5 Bs.");
  });