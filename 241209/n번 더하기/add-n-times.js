const fs =  require('fs');

let [a,n] = fs.readFileSync(0).toString().trim().split(' ').map(i => Number(i));

for (let i=1;  i<=n; i++)  {
    console.log(a+n)
    a+=n
}