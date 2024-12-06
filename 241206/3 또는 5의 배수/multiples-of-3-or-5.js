const fs =require('fs');

let a =parseInt(fs.readFileSync(0));

if  (a%3===0) {
    console.log("YES")
} else {
    console.log("NO")
}


if  (a%5===0) {
    console.log("YES")
} else {
    console.log("NO")
}