const multer = require('multer');
const firebaseStorage = require ('multer-firebase-storage');
const firebase = require('./firebase.config')
const serviceAccount = require('')

const storage = firebaseStorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName: 'drive'

})

const upload = multer({
    storage: storage
})

module.exports = upload;