const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i<n; i++) {
    let result = ""
    for (let j = 1; j<=i+1; j++) {
        result += "* "
    }
    console.log(result)

}