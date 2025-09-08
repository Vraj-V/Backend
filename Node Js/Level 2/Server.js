// For Level 2 Server
// Q1. Write a code to create a server using node Js.
// Ans:
            // const http = require("http");
            // const server = http.createServer(function(req,res){
            //     res.end("Hello, Node.js Server");
            // })
            // server.listen(3000,function(){
            //     console.log("Server is running on port 3000");
            // });

// Q2. Write a code to create a server using node Js and use routing to send different responses to different routes.
// Ans:
//  Use nodemon to run the server
        //  Add nodemon to the project
            // npm install nodemon --save-dev

        //  Add nodemon to the scripts section in the package.json file
            // "scripts": {
            //     "start": "nodemon Server.js"
            // }

        //  Code:
                // const http = require("http");
                    // const server = http.createServer(function(req,res){
                    //     res.end("Hello, Node.js Server updated using nodemon!");
                    // })
                    // server.listen(3000,function(){
                    //     console.log("Server is running on port 3000");
                    // });
