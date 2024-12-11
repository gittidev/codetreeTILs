const fs =  require('fs');
let n = fs.readFileSync(0).toString().trim().split("\n").map(i=>Number(i));
let index = 0

while (true) {
    let num = n[index]
    if (num===0) {
        break
    }
    console.log(num)
    index++

}