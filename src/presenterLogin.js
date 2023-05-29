import Admin from "./Admin";
import User from "./User";

const formulario = document.querySelector("#loginForm");
const usuario = document.querySelector("#inputUsername");
const password = document.querySelector("#inputpassword");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    var admin = new Admin(usuario.value, password.value);
    var user = new User(usuario.value, password.value);
    if (admin.Admin()) {
        window.location.href = "index.html";
        alert("Welcome Admin!");
    }
    else if(!admin.validarDatos()){
        alert("Datos Invalidos");
        window.location.reload();
    }
    else if(user.Usuario()){
        window.location.href = "index.html";
        alert("Welcome User!");
    }
    else if(user.VerifyData()){
        alert("Datos Invalidos");
        window.location.reload();
    }
});