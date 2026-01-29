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


// Create operation in database
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

// Read operation from database

app.get('/get-users',(req,res)=>{
    userModel.find({userName:'a'}).then((result)=>{
        res.send(result)
    })
})


app.get('/getUsers',(req,res)=>{
    userModel.findOne({userName:'a'}).then((result)=>{
        res.send(result);
    })
})


// Update operation from database.
app.get('/update-user', async (req,res)=>{
    await userModel.findOneAndUpdate({userName: 'a'},{
        email:'c@c.com'
    }).then((result)=>{
        res.send("user update")
    })
})

// delete operation from database.

app.get('/delete-user',async (req,res)=>{
    await userModel.findOneAndDelete({
        userName:'a'
    }).then((result)=>{
        res.send('User deleted');
    });
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});