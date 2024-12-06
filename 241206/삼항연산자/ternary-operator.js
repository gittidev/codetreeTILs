const  fs = require("fs");

let n = parseInt(fs.readFileSync(0));

let result = n===100 ? 'pass' : 'failure'

console.log(result)