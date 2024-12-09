const fs=require("fs");

let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ").map(i=>Number(i));

let middle =  0;

if (a>b && c>a) {
    middle=a
} else if (b>a && c>b) {
    middle=b
} else {
    middle=c
}

console.log(middle)