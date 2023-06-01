import User from "./User";

describe("Iniciar Sesion como User", () => {
    var user = new User("user","contra");
    it("Deberia iniciar sesion como usuario con el nombre de usuario", () => {
        expect(user.username).toEqual("user");
    });
    it("Deberia iniciar sesion como usuario con la contraseña", () => {
        expect(user.password).toEqual("contra");
    });
    it("Deberia iniciar sesion como usuario con username y password", () => {
        expect(user).toEqual({"username": "user","password": "contra"});
    });
    it("Deberia iniciar sesion como usuario con username y password con una funcion", () => {
        expect(user.loginUser()).toEqual({"username": "user","password": "contra"});
    });
    it("Deberia validar que el usuario tiene un username y un password", () => {
        expect(user.Usuario()).toEqual(true);
    });
    it("Deberia validar que el usuario tiene un username y un password", () => {
        expect(user.VerifyData()).toEqual(true);
    });
});