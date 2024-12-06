const fs = require("fs");

let [a,b] =  fs.readFileSync(0).toString().trim().split("\n").map(i =>  Number(i));

console.log(a+87)
console.log(b%10)
