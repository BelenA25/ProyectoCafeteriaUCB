class Admin{
    constructor() {
        this.username = "admin";
        //this.form = document.getElementById("loginForm");
        //this.form.addEventListener("submit", this.loginUser.bind(this));
    }

    loginWithAdmin() {
        return this.username;
    }
}


export {Admin};