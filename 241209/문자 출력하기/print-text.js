const fs = require('fs');

let st  = fs.readFileSync(0).toString().trim();
let result = "";
for (i=0; i<=7; i++) {
    result +=st 
}

console.log(result)
