const express = require('express');
const router = express.Router();

router.get('/register',(req,res)=>{
    res.render('register')
})
router.post('/register',(req,res)=>{
    console.log(req.body)
    res.send("User register.")
})
module.exports = router;

// router.get('/test',(req,res)=>{
//     res.send("test router")
// })