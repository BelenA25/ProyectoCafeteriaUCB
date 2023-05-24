import User from "./User";

describe("Iniciar Sesion como comunidad UCB", () => {
    var user = new User();
    it("Deberia iniciar sesion con el nombre de usuario", () => {
        expect(user.username).toEqual("user");
    });
});