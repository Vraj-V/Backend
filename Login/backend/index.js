const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/User")

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://vraj230183107024_db_user:wk1Aw23uTfpGAAja@cluster0.ivi3brc.mongodb.net/Mern")



    // app.get("/getUsers",(req,res)=>{
    //     UserModel.find({})
    //     .then((result)=> res.json(result))
    //     .catch((err)=> res.json(err))
    // })

    app.post("/create",async (req,res)=>{
        const user =req.body;
    const newUser = new UserModel(user);
    await newUser.save()
    .then((result) => res.json(result))
    .catch((err)=> res.json(err));
    })


app.listen(3001,()=>{
    console.log("server is running")
})