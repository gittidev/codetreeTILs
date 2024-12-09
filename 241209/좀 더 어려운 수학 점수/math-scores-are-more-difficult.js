const fs  = require("fs");

let [A,B] = fs.readFileSync(0).toString().trim().split("\n")

let [A_math, A_english] = A.split(" ")
let [B_math, B_english] = B.split(" ")


if (A_math===B_math && (A_english > B_english)) {
    console.log('A')
}  else if (A_math===B_math && (A_english < B_english))  {
    console.log("B")
} else if (A_math>B_math)  {
    console.log('A')
} else if (A_math < B_math) {
    console.log("B")
}