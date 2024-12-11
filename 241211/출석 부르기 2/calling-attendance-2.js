const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n").map(i=>Number(i));
let index = 0;

while (index < input.length) {
    let num = input[index];
    
    switch (num) {
        case 1: 
            console.log("John");
            break;
        case 2: 
            console.log("Tom");
            break;
        case 3: 
            console.log("Paul");
            break;
        case 4: 
            console.log("Sam");
            break;
        default: 
            console.log("Vacancy");
            process.exit();  // 프로그램 종료
    }
    index++;
}