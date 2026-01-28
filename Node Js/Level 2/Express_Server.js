// Express.js (for detail read Description file.)
// Q1. write a code of express js create Your First Express Server
// Ans:
        // Code:
                // const express = require('express');
                // const app = express();
                //     app.get('/',function(res,res){
                //         res.send("Hello from Express Js")
                //     })
                // app.listen(5000, function(){
                //     console.log("Express server is running on 5000 localhost");
                // });


// Q2: Write a code for /profile , which create a new page using express.js route.?
// Ans;
            // code:
                const express = require('express');
                const app = express();

                app.get('/',function(req,res){
                    res.send("First Page of Express");
                })

                
                app.get('/profile',function(req,res){
                    res.send("Second Page of Express");
                })
                app.listen(3000,function(){
                    console.log("3000 running server!")
                })