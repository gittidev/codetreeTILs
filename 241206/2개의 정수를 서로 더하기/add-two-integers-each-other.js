const fs = require("fs");

let [a,b] =  fs.readFileSync(0).toString().trim().split(" ").map(i=> Number(i));

a +=b
b +=a

console.log(a, b)