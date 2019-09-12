// Asynchronous programing (Non Blocking Tyep)

const fs = require('fs');
const fileName = "sample.txt";

//fs.watch(fileName, ()=> Console.log('File Changed !'));

fs.readFile(fileName, function(err, data){
    if (err){
        console.log(err);
    }

console.log(data.toString());
});

console.log("Node Js is asynchronous programing");