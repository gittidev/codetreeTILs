const  fs = require("fs");

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(i=>Number(i));

let result1 = parseInt(a/b)

let result2 =""

a%=b;

for (let i = 0; i<20; i++) {
    a*=10;
    result2 += parseInt(a/b)
    a %=b
}

console.log(result1+"."+result2)