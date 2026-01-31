const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routers/user.router.js')

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})

app.use('/user',userRouter)
 
app.listen(port,()=>{
    console.log("running server!")
})