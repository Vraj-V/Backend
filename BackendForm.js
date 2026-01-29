const express = require('express');
const app = express();
const morgan = require('morgan')

// Middleware
app.use(morgan('dev'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('form')
})
app.get('/about',(req,res)=>{
    res.send('About Page!!')
})

// password and other are visible on url 
// => NOT A EFFECT METHOD.

// app.get('/get-form-data',(req,res)=>{
//     console.log(req.query);
//     res.send('data received')
// })

// 3rd express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))


// we use 'Post' in order send data to backend
// we use 'GET' in order get data from backend to frontend
app.post('/get-form-data',(req,res)=>{
    console.log(req.body);
    res.send("data received!!")
});


app.listen(3000,()=>{
    console.log('running')
})