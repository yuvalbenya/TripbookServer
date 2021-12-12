'use strict';

const dotenv = require('dotenv');
const assert = require('assert')

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env;

assert(PORT,'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port:PORT,
    host:HOST,
    url:HOST_URL,
    firebaseConfig : {

        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID,
        type: "service_account",
        project_id: "tripbook-afecb",
        private_key_id: "43d066be25138af09b03b98ea5f72ce0e2e19fec",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCV36zBN3t4hpxy\nc1yVNFyzd/zzJepHPEjdDZQGLDZtzBqxXK6PwuSxCih8oAA/ySaJb1CUPJ+TDbvd\nXfVZiwCZMsfEpMQC8btf5OGdhuoHznOK5G+rgrRPAJZR3jRy35cvIFb9F1bGmbdI\nMJqb4FDvqo0+ljWGh/YQdifKjpaqeuD8W6+9/gxI+z9ApltMrUGl2mbKeB9530gt\nRo4nVTIM3yIX1Ie57zX4oKnOvPsubK27/ufO8DpdWCFCKIcM92FxCkQ9gWFgAt5d\n+4PEKwDbl9toKiCts89HIH8dBngCIcYFiSBaPMrbBcVXiwZ65k9n1jk6GEbp+h5s\nPUrCH7QHAgMBAAECggEAOQ8yX1F3QZjGQVCoY+nOjUlWVWAPBNXvy7EatQrqIf0+\nAF6P2w3RMZHzfhcQYTh84oAtxnIaMstcxde6zD9+l9Tcd4JfWducgdLLDsVJnnU8\nShnUZhDaAuXvVPXrM/zqOzftxme3Ut89B0/x3PyW89gT9EsNz809omDJn3WP6RFP\n+uzJjz79+n2V1yw30ykAD2SU33Nqh4s8Z1bp29FP/dLRycJqak5Q8KFGah32kh1z\n1TO7CS6+x7u0Eg0+4vxy0JqRGBZXzWEn7jgAFUj592RW1MHeutSTf4cKRgbmPrqx\nL0Qk1PNomsMhSD3t0A1FKgtfpGJQ6yHOlQCC925LoQKBgQDNfBA+cJZanruvBnBW\nH/YD+b87HqxaWUGL2OF0b93198DC0Z8xMxv4smsPRsXrWmtqzdDz/b9/xubcuj+k\nWdABfEKgbcI15GFfQOnJd73uA4uD7I8Akmi1zOopJq519Q3dYO4U7W67MwgOMZ9J\nG39OxErGzKOgR9tbcxiol42ClwKBgQC6t83lGP2iCK/TfCGx6PW2Y4Jf0qiG2VTR\nTkGRUk9AxRy8CkwnmYrXbDXr1qVfwOu/HK7L4rzE/IvNZzz/oYYEIK3O2zFLUAk7\nu0fl5Ayi4cBKoDzUe3/QBjIXE88dZekS3SAOQX6Z5jDKL+Q6kRS5dhOfVAqzsJb4\n1Jsbdj84EQKBgBOuT0v7sprpWyaPYlENbJ3C3OsHrBBXPizrz+Q8FrFJUoAWXb3z\nnDk8tX5YE/rPxTwMjHfiFOZjIZeAizntlDugMC13dcN9pUnfSMUQH/PdCQ7QqH2w\niDDpeIAKgWkw2GwcrZD5kMKDR8E8RXpWFOJxcIwL65wdZcgjhPgY0+fvAoGAF+AA\n19aGN/3cXbJ1rIYZRSUcOpx5KCUKD2luQOLBd4q8zd6TNk0Pz9PqYSmlI8VLX7iP\nMUrg0F9qkO0ug5FnzYdQMi8c8oBdbeHYo7CxXPJ44BH1NUZFZZglN4Y06ZFqaBsW\nSjxdr9gbTP8qs8JxX/WVNL5OUAO4ikDFRJGuK8ECgYBTKP4glL2fWrTU5+W0J4d1\n+f3SzYmt2QdFOj/RAAZfYTMrPSIDLP5thBLJrkxH/fgfZ3lnqYsgZ5hB/S/lNC+6\nkDAr7W4eBOAkq4EITRCR+O3efuY26NF8k2hs3CA3/MB0nu5eZA5CvLiPb3o2AgPG\nPhxXtTPSMXY2JLi9+n/bwg==\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-w6ula@tripbook-afecb.iam.gserviceaccount.com",
        client_id: "101364705229339137195",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-w6ula%40tripbook-afecb.iam.gserviceaccount.com"
      }  
}