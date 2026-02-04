const Firebase = require('firebase-admin')

    const serviceAccount = require('')

const firebase = Firebase.initializeApp({
    credential : Firebase.credential.cert(serviceAccount),
    storageBucket: 'drive'

})

module.exports = Firebase;
// npm i firebase-admin
// npm i multer abd npm i multer-firebase-storage