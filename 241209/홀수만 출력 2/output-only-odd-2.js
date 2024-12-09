const fs = require('fs');

let [b,a] = fs.readFileSync(0).toString().trim().split(" ").map(i=>Number(i));


let result = [];

for (let i=b; i>=a; i-=2)  {
    result.push(i)
}

console.log(result.join(" "))