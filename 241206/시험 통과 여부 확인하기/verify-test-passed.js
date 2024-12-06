const fs = require("fs");

let n = parseInt(fs.readFileSync(0));

if (n >=80 ) {
    console.log("pass")
} else  {
    console.log(`${Math.abs(n-80)} more score`)
}