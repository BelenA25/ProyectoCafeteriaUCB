import Admin from "./Admin";

describe("Iniciar Sesion como Admin", () => {
    var admin = new Admin();
    it("Deberia iniciar sesion con el nombre de usuario", () => {
        expect(admin.username).toEqual("admin");
    });
  });