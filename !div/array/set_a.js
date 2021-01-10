import {increase} from "../../module";

console.log(increase());

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32] checks

let numbers_a = [1, 4, 9]
let roots = numbers_a.map(function(num) {
    return Math.sqrt(num)
})

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

console.log(increase());

let kvArray = [{key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj => {
    let rObj = {}
    rObj[obj.key] = obj.value
    return rObj
})
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]

let numbers = [1, 4, 9];
let doubles = numbers.map(function(num) {
    return num * 2
})

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]

let map = Array.prototype.map
let a = map.call('Hello World', function(x) {
    return x.charCodeAt(0)
})
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]




