const fs = require('fs');

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(i=>Number(i));

let result = [];
let i = a;

while (i<=b) {
    if (i%2==0) {
        result.push(i);
        i+=3
    } else if (i%2==1) {
        result.push(i);
        i*=2
    }

}   

console.log(result.join(" "))