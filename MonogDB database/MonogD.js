const express = require('express');
const app = express();
const port = 5000;
const userModel = require('./models/user')
const dbConnection = require('./config/db')


// Express middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.set('view engine','ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.send('About Page.');
});

app.get('/register',(req,res)=>{
    res.render('register')
})

app.post('/register',async (req,res)=>{
    // console.log(req.body)

    const {userName, email, password} = req.body
    const newUser = await userModel.create({
        userName:userName,
        email: email,
        password:password
    })

    res.send(newUser)
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});