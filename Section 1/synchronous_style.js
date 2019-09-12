const fs = require('fs');
const fileName = "sample.txt";

//fs.watch(fileName, ()=> Console.log('File Changed !'));

const data = fs.readFileSync(fileName); // .modereadFileSync - sync indicates that it is a synchronous 
console.log(data.toString());

console.log("Node Js is asynchronous programing");