const fs =  require('fs');

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(i=>Number(i));

let Sum=0;
let Cnt=0
for (let i=a; i<=b; i++) {
    if (i%5==0 || i%7==0) {
        Sum+=i
        Cnt++
    }
}

console.log(Sum,(Sum/Cnt).toFixed(1))