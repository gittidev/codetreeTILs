const fs =require("fs");

let  n =Number(fs.readFileSync(0).toString().trim());

let cnt = 0
let i = 0
while (n>1) {
    i++
    n = (parseInt(n/i))
    cnt++
}

console.log(cnt)