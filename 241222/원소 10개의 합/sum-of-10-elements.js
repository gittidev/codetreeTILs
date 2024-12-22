const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let sum =0

for (let i=0; i<arr.length; i++) {
    sum+=arr[i]
}

console.log(sum)