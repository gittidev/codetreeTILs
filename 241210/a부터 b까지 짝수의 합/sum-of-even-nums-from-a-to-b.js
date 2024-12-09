const fs  = require("fs");

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(i=>Number(i));

let Sum = 0
for (let i = a;  i<=b;i++)  {
    if (i%2==0)  {
        Sum+=i
    }
}

console.log(Sum)