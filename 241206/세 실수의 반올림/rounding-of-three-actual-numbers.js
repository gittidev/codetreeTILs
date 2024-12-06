const fs = require("fs");

let [a,b,c] =  fs.readFileSync(0).toString().split("\n").map(item => Number(item))

console.log(a.toFixed(3))
console.log(b.toFixed(3))
console.log(c.toFixed(3))
