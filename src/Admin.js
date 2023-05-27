class Admin{
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    loginAdmin() {
        return {"username":this.username,"password":this.password};
    }

    Admin() {
        return this.username == "admin" && this.password == "password";
    }
    
    validarDatos(){
        return this.username != "" && this.password != "";
    }
}

export default Admin;