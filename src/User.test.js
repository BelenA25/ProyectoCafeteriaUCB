import User from "./User";

describe("Iniciar Sesion como User", () => {
    var user = new User("user","contra");
    it("Deberia iniciar sesion como usuario con el nombre de usuario", () => {
        expect(user.username).toEqual("user");
    });

});