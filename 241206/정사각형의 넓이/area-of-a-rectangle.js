const fs = require("fs");
let n = parseInt(fs.readFileSync(0));

console.log(n**2);

if (n<5) {
    console.log('tiny')
}