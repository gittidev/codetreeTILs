let  fs =require("fs");

let n =  Number(fs.readFileSync(0).toString().trim());
let Sum=0

while (n<=100) {
    Sum +=n;
    n++
}

console.log(Sum)