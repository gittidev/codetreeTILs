const fs = require("fs");

let [A,B] = fs.readFileSync(0).toString().trim().split("\n")

let [a_math, a_english] = A.split(" ").map(i=>Number(i))
let [b_math, b_english] = B.split(" ").map(i=>Number(i))


if (a_math > b_math && a_english>b_english) {
    console.log(1)
} else {
    console.log(0)
}