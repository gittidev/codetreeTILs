const  fs  = require("fs");

let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ").map(i=> Number(i));

let result = "YES"

for (let i=a; i<=b; i++) {
    if (i%c==0)  {
        result = "NO"
    }

}

console.log(result)