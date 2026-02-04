// it run before send request to server, if true then goes to server, works as firewall ;
// install server from Express
// command: npm i express.

const express = require('express');
const morgan = require('morgan')
const app = express();

app.set('view engine','ejs')

// 1st custom middleware
app.use((req,res,next)=>{
    console.log('this is middleware!!');
    const a =1
    console.log(a + 5);
    return next()
})

// 2nd Install middleware.
app.use(morgan('dev'))


app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.send('hello world from about js.!')
})


// 3rd individual page middleware
app.get('/profile',
    (req,res,next)=>{
        const a =12;
        console.log(a + 10);
        next();
},
    (req,res)=>{
    res.send('hello world from profile js.!')
    })

app.listen(4000,()=>{
    console.log("running.")
})


//  2nd in order to run HTML,
// install ejs view engine
// code npm i ejs
