const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(i=>  Number(i));

let  sum = a+b;
let avg = ((a+b)/2).toFixed(1);
console.log(sum, avg)