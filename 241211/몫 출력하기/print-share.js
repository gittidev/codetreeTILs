const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0
let cnt =0

while (true) {
    let n = Number(input[index]);

    if (cnt ==3 ){
        break;
    }


     if (n%2==0) {
        cnt++
        console.log(parseInt(n/2));
    }
    index++
}