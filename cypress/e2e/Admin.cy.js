import Admin from "../../src/Admin";

describe("Iniciar Sesion", () => {
    var admin = new Admin();
    it("Deberia iniciar sesion con el nombre de usuario", () => {
        expect(admin.username).toEqual("admin");
    });
  });