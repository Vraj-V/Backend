const express = require('express');
const mongoose =  require('mongoose');
const cors = require('cors');
const RegisterModel = require('./models/Register')

const app = express()

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/registration")

app.get("/",(req,res)=>{
    res.send("hello")
})


app.post('/register', async(req,res)=>{
    const {Email,Password, Phone,Name} = req.body

    const existingUser = await RegisterModel.findOne({Email:Email});

    if(existingUser){
        return res.status(409).json({message: "Already registered"});
    }

    const newUser = await RegisterModel({Name,Email,Password,Phone})
    newUser.save()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/login',(req,res)=>{
    const {Email,Password} = req.body;
    RegisterModel.findOne({Email:Email})
    .then(user =>{
        if(user){
            if(user.Password === Password){
                res.json("Success")
            }else{
                res.json("Error");
            }
        }else{
            res.json("No record found")
        }
    })
})
app.listen(5000,()=>{
    console.log("server is running")
})