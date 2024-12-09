const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split("\n");

let n = arr[0];
arr.shift();

for (let i = 0; i<=arr.length; i++) {
    if (arr[i]%3==0 && arr[i]%2==1) {
        console.log(arr[i])
    }

}