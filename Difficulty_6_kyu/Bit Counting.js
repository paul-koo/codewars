//Bit Counting

// Write a function that takes an integer as input, and returns the number of bits that are equal to one
//  in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function (n) {
    // if (n === 0) {
    //     return n;
    // }
    return n
        .toString(2)
        .split('')
        .reduce((acc, cur) => Number(acc) + Number(cur), 0);
};

console.log(countBits(10)); //2
console.log(typeof countBits(0)); //2
console.log(countBits(0)); //0
