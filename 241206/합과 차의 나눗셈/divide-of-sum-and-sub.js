const fs = require("fs");

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(i=> Number(i));

let result =  ((a+b) / (a-b)).toFixed(2)

console.log(result)