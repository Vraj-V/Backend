const express = require('express');
const router = express.Router();
const {body,validationResult} = require('express-validator');
const userModule =require('../modules/user.module')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.get('/register',(req,res)=>{
    res.render('register')
})


router.post('/register',
    body('email').trim().isEmail().isLength({min: 13}),
    body('password').trim().isLength({min: 6}),
    body('userName').trim().isLength({min: 3}),
    async (req,res)=>{
        const error = validationResult(req);

        if(!error.isEmpty()){
            return res.status(400).json({
                errors: error.array(),
                message: "invalid data."
            });
        }
        const {email,userName,password} =req.body
        const hashPass = await bcrypt.hash(password,10);
        
        const newUser = await userModule.create({
            email,
            password:hashPass,
            userName
        })
        res.json(newUser);
})

// Login routers


router.get('/login', (req,res)=>{
    res.render('login')
})

router.post('/login',
    body('userName').trim().isLength({min:3}),
    body('password').trim().isLength({min:6}),

    async (req,res)=>{
        const error = validationResult(req);

        if(!error.isEmpty()){
            return res.status(400).json({
                error: error.array(),
                message: 'invalid data.'
            })
        }

        const {userName,password} = req.body

        const user = await userModule.findOne({
            userName:userName,

        })
        if(!user){
            return res.status(400).json({
                message: 'username  is incorrect!'
            })
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({
                message: ' password is incorrect!'
            })
        }

        // jsonwebtoken

        const token = jwt.sign({
            _id: user._id,
            email: user.email,
            userName: user.userName
        },
        process.env.JWT_SECRET)
    
    res.cookie('token',token)
    res.send('logged in!');


})

module.exports = router;

// router.get('/test',(req,res)=>{
//     res.send("test router")
// })