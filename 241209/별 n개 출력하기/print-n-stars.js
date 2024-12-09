const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());

while (n>=1) {
    console.log('*');
    n--

}