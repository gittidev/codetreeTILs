const fs = require("fs");

let a = parseFloat(fs.readFileSync(0));

if (a >= 1.0) {
    console.log("High")

} else if (a < 0.5) {
    console.log("Low")
} else {
    console.log("Middle")
}