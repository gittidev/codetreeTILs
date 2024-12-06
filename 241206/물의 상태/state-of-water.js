const fs = require('fs');

let  a = parseInt(fs.readFileSync(0));

if (a<0) {
    console.log('ice');
} else if (a >=100) {
    console.log('vapor');
} else {
    console.log('water')
}