const fs = require('fs');

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(i=>Number(i));

let result =  [];
for (i=b; i>=a; i--) {
    result.push(i)
}

console.log(result.join(" "))