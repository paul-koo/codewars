// ROT13
// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

// "EBG13 rknzcyr." -> "ROT13 example."

// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

function rot13(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
            if ((str.charCodeAt(i) + 13) > 122) {
                result = result + String.fromCodePoint(str.charCodeAt(i) - 13)
            } else {
                result = result + String.fromCodePoint(str.charCodeAt(i) + 13)
            }
        } else if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
            if ((str.charCodeAt(i) + 13) > 90) {
                result = result + String.fromCodePoint(str.charCodeAt(i) - 13)
            } else {
                result = result + String.fromCodePoint(str.charCodeAt(i) + 13)
            }
        } else {
            result = result + str[i];
        }
    }
    return result;

    console.log('a'.charCodeAt(0));
    console.log('z'.charCodeAt(0));
    console.log('A'.charCodeAt(0));
    console.log('Z'.charCodeAt(0));
}

console.log(rot13("This is my first ROT13 excercise!"));
console.log(rot13('EBG13 rknzcyr.'))