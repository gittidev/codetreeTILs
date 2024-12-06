const fs = require("fs");

let [a,b] = fs.readFileSync(0).toString().split('\n');

let result = Number(a)*Number(b)

console.log(result)