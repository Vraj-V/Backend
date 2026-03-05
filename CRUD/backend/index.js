const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose');
const userModel = require("./models/User")
const app = express()

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://vraj230183107024_db_user:wk1Aw23uTfpGAAja@cluster0.ivi3brc.mongodb.net/Mern");

app.get("/getUsers",async (req,res)=>{
    try{
        const user = await userModel.find({})
        res.status(200).json(user)

    }
    catch(err){
        res.status(400).json(err)
    }
})


app.post("/createUser",async (req,res)=>{
    try{
    const user = req.body;
    const newUser = new userModel(user);
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
    }
    catch(err){
        res.status(400).json(err)
    }
})
app.listen(3000,()=>{
    console.log("server is running 3000!")
})