const fs = require("fs");

let [a,b]  =   fs.readFileSync(0).toString().trim().split(" ").map(i => Number(i));

let result1 = 0
let result2 = 0 

if (a<b) {
    result1 = 1
} 
if (a===b) {
    result2 = 1
} 

console.log(result1, result2)