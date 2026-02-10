// Day 2 
import express from 'express'

const app = express();
app.use(express.json())
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send('Hello world!')
});

app.listen(3000,()=>{
    console.log("Running serverJS")
})