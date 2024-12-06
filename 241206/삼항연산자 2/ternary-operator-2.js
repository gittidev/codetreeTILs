const fs = require('fs');

let a = parseInt(fs.readFileSync(0));

let result = a===1 ? "t" : "f";

console.log(result)