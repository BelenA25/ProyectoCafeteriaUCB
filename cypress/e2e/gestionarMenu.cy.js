describe("Crear Menu", () => {
  it("debería mostrar el formulario de creacion de menu", () => {
    cy.visit("/");
    cy.get("#inputUsername").type("admin");
    cy.get("#inputpassword").type("password");
    cy.get("#login-button").click();
    cy.get("#crear-nombre").should("contain", "Nombre:");
  });
  it("debería mostrar la sopa recien creados", () => {
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
    cy.get("td").should("contain", "Sopa");
    cy.get("td").should("contain", "5");
  });
  it("debería mostrar las reservas iniciales en 0", () => {
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
    cy.get("td").should("contain", 0);
  });
});
describe("Reservas menu", () => {
  it("debería mostrar las reservas en el menu", () => {
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
    cy.get(".reservas-items").click();
    cy.get("#cuerpoTabla").should("contain", "1");
  });
  it("Debería mostrar un mensaje si es que el plato no esta disponible", () => {
    cy.visit("/");
    cy.get("#inputUsername").type("admin");
    cy.get("#inputpassword").type("password");
    cy.get("#login-button").click();
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
    cy.get("#inputUsername").type("admin");
    cy.get("#inputpassword").type("password");
    cy.get("#login-button").click();
    cy.get("#input-nombre-creada").type("Sopa");
    cy.get("#input-descripcion-creada").type("Sopa de fideo");
    cy.get("#input-precio-creada").type(5);
    cy.get("#input-categoria-creada").type("Almuerzo cotidiano");
    cy.get("#input-stock-creada").type(20);
    cy.get("#crear-menu-button").click();
    cy.get("#cuerpoTabla").should("contain", "Editar");
  });
  it("debería recuperar los datos del item a editar en el formulario de edicion", () => {
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
    cy.get(".editar-item").click();
    cy.get("#input-nombre-editado").should("have.value","Sopa")
  });
});

describe("Categorias del menu", () => {
  it("debería mostrar las categorias que se tiene", () => {
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
  });

  it("debería mostrar una categoria en especifico", () => {
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

    cy.get("#input-nombre-creada").clear();
    cy.get("#input-descripcion-creada").clear();
    cy.get("#input-precio-creada").clear();
    cy.get("#input-categoria-creada").clear();
    cy.get("#input-stock-creada").clear();


    cy.get("#input-nombre-creada").type("Papas");
    cy.get("#input-descripcion-creada").type("Picantes");
    cy.get("#input-precio-creada").type(5);
    cy.get("#input-categoria-creada").type("Frituras");
    cy.get("#input-stock-creada").type(20);

    cy.get("#crear-menu-button").click();

    cy.get("#select-categoria").should("contain", "Frituras");

  });
  it("debería mostrar los elementos de una categoria", () => {
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

    cy.get("#input-nombre-creada").clear();
    cy.get("#input-descripcion-creada").clear();
    cy.get("#input-precio-creada").clear();
    cy.get("#input-categoria-creada").clear();
    cy.get("#input-stock-creada").clear();


    cy.get("#input-nombre-creada").type("Papas");
    cy.get("#input-descripcion-creada").type("Picantes");
    cy.get("#input-precio-creada").type(5);
    cy.get("#input-categoria-creada").type("Frituras");
    cy.get("#input-stock-creada").type(20);

    cy.get("#crear-menu-button").click();

    cy.get("#select-categoria").select("Frituras");
    cy.get("#cuerpoTabla").should("contain", "Papas");

  });
});






