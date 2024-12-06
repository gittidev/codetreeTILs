const fs = require("fs");

let [w,h] =  fs.readFileSync(0).toString().trim().split(" ").map(item=>Number(item));

w += 8

h *= 3

console.log(w)
console.log(h)
console.log(w*h)