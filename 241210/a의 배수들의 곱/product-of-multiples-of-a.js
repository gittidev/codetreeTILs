const fs = require('fs');

let [a,b] = fs.readFileSync(0).toString().trim().split(' ').map(i=>Number(i));


let result = 1

for (let i = 1; i<=b; i++) {
    if (i%a==0) {
        result*=i
    }

}

console.log(result)