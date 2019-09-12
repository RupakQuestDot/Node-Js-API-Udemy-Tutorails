const fs = require('fs');
const fileName = "sample.txt";
// const data = fs.readFile(fileName);

const errHandler = err  => console.log(err);
const dataHandler = data => console.log(data.toString());

fs.readFile(fileName, function(err, data){
    if (err) errHandler(err);
    dataHandler(data);
});

console.log("Node Js is asynchronous programing");