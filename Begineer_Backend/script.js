console.log("hello");
import express from 'express';

const app = express();
app.use(express.json()); //Help to understand JSON express.
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))

// Created a Backend endpoint
app.get('/',(req,res)=>{
    res.send("HEllo");
})


// create a different endpoint and perform query operation;
app.get('/sum',(req,res)=>{
const a = Number(req.query.a);
const b = Number(req.query.b);

if(isNaN(a)|| isNaN(b)){
    return  res.status(400).json({error:'a and b are required!'})
}
res.json({
    result:  a + b
});
});

app.get('/sub',(req,res)=>{
    const c = Number(req.query.c);
    const d = Number(req.query.d);

    if(isNaN(c) || isNaN(d)){
       return res.status(400).json({error:'c and d both requiered'})
    }

    res.json({
        First: c,
        Second: d,
        operation: `-`,
        result: c - d
    })
})

app.get('/mult',(req,res)=>{
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if(isNaN(a) || isNaN(b)){
       return res.status(400).json({Error:"a and b are required."});
    }
    res.json({
        result: a * b
    })
}) //Multiplication.

app.get('/login',(req,res)=>{
    res.render('login')
}) //user handing (Frontend to create UI and getting a data.)

app.post('/login',(req,res)=>{
    const {username, password,age} = req.body

    if(!username || !password || isNaN(age)){
        return res.status(400).json({error:'usename  and password missing'})
    }

    if(username ==="admin" && password ==='1234' && age >=18  && age <100){
        return res.status(200).json({message:"Login Successfull and welcome"});
    }

    res.status(401).json({error:'invalid  credintials.'})
})  //return output by API.



// listen the port;
app.listen(3000,()=>{
    console.log("running server 3000!")
})