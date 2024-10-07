//Find The Parity Outlier
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

// function findOutlier(integers) {
//     let result = 0;
//     if ((integers[0] % 2) + (integers[1] % 2) + (integers[2] % 2) > 1) {
//         integers.forEach((el) => {
//             if (el % 2 === 0) result = el;
//         });
//     } else {
//         integers.forEach((el) => {
//             if (!(el % 2 === 0)) result = el;
//         });
//     }
//     return result;
// }

function findOutlier(integers) {
    return integers.filter((el) => Math.abs(el) % 2 === 0).length === 1
        ? integers.filter((el) => Math.abs(el) % 2 === 0)[0]
        : integers.filter((el) => Math.abs(el) % 2 === 1)[0];
}

//  3, 3, 0 , 3

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); //11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); //160
console.log(findOutlier([1, 2, 3])); //2
console.log(
    findOutlier([
        195388934, 94091656, 41520160, -30787740, 180822898, -124383752,
        -163863905, 96741944, -157921712, 54529716, -128315040, 132172698,
        -50548338, 194462760, 44058192, 64021816, -117940188, -30221274,
    ])
); //-163863905
