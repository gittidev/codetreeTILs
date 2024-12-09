const fs = require('fs');

let m =  Number(fs.readFileSync(0).toString().trim());

// 3~5 봄  6~8여름 9~11 가을 12~2 겨울
if (m<=11 && m>=9) {
    console.log('Fall')
} else if (m>=6)  {
    console.log("Summer")
}  else if (m>=3) {
    console.log('Spring')
} else {
    console.log('Winter')
}
