describe('Inicio de Sesión', () => {
    it('Iniciar sesión exitosamente', () => {
        cy.visit('/')
        // Ingresa el nombre de usuario
        cy.get('#inputUsername').type('admin')
        // Ingresa la contraseña
        cy.get('#inputpassword').type('password')    
    });
    it('Mostrar mensaje de error en caso de inicio de sesión incorrecto', () => {
        cy.visit('/')
        cy.get('#inputUsername').type('nombre_de_usuario_incorrecto')
        cy.get('#inputpassword').type('contraseña_incorrecta')
    });
});