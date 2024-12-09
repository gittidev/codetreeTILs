const fs =  require("fs");

let result1 = 0
let result2 = 0

let input=fs.readFileSync(0).toString().trim().split("\n").map(i=>Number(i));

for (let i=0;  i<10; i++) {
    let x = input[i]
    if  (x%3==0) {
        result1++
    } 

    if (x%3==0) {
        result2++
    }
}

console.log(result1 ,result2)
