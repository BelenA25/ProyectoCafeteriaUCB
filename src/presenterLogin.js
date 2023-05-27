import Admin from "./Admin";

const formulario = document.querySelector("#loginForm");
const usuario = document.querySelector("#inputUsername");
const password = document.querySelector("#inputpassword");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = usuario.value + password.value;
});