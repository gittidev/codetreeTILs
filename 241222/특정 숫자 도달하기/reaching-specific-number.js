const fs = require("fs");
let sum = 0;
let cnt = 0;
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

for (let elem of arr) {
    if (elem>=250) break;
    sum += elem;
    cnt++;
}

let avg = (sum / cnt).toFixed(1);
console.log(sum, avg);


