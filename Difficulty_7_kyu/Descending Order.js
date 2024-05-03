// Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// function descendingOrder(n){
//     let arrNumbers = String(n).split('');
//     const maxElmentInArr = (arr) => String(Math.max.apply(null, arrNumbers));
//     let result = '';
//     for (let i = 0; String(n).length > i; i ++) {
//         result = result + maxElmentInArr(arrNumbers);
//         arrNumbers.splice(arrNumbers.indexOf(maxElmentInArr(arrNumbers)), 1);
//     }
//     return Number(result);
// }

function descendingOrder(n){
    return Number(String(n).split('').sort().reverse().join(''));
}

console.log(descendingOrder(123456789))