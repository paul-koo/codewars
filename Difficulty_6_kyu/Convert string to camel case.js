//Convert string to camel case
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    return str
        .split(/[-_]/)
        .reduce((acc, cur) => acc + cur.charAt(0).toUpperCase() + cur.slice(1));
}

console.log(toCamelCase('the_stealth_warrior')); // "theStealthWarrior"
console.log(toCamelCase('A-B-C')); // "ABC"
console.log(toCamelCase('The_Stealth-Warrior')); // "TheStealthWarrior"
