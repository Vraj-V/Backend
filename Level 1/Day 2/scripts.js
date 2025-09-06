const http = require("http");

const server = http.createServer( function(req, res){
    res.end(`"hello world from server"`);
})

server.listen(5000)
console.log("request has been made from browser to server");