describe("Editar Menu", () => {
    // it("debería permitir editar el nombre de los platos del menú", () => {
    //     cy.visit("/");
    //     const nuevoNombreSopa = "Sopa de choclo";
    //     const nuevoNombreSegundo = "Pizza";
    //     const nuevoNombreAlmuerzoCompleto = "Menú completo";
      
    //     cy.get("div:contains('Solo Sopa')").invoke("text", `Solo ${nuevoNombreSopa} = 5 Bs.`).should("contain", `Solo ${nuevoNombreSopa} = 5 Bs.`);
    //     cy.get("div:contains('Solo Segundo')").invoke("text", `Solo ${nuevoNombreSegundo} = 13 Bs.`).should("contain", `Solo ${nuevoNombreSegundo} = 13 Bs.`);
    //     cy.get("div:contains('Almuerzo completo')").invoke("text", `${nuevoNombreAlmuerzoCompleto} = 16 Bs.`).should("contain", `${nuevoNombreAlmuerzoCompleto} = 16 Bs.`);
    //   });
    //   it("debería modificar el stock del menú", () => {
    //     cy.visit("/");
    //     const nuevoStockSopa = 10;
    //     const nuevoStockSegundo = 8;
    //     cy.get("#stock-sopa").then(($stockSopa) => {
    //       $stockSopa[0].innerHTML = `Stock: ${nuevoStockSopa} <span id="stock-value-sopa"></span>`;
    //     });
    //     cy.get("#stock-segundo").then(($stockSegundo) => {
    //       $stockSegundo[0].innerHTML = `Stock: ${nuevoStockSegundo} <span id="stock-value-segundo"></span>`;
    //     });
    //     cy.get("#stock-sopa").should("contain", `Stock: ${nuevoStockSopa}`);
    //     cy.get("#stock-segundo").should("contain", `Stock: ${nuevoStockSegundo}`);
    //   });
    //   it("debería mostrar un mensaje de error si no se edita correctamente el nombre de los platos", () => {
    //     cy.visit("/");
    //     cy.get("#menu-form").submit();
    //     cy.get("#sopa").should("not.contain", "Error: Nombre inválido");
    //     cy.get("#sopa").invoke("text", "Error: Nombre inválido");
    //     cy.get("#menu-form").submit();
    //     cy.get("#error-message").should("contain", "Error: Nombre inválido");
    //   });
    //   it("debería mostrar un mensaje de éxito al editar el nombre de un plato correctamente", () => {
    //     cy.visit("/");
    //     cy.get("#sopa").invoke("text", "Sopa Editada");
    //     cy.get("#menu-form").submit();
    //     cy.get("#success-message").should("contain", "¡Nombre de plato editado exitosamente!");
    //   });
        
      
});