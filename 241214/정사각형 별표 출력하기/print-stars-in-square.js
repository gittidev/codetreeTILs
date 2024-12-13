const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i<n; i++){
    let str = ""
    for (let i = 0; i<n; i++) {
        str+="*";
    }
    console.log(str)

}
    