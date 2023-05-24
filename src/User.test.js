import { Admin } from "./User";

describe("Iniciar Sesion", () => {
    var admin = new Admin();
    it("Deberia iniciar sesion con el nombre de usuario", () => {
        expect(admin.username).toEqual("admin");
    });
    it("Deberia iniciar sesion con la funcion de Login para Admin", () => {
        expect(admin.loginWithAdmin()).toEqual("admin");
    });
  });