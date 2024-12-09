const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());

let result = [];
while (n<60) {
    result.push("F")
    n++;
} 
while (n <70) {
    result.push("D")
    n++
}

while (n<80) {
    result.push("C")
    n++
}
while (n<90) {
    result.push("B")
    n++
}

while(n<=100) {
    result.push("A")
    n++
}

console.log(result.join(" "))
