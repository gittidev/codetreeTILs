const fs = require("fs");

let [yyyy,mm,dd] =  fs.readFileSync(0).toString().trim().split('.');

console.log(`${dd}-${mm}-${yyyy}`)