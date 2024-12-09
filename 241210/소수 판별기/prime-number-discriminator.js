const fs =  require("fs");

let Cnt =0 

let n = Number(fs.readFileSync(0).toString().trim());

for (let i=1; i<=n; i++) {
    if (n%i==0) {
        Cnt++
    }
}

if (Cnt>2)  {
    console.log("C")
} else {
    console.log("P")
}
