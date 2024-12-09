const fs = require("fs");

let n = Number(fs.readFileSync(0).toString().trim());
let arr = [3,6,9]



result = [];
let i = 1
while (i<=n) {

    if (i>=10) {
        i.toString().split("") 
        for (j=0; j<=i.length(); j++) {
            if (arr.includes(j)) {
                result.push(0)
                return
            }
        }
        i++
    } else if (i%3==0) {
        result.push(0)
        i++
    } else {
   result.push(i)
        i++
    }


}

console.log(result.join(" "))