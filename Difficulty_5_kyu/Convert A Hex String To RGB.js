//Convert A Hex String To RGB
// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. 
//Implement a function that meets these requirements:
// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")
// Example
// "#FF9933" --> {r: 255, g: 153, b: 51}

function hexStringToRGB(hexString) {
    const map = {};
    ['r', 'g', 'b'].forEach((elem, i) => { map[elem] = parseInt(hexString.slice((i * 2 + 1), i * 2 + 3), 16); });
    return map;
}

console.log(hexStringToRGB('#FF9933')); // {r:255, g:153, b:51}
console.log(hexStringToRGB('#beaded')); // {r:190, g:173, b:237}
console.log(hexStringToRGB('#000000')); // {r:0, g:0, b:0}