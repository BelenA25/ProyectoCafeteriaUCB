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
});