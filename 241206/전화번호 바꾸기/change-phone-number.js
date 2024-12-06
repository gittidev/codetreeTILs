const fs = require('fs');

let [a,b,c] =  fs.readFileSync(0).toString().trim().split('-');

[b,c] = [c,b]

console.log(`${a}-${b}-${c}`)