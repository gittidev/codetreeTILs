const fs = require("fs");

let [a,b] = fs.readFileSync(0).toString().trim().split(' ').map(i=> Number(i));

let result = "";

if (b>a){
    [a,b]=[b,a]
}

for (i=a; i>=b; i--) {
    result +=(i + " ")
}

console.log(result)