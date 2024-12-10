const fs = require("fs");

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(i=>Number(i));

console.log(a**b)