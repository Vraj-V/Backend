//  1. Create express app

// 2. Create a home route page.


// 3. what is dynamic routing
// 🔀 1. Dynamic Routing
        // In Express.js, routes define how your app responds to URLs.
        // Static route: Fixed URL (e.g., /about).
        // Dynamic route: URL with a variable/parameter (e.g., /user/:id).
        // Useful when you want to load pages or data based on a parameter (like user profile, product page).


const express = require('express')
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"))

app.get("/", function(req,res){
    res.render("index", {name : "vraj"})
})

app.listen(2000, function(){
    console.log("2000 is working again")
})
// Dynamic routing part


// Important :
//  dont forget to use " req.params.id " that it means;
// req : request coming from server, params converting that id .
