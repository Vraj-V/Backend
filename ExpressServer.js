// install server from Express
// command: npm i express.

const express = require('express');

const app = express();

app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.send('hello world from about js.!')
})

app.get('/profile',(req,res)=>{
    res.send('hello world from profile js.!')
})

app.listen(3000,()=>{
    console.log("running.")
})


//  2nd in order to run HTML,
// install ejs view engine
// code npm i ejs
