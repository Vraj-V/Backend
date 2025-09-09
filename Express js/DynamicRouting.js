//  1. Create express app
const express = require('express');
const app = express();

// 2. Create a home route page.

app.get('/', function(req,res){
    res.send("check he /user page")
})
// 3. what is dynamic routing
// 🔀 1. Dynamic Routing
        // In Express.js, routes define how your app responds to URLs.
        // Static route: Fixed URL (e.g., /about).
        // Dynamic route: URL with a variable/parameter (e.g., /user/:id).
        // Useful when you want to load pages or data based on a parameter (like user profile, product page).

app.get('/user/:id', function(req,res){
    const userID = req.params.id;
    res.send(`your requested Id: ${userID}`)
})

// step 4; listen the output on browser.
app.listen(8080,function(){
    console.log("server running on 8080");

})


// Important :
//  dont forget to use " req.params.id " that it means;
// req : request coming from server, params converting that id .
