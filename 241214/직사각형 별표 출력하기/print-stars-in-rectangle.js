const fs = require('fs');

let [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(i=>Number(i));


for (let i = 0; i<n; i++) {
    let str = "";
    for (let j = 0; j<m; j++) {
        str +=("*"+" ")
    }
    console.log(str)
}