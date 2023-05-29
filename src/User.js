class User{
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    loginUser() {
        return {"username":this.username,"password":this.password};
    }
    Usuario() {
        return this.username == "user" && this.password == "contra";
    }
    validarDatos(){
        return this.username != "" && this.password != "";
    }
}

export default User;