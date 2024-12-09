const fs = require("fs");

let arr =  fs.readFileSync(0).toString().trim().split(' ')
let c= arr[0]
let n  = Number(arr[1]);

result =  "";

if (c=="A") {
    for (i=1; i<=n; i++) {
        result +=(i + " ")
    }
}

if (c=="D") {
    for (i=n; i>=1; i--) {
        result +=(i + " ")
    }
}

console.log(result)