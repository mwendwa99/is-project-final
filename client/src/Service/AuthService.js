class Auth {
    constructor() {
        this.authenticated = false
    }
    // login with a callback fetch to server
    login(cb) {
        this.authenticated = true;
        cb();
    }
    logout(cb) {
        this.authenticated = false;
        cb();
    }
    isauthenticated() {
        return this.authenticated
    }
}
export default new Auth();