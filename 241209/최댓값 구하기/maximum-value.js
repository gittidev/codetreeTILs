const fs  =  require("fs");

let [a,b,c]  =  fs.readFileSync(0).toString().trim().split(' ').map(i=> Number(i));

let Max = -100;

if (a>Max) {
    Max=a
} 

if (b>Max) {
    Max=b
} 
if (c>Max) {
    Max=c
}

console.log(Max)