const fs = require("fs");

let n = parseInt(fs.readFileSync(0));

if (n>=3000) {
    console.log('book')
} else if (n>=1000) {
    console.log("mask")
} else {
    console.log("no")
}