const fs =  require('fs');

let input =  fs.readFileSync(0).toString().trim().split("\n");
let index = 0;

while (index<input.length) {

    let arr = input[index].split(" ");
    let width = Number(arr[0]);
    let height = Number(arr[1]);
    let text =arr[arr.length - 1];
    let extent = width*height;

    if (text=="c") {
        console.log(extent)
        break;
    } 
    console.log(extent)
    index++

}