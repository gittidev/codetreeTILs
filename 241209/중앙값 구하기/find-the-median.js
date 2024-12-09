const fs=require("fs");

let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ").map(i=>Number(i));

let middle =  0;

if ((a>b && c>a) || (b>a &&  a>c)) {
    middle=a
} else if ((b>a && c>b)  || (a>b&&  b>c)) {
    middle=b
} else if ((c>b && a>c) || (c>b&&  a>c)){
    middle=c
}

console.log(middle)