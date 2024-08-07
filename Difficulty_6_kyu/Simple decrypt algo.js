//Simple decrypt algo
// You'll be given a string of random characters (numbers, letters, and symbols). To decode this string into the key we're searching for:
// (1) count the number occurences of each ascii lowercase letter, and
// (2) return an ordered string, 26 places long, corresponding to the number of occurences for each corresponding letter in the alphabet.
// For example:
// '$aaaa#bbb*cc^fff!z' gives '43200300000000000000000001'
//    ^    ^   ^  ^  ^         ^^^  ^                   ^
//   [4]  [3] [2][3][1]        abc  f                   z
// 'z$aaa#ccc%eee1234567890' gives '30303000000000000000000001'
//  ^  ^   ^   ^                    ^ ^ ^                    ^
// [1][3] [3] [3]                   a c e                    z

function decrypt(encryption) {
    let arr = new Array(26).fill(0, 0, 26)
    encryption.replace(/[^a-z]/g, '').split('').forEach(elem => arr[elem.charCodeAt(0)-97] += 1)
    return arr.join('')
}

console.log(decrypt('$aaaa#bbb*cc^fff!z')) // '43200300000000000000000001'
console.log(decrypt('z$aaa#ccc%eee123456789')) // '30303000000000000000000001'
