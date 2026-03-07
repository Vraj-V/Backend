const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./models/Operation');
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/crud")


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
    
})


const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});