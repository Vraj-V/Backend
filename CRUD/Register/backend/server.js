const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("hello")
});

app.post("/register", (req,res)=>{
    const data = req.body;
    res.status(200).json({userLog:data})
    localStorage.setItem('users', JSON.stringify(data))
})

app.get('/login', (req,res)=>{

    const users = req.body

    const data = JSON.parse(localStorage.getItem('users'));
    if (users.name === data.users.name && users.password === data){
        res.status(200).json("message", data);

    }
})


app.listen(3000,()=>{
    console.log("congrulations")
})