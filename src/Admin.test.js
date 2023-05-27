import Admin from "./Admin";

describe("Iniciar Sesion como Admin", () => {
    var admin = new Admin();
    it("Deberia iniciar sesion con el nombre de usuario", () => {
        expect(admin.username).toEqual("admin");
    });
    it("Deberia iniciar sesion con la contraseña", () => {
        expect(admin.password).toEqual("password");
    });
    it("Deberia iniciar sesion con username y password", () => {
        expect(admin).toEqual({"password": "password", "username": "admin"});
    });
  });