const fs = require("fs");

let cnt = 0

let input = fs.readFileSync(0).toString().trim().split("\n").map(i=>Number(i));

for (let i = 0; i<input.length; i++) {
    let x= input[i];
    if  (x%2==1) {
        cnt++
    }

}

console.log(cnt)

