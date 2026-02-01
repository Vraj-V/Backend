const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routers/user.router.js')
const dotenv = require('dotenv')
const connnectToDB = require('./config/db.js')
const cookieParser = require('cookie-parser');
const indexRouter = require('./routers/index.router.js')
dotenv.config();
connnectToDB();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}))
app.set('view engine','ejs');

// app.get('/',(req,res)=>{
//     res.render('index')
// })

app.use('/',indexRouter);

app.use('/user',userRouter)
 
app.listen(port,()=>{
    console.log("running server!")
})