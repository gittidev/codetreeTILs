const fs =  require('fs');

let arr = fs.readFileSync(0).toString().trim().split("\n").map(i=> Number(i));

let cnt = 0;

for (let i=0; i<6; i++)  {
    if (arr[i]%2==0) {
        cnt++
    }
}

console.log(cnt)