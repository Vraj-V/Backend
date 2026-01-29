const express = require('express');
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'));

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/style',(req,res)=>{
    res.send('sending!')
})

app.listen(3000,(req,res)=>{
    console.log('running!')
})