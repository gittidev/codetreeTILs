const fs = require('fs');

let [a,b] = fs.readFileSync(0).toString().trim().split(' ').map(i => Number(i));

if (a-b >0)  {
    console.log(a*b);
} else {
    console.log(parseInt(b/a))
}