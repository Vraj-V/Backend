import express from'express'
import { fileURLToPath } from 'url'
import path from 'path'

const app = express();
import userModule from './routers/index.router.js'; // Add .js extension

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)



app.use(express.json())
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.render("index")
})


app.use('/user',userModule)

export default app
//To run local
// app.listen(3000,()=>{
//     console.log("server is running on port 3000")
// })
