const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());
let cnt = 0
let i = 0

while (1) {
    i++
    cnt++
    n=parseInt(n/i)
    if (n/i<=1) {
        cnt++
        break
    }
}

console.log(cnt)