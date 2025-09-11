const express = require('express');
const app = express();
const path = require('path');

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));



app.get("/", function(req, res) {
    res.render("index", { name: "Vraj" });  // <-- pass variable
});
app.get("/character", function(req, res) {
    res.render("character");  // <-- pass variable
});


app.get("/shop", function(req, res) {
    res.render("shop");  // <-- pass variable
});
app.listen(5000,function(){
    console.log("Server is running!");

})