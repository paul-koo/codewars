// Array Helpers
// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

// Example
// var numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]


Array.prototype.square = function () {
    const result = this.map((element) => element ** 2);
    return result;
};
  
Array.prototype.cube = function () {
const result = this.map((element) => element ** 3);
return result;
};
  
Array.prototype.average = function () {
const result = this.reduce((acum, element) => element + acum, 0);
return result / this.length;
};
  
Array.prototype.sum = function () {
const result = this.reduce((acum, element) => element + acum, 0);
return result;
};
Array.prototype.even = function () {
const result = this.filter((element) => !(element % 2));
return result;
};
  
Array.prototype.odd = function () {
const result = this.filter((element) => element % 2);
return result;
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.square()); // [1, 4, 9, 16, 25]
console.log(numbers.cube()); // [1, 8, 27, 64, 125]
console.log(numbers.sum()); // 15
console.log(numbers.average()); // 3
console.log(numbers.even()); // [2, 4]
console.log(numbers.odd()); // [1, 3, 5]
