const fs = require('fs');

let [a,b,c] = fs.readFileSync(0).toString().trim().split('\n').map(i=>Number(i));

let result1 = 0
let result2 = 0

if (a<=a && a<=b && a<=c) {
    result1=1
} 

if (a===b &&  b===c && a===c) {
    result2=1
}

console.log(result1, result2)