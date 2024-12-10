const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split('\n').map(i=>Number(i));

let n = arr.shift()
let Sum = 0

for (let i = 0; i<n;i++) {
    Sum+=arr[i]
}

console.log(Sum, (Sum/n).toFixed(1))