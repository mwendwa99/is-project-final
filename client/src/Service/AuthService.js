import axios from 'axios';

class Auth {
    constructor() {
        this.authenticated = false
    }
    // login with a callback fetch to server
    login(userEmail, userPassword) {
        this.authenticated = true;
        // try {
        axios.post('/api/login-user',
            { userEmail, userPassword }
        ).then((res) => console.log(res))
        // } catch (error) {
        //     console.log(error)
        // }
    }
    logout() {
        this.authenticated = false;
    }
    isauthenticated() {
        return this.authenticated
    }
}
export default new Auth();