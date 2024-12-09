const fs = require("fs");

let info = fs.readFileSync(0).toString().trim().split("\n");

let [sex, age]= info.map(i => Number(i));

if  (sex === 0 )  {
    if (age  >= 19) {
        console.log('MAN')
    } else {
        console.log("BOY")
    }
}

if (sex ===1) {
    if (age>=19) {
        console.log("WOMAN")
    } else {
        console.log("GIRL")
    }
}