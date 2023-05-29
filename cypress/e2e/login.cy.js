describe('Inicio de Sesión', () => {
    it('Iniciar sesión exitosamente', () => {
        cy.visit('login.html')
        // Ingresa el nombre de usuario
        cy.get('#inputUsername').type('miusuario')
        // Ingresa la contraseña
        cy.get('#inputpassword').type('micontraseña')    
    });
    it('Mostrar mensaje de error en caso de inicio de sesión incorrecto', () => {
        cy.visit('login.html')
        cy.get('#inputUsername').type('nombre_de_usuario_incorrecto')
        cy.get('#inputpassword').type('contraseña_incorrecta')
    });
});