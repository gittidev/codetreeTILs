const fs = require("fs");

let a = parseInt(fs.readFileSync(0));

if (a===1) {
    console.log("John")
} else if (a ===2 ){
    console.log("Tom")
} else if (a===3) {
    console.log("Paul")
}