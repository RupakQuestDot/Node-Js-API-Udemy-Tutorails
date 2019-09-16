const express = require('express');
const app = express();

app.get('/', function (req,res){
    res.send("Hello World From Node JS");
});

app.listen(3000, ()=> {
    console.log("App is litening at port 3000");
});
