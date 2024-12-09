const fs = require("fs");

let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ").map(i=>Number(i));

if  (b>a   && b<c ) {
    console.log(1)
} else {
    console.log(0)
}