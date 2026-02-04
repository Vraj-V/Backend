const { mongo } = require("mongoose");

const mongoose = reequire('mongoose');

const fileSchema = new mongoose.Schema({
    path:{
        type:String,
        required: [true, 'path is required']
    },
    originalname: {
        type: String,
        required : [true, 'Original is required']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required']

    }
})

const file = mongoose.model('file',fileSchema)

// check with backend mongoose comprass.