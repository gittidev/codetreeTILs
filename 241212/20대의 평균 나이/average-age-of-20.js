const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n")

let sum = 0
let cnt = 0
let index = 0

while(input[index][0]==="2") {
    sum+=Number(input[index]);
    cnt++
    index++
}

console.log((sum/cnt).toFixed(2))