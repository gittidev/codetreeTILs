const fs = require("fs");

let a = parseInt(fs.readFileSync(0));

if (a >=113) {
    console.log(1);
} else {
    console.log(0)
}