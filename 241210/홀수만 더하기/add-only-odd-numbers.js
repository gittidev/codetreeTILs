const fs = require('fs');

let arr = fs.readFileSync(0).toString().trim().split("\n").map(i=>Number(i));
let n = arr.shift()
let Sum=0



for (let i = 0; i<n;  i++) {
    let x= arr[i];
    if (x%3==0 && x%2!=0) {
        Sum+=x
    }    
}

console.log(Sum)