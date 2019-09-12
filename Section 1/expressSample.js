const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send("Yeah Wats Up From express");
});

app.listen(3000, function(){
    console.log('App Listening at port number 3000');
});