// const fs = require('node:fs')

// fs.writeFile("cat.txt","cat is a domestic animal",function(err){
//     if (err) console.error(err)
//     else  console.log("success")
// })

/*YOu must include the err , which is parameter of the function,, if you are using a parameter inside a function, then you 
you must include that inside a fucntion also*/ 
/* you have use .toString() so that output give a string value not a buffer value of text 
output without .toString()=
<Buffer 63 61 74 20 69 73 20 61 20 64 6f 6d 65 73 74 69 63 20 61 6e 69 6d 61 6c>
output with .toString()=
cat is a domestic animal
*/
// fs.appendFile("cat.txt"," Here i added a new line using an append",function(err){
//     if (err) console.log(err)
//         else console.log("append successful")
// })

// fs.copyFile("cat.txt","new_copy.txt",function(err){
//     if(err) console.log(err)
//     else{
//  console.log("copied successful")
// fs.readFile("new_copy.txt",function(err,data){
//     if(err) console.error(err)
//     else console.log("Copy file data: "+data.toString())

// })
// }
// })

/*Error:
1. Asynchronous problem

fs.copyFile runs asynchronously.
That means your fs.readFile("new_copy.txt") may execute before the copy is finished.

2. Correct way

You need to make sure the file is read only after copying succeeds.
That means putting the readFile call inside the success callback of copyFile.
*/
// fs.unlink("cat.txt",function(err){
//     if(err) console.error(err)
//     else console.log("delete the file")
// })

// fs.rename("new_copy.txt","copiedfile.txt",function(err){
//     if(err) console.error(err)
//     else console.log("Rename successfull!")
// })


// Starting Server

// const http = require('http')
// const server = http.createServer(function(req,res){
//     res.end("hello from using it.")
// })
// server.listen("3000");
// console.log("server is running on 3000")


// Express Server Js

const express = require('express')
const app = express()

// error handler should be last
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("something went wrong");
});

app.get('/user/:id',function(req,res){
    const userID =req.params.id;
    res.send(`Your requested id : ${userID}`)
})
app.get("/",function(req,res){
    res.send("hello from express server new line was added offline!")
})
app.get("/about",function(req,res){
    res.send("You are now on about page.")
})
app.get("/home",function(req,res){
    res.send("You are now on home page.")
})

app.listen(3000,()=>{
    console.log("3000 is on!")
})
