const fs  = require("fs");

let count = 0

let [A,B,C] = fs.readFileSync(0).toString().trim().split("\n");

let [A_symtom, A_temp] = A.split(" ");
let [B_symtom, B_temp] = B.split(" ");
let [C_symtom, C_temp] = C.split(" ");

if (A_symtom==="Y" && Number(A_temp)>=37)  {
    count+=1
}

if (B_symtom==="Y" && Number(B_temp)>=37)  {
    count+=1
}

if (C_symtom==="Y" && Number(C_temp)>=37)  {
    count+=1
}

if (count >=2){
    console.log("E")
} else {
    console.log("N")
}