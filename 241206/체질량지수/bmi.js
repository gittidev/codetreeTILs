const  fs = require('fs');

let [h,w] = fs.readFileSync(0).toString().trim().split(" ").map(i=>Number(i));

let b  = w / (h/100)**2
let result =parseInt(b);
console.log(result);
if (result >=25) {
    console.log("Obesity")
} 
