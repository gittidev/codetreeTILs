const fs  = require("fs");

let [m, e] =  fs.readFileSync(0).toString().trim().split(' ').map(i=> Number(i));


if ((m>=90))  {
    if (e>=95) {
        console.log(100000)
    } else if (e>=90) {
        console.log(50000)
    } else  {
        console.log(0)
    }
    
} else {
    console.log(0)
}