const fs = require("fs");

let [a,b] =  fs.readFileSync(0).toString().trim().split(" ").map(i=>Number(i));

if (a-b<=0) {
    console.log(b-a)
} else {
    console.log(a-b)
}