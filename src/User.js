class User{
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    loginUser() {
        return {"username":this.username,"password":this.password};
    }
}

export default User;