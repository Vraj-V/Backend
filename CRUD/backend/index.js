const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose');
const userModel = require("./models/User")
const app = express()

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://vraj230183107024_db_user:wk1Aw23uTfpGAAja@cluster0.ivi3brc.mongodb.net/Mern");

app.get("/getUsers",(req,res)=>{
    userModel.find({})
    .then((result)=>{
        res.status(200).json(result);
    })
    .catch((err)=> res.json(err));
})

app.listen(3000,()=>{
    console.log("server is running 3000!")
})