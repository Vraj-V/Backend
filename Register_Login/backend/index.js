const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee')


app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee")

app.get('/',(req,res)=>{
    res.send("Hello");
})


app.post("/register",(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})
app.listen(3000,()=>{
    console.log("running")
})