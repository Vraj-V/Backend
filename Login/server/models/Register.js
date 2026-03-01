const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Password: String,
    Phone: Number
});

const RegisterModel = mongoose.model("register",RegisterSchema);
module.exports = RegisterModel;