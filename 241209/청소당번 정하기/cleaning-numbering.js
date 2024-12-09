const fs =require("fs");

let n = Number(fs.readFileSync(0).toString().trim());

let [a,b,c] = [0,0,0];

for (let i =0 ; i<n; i++) {
    if (i%12 == 0 &&  i!=0) {
        c++
    } else if (((i%2==0 && i%3==0) || i%3==0) && i!=0) {
        b++
    } else if  (i%2==0 && i!=0) {
        a++
    }
}

console.log(a,b,c)