const fs = require("fs");

let n = parseInt(fs.readFileSync(0));

function printMinus (n) {
    console.log(n);
    if (n<0) {
        console.log('minus')
    }
    return
}


printMinus(n)