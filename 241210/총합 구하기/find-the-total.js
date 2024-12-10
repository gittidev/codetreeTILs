const fs = require('fs');

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(i=>Number(i));

let S = 0

for (let i =a ; i<=b; i++) {
    if (i%6==0 && i%8!=0) {
        S+=i
    }
}

console.log(S)