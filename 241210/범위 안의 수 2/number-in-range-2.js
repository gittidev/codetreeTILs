const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split("\n").map(i=> Number(i));

let S = 0
let A = 0

for (let i=0; i<input.length; i++) {
    let x= input[i]
    if (x>=0 && x<=200) {
    S +=x
    A++
    }
}

let Average = (S/A).toFixed(1)

console.log(S, Average)