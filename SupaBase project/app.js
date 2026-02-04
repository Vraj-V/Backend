import express from'express'

const app = express();
import userModule from './routers/index.router.js'; // Add .js extension


app.use(express.json())
app.set('view engine','ejs')
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.render("index")
})


app.use('/user',userModule)

app.listen(3000,()=>{
    console.log("Running on 3000")
});