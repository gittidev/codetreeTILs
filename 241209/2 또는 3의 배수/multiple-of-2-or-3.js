const fs =  require('fs');

let n = Number(fs.readFileSync(0).toString().trim());
let result = [];


for (i=1; i<=8; i++) {
    if  (i%2==0 || i%3==0) {
        result[i] = 1
    }  else {
        result[i]  = 0
    }
}

console.log(result.join(" "))