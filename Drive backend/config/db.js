const mongoose = require('mongoose');
function connectDB() {
    mongoose.connect(process.env.MONO_URI).then(()=>{
        console.log("connected to database!")
    })

}

module.exports = connectDB;