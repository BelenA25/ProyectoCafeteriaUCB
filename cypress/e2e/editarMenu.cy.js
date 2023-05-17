describe("Editar Menu", () => {
    it("debería mostrar un mensaje cuando se agota el stock del segundo", () => {
        cy.visit("/");
        cy.get("#stock-segundo").invoke("attr", "data-stock", "0");
        cy.get("#stock-segundo").should("have.attr", "data-stock", "0");
        cy.get("#reservas-segundo").should("contain", "Ya no se permiten más reservas");
      });
    it("debería permitir editar los precios del menú", () => {
        cy.visit("/");
        const nuevoPrecioSopa = "8 Bs.";
        const nuevoPrecioSegundo = "15 Bs.";
        const nuevoPrecioAlmuerzoCompleto = "18 Bs.";
        cy.get("div:contains('Solo Sopa')").invoke("text", `Solo Sopa = ${nuevoPrecioSopa}`);
        cy.get("div:contains('Solo Segundo')").invoke("text", `Solo Segundo = ${nuevoPrecioSegundo}`);
        cy.get("div:contains('Almuerzo completo')").invoke("text", `Almuerzo completo = ${nuevoPrecioAlmuerzoCompleto}`);
        cy.get("div:contains('Solo Sopa')").should("contain", `Solo Sopa = ${nuevoPrecioSopa}`);
        cy.get("div:contains('Solo Segundo')").should("contain", `Solo Segundo = ${nuevoPrecioSegundo}`);
        cy.get("div:contains('Almuerzo completo')").should("contain", `Almuerzo completo = ${nuevoPrecioAlmuerzoCompleto}`);
    });
    it("debería permitir editar el nombre de los platos del menú", () => {
        cy.visit("/");
        const nuevoNombreSopa = "Sopa de choclo";
        const nuevoNombreSegundo = "Pizza";
        const nuevoNombreAlmuerzoCompleto = "Menú completo";
      
        cy.get("div:contains('Solo Sopa')").invoke("text", `Solo ${nuevoNombreSopa} = 5 Bs.`).should("contain", `Solo ${nuevoNombreSopa} = 5 Bs.`);
        cy.get("div:contains('Solo Segundo')").invoke("text", `Solo ${nuevoNombreSegundo} = 13 Bs.`).should("contain", `Solo ${nuevoNombreSegundo} = 13 Bs.`);
        cy.get("div:contains('Almuerzo completo')").invoke("text", `${nuevoNombreAlmuerzoCompleto} = 16 Bs.`).should("contain", `${nuevoNombreAlmuerzoCompleto} = 16 Bs.`);
      });
      
      
      
      
});