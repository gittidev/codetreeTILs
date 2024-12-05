const fs = require("fs");

let a = Number(fs.readFileSync(0))

let result = a*2 + 3 
console.log(result)