const fs = require("fs");

let [a,b,c] =  fs.readFileSync(0).toString().split("\n").map(item => item.toFixed(3))

console.log(a)
console.log(b)
console.log(c)