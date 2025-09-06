const express = require('express');
const app = express();

app.get('/',  function(req, res) {

    res.send('Hello World');

});
app.get('/app', function(req,res){
    res.send("new line live updated");
    console.log("Profile page visited");
    })

app.listen(5000);
console.log('Server is running on port 5000');
