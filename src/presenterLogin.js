import Admin from "./Admin";

const formulario = document.querySelector("#loginForm");
const usuario = document.querySelector("#inputUsername");
const password = document.querySelector("#inputpassword");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    var admin = new Admin(usuario.value, password.value);
    if (admin.Admin()) {
        window.location.href = "index.html";
        alert("Welcome Admin!");
    }    
    if(!admin.validarDatos()){
        alert("Datos Invalidos");
        window.location.reload();
    }
});