const fs = require("fs");

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(item =>  Number(item));

console.log(a+b)
console.log(a-b)
console.log(parseInt(a/b))
console.log(a%b)