const fs = require("fs");

let n = Number(fs.readFileSync(0).toString().trim());

let num = [3,6,9]

result = [];
let i = 1
while (i<=n) {
    if ((i%3==0) || (num.includes(i))) {
        result.push(0)
        i++
    } else {
        result.push(i)
        i++
    }
}

console.log(result.join(" "))