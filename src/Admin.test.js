import Admin from "./Admin";

describe("Iniciar Sesion como Admin", () => {
    var admin = new Admin("admin","password");
    it("Deberia iniciar sesion como admin con el nombre de usuario", () => {
        expect(admin.username).toEqual("admin");
    });
    it("Deberia iniciar sesion como admin con la contraseña", () => {
        expect(admin.password).toEqual("password");
    });
    it("Deberia iniciar sesion como admin con username y password", () => {
        expect(admin).toEqual({"password": "password", "username": "admin"});
    });
    it("Deberia iniciar sesion como admin con username y password con una funcion", () => {
        expect(admin.loginAdmin()).toEqual({"password": "password", "username": "admin"});
    });
    it("Deberia validar como admin ", () => {
        expect(admin.Admin()).toEqual(true);
    });
    it("Deberia verificar como admin ", () => {
        expect(admin.validarDatos()).toEqual(true);
    });
});