const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./models/Operation');
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/crud")

app.get("/", (req,res)=>{
    res.send("server running");
})

app.get("/user", async (req,res)=>{
    try{
        const result = await userModel.find({})
    res.status(200).json(result)
    }
    catch(err){
        res.status(400).json(err);
        console.log(err)
    }
})


app.post("/create", async (req,res)=>{
    const user= req.body;
    try{
        const result = await  userModel.create(user);
        const savedUser = await result.save();
        res.status(200).json(savedUser);
    }catch(err){
        res.status(400).json(err)
    }
})

app.delete('/delete/:id', async(req,res)=>{
    const id = req.params.id;
    try{
        const result = await userModel.findByIdAndDelete(id)
        res.status(200).json(result);
    }catch(err){
        res.status(400).json({message: err.message})
    }

})

app.put('/update/:id', async(req,res)=>{
    const id = req.params.id;
    const user = req.body; //give the username

    try{
        
    const result = await userModel.findByIdAndUpdate(id,user,{ new: true});
    res.status(200).json(result);
    }catch(err){
        res.status(400).json({message: err})
    }

})

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});