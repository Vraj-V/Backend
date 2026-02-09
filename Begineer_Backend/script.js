console.log("hello");

import express from 'express';

const app = express();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send("HEllo");
})

app.listen(3000,()=>{
    console.log("running!")
})