const fs = require("fs");

let people  = fs.readFileSync(0).toString().trim().split("\n");

let [A_age, A_sex] = people[0].split(' ');
let [B_age, B_sex] = people[1].split(' ');

if ((Number(A_age)>=19 &&  A_sex=="M" ) ||  (Number(B_age)>=19 &&  B_sex=="M" )) {
    console.log(1)
}  else {
    console.log(0)
}