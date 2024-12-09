const fs =  require('fs');

let n = Number(fs.readFileSync(0).toString().trim());
let result = [];


for (i=0; i<8; i++) {
    if  ((i+1)%2==0 || (i+1)%3==0) {
        result[i] = 1
    }  else {
        result[i]  = 0
    }
}

console.log(result.join(" "))