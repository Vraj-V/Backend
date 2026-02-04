const mongoose = require('mongoose')

const userSCHEMA = new mongoose.Schema({
    userName: {
    type: String,
    required: true,
    unique: true,
    trim: true
    },
    password:{
        type: String,
        required: true,
        trim:true,
        minlength:[6,'username must be at least 6 characters long!']
    },
    email:{
        type: String,
        required: true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength:[13,'username must be at least 13 characters long!']
    }
})
const user = mongoose.model('user', userSCHEMA);

module.exports = user;