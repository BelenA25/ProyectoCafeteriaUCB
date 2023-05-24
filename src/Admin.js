class Admin {
    constructor() {
      this.username = "admin"
      this.password = "password";
    }
  
    loginAdmin() {
      return {"username":this.username,"password":this.password};
    }
  }
  
export default Admin;