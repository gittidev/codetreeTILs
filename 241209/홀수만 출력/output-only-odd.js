const fs=require('fs');

let [a,b] = fs.readFileSync(0).toString().trim().split(' ').map(i=>Number(i));

result = '';

if (a%2==0) {
    a+=1
}

for ( let i = a; (i<=b); i+=2) {
    result +=(i +  " ")
}

console.log(result)