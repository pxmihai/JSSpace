const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

console.log(array1.map(reducer, 5));
// expected output: 15

///////////////////////////////////////
console.log('tilt');

var array2 = [1, 4, 9, 16];

// pass a function to map
const map1 = array2.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
//

var array3 = [1, 4, 9, 16];

// pass a function to map
const map2 = array3.reduce(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]