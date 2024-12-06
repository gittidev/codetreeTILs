const fs =  require("fs");

let time = fs.readFileSync(0).toString().trim()

let [h, m] = time.split(":").map(item => Number(item));

console.log(`${h+1}:${m}`)