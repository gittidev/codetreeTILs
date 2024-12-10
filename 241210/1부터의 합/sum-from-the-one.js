const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());

let s = 0;
let i = 0;

while (i<=100) {
    i++
    s+=i
    if (s>=n){
    console.log(i)
    break
    }

}


