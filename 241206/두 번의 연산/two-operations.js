const fs = require('fs');

let a = parseInt(fs.readFileSync(0));

if (a%2===1) {
    a+=3
}


if (a%3==0) {
    a/=3
}

console.log(a)