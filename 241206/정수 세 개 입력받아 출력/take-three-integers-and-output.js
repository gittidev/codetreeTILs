const fs =  require("fs");

let [arr, c]  = fs.readFileSync(0).toString().split("\n")


console.log(arr,c)