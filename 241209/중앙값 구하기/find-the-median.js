const fs=require("fs");

let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ").map(i=>Number(i));

let middle =  0;

if (a>b)  {
    if (a<c) {
        middle=a
    }  else if (b>c) {
        middle=b
    } else {
        middle=c
    }
} else {
    if (a>c) {
        middle=a
    } else if (b<c) {
        middle=b
    } else {
        middle=c
    }
}

console.log(middle)