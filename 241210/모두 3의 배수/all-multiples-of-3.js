const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split("\n").map(i=>Number(i));

let Cnt = 0

for (let i = 0;  i<arr.length ; i++) {
    let x = arr[i];
    if (x%3!=0) {
        Cnt++
    }
}

if (Cnt) {
    console.log(0)
}  else {
    console.log(1)
}