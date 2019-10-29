import auth0 from 'auth0-js'

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'emon535.auth0.com',
        clientID: 'PQn5RTqnmQVV735UpP7j3F4JcqpiRHLn',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id-token',
        scope: 'openid profile email'

    })

    login = () => {
        this.auth0.authorize();
    }
}