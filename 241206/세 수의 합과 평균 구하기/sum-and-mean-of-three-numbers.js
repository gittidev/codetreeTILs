const fs = require("fs");

let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ").map(i=>  Number(i));

let  sum = a+b+c;
let avg = (sum/3).toFixed(0);

console.log(sum)
console.log(avg)

