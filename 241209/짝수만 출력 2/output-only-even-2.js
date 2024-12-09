const fs  = require('fs');

let  [b,a] = fs.readFileSync(0).toString().trim().split(' ').map(i=> Number(i));

let result = "";
while (b>=a) {
    result +=(b + " ")
    b-=2
}

console.log(result)