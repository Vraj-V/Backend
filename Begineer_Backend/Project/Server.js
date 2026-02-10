import express from 'express'
import ProductRoutes from './routes/ProductRoute.js'
const app = express()
app.use(express.json());
app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    res.send('rendering the subject!');
})

app.use('/product',ProductRoutes);

app.listen(4000,()=>{
    console.log("Running 4000")
})