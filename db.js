var admin = require("firebase-admin");
const config = require('./config');
const db = admin.initializeApp({
    credential: admin.credential.cert(config.firebaseConfig)
  });
module.exports = db;