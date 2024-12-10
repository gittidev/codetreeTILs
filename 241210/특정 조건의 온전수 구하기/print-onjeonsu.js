const fs = require("fs");

let n = Number(fs.readFileSync(0).toString().trim());

let result = [];
let i = 1
while (i<=n) {
    if (i%2==0 || i%10==5 || (i%3==0 && i%9!=0)) {
        i++
        continue
    }

    result.push(i)
    i++
}

console.log(result.join(' '))