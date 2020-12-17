let str = "atul kumar srivastava";
let obj ={};
for(let s of str)if(!obj[s])obj[s] = 1;else obj[s] = obj[s]  + 1;
console.log(obj)

let s = 'hello';
let result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
console.log(result); // {h: 1, e: 1, l: 2, o: 1}


// The string
var xstr = "I want to count the number of occurances of each char in this string";

// A map (in JavaScript, an object) for the character=>count mappings
var counts = {};

// Misc vars
var ch, index, len, count;

// Loop through the string...
for (index = 0, len = xstr.length; index < len; ++index) {
    // Get this character
    ch = xstr.charAt(index); // Not all engines support [] on strings

    // Get the count for it, if we have one; we'll get `undefined` if we
    // don't know this character yet
    count = counts[ch];

    // If we have one, store that count plus one; if not, store one
    // We can rely on `count` being falsey if we haven't seen it before,
    // because we never store falsey numbers in the `counts` object.
    counts[ch] = count ? count + 1 : 1;
}
console.log(counts)