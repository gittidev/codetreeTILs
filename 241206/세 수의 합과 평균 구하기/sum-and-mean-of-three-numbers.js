const fs = require("fs");

let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ").map(i=>  Number(i));

let  sum = a+b+c;
let avg = parseInt(sum/3)

console.log(sum)
console.log(avg)

