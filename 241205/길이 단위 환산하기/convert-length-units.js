const fs = require("fs");

const ft = Number(30.48)

let n =  Number(fs.readFileSync(0))
result = Number(ft*n)

console.log(result.toFixed(1))
