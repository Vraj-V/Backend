// 1. require package 'http'
// it is already inside with node.js , so no need to find in npm

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url === '/'){
        res.end("hello world");
    }else if(req.url === '/about'){
        res.end("About Page")
    }else{
        res.end("404 Page Not Found")
    }
}) //=> return by creating a new server.

server.listen(3000,()=>{
    console.log("server is running on port 3000")
}) //=> 3000 is port number.

