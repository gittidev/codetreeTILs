const fs = require("fs");

let [a,b] =  fs.readFileSync(0).toString().split("\n").map(item => Number(item))

console.log(a, b)