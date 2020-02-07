//
// map
// filter
// reduce.
let weFollow={};
let aLong={
        // slot1:[7,8,9],
        // slot2:[1,2,3,],
        // slot3:[4,5,6]
};

let first=[1,2,3,4,5,6,7,8,9,11];
let second=[];

second=first.map(i=>i+1);

// console.log(second);

/*returns
* [ '1,2,31', 3, 4, 5 ]
* */

function isBigEnough(value) {
    return value >= 2;
}
// second=first.filter(isBigEnough);

// console.log(first.filter( i => i > 2));

// `const mapcols = (arr, callback) => arr.map((cols, rowIdx, rows) => cols.map((col, colIdx, row) => callback(col, colIdx, row, rows)))` or something like that


let squeeze= (red,rose)=>red+rose;

console.log(first.reduce(squeeze));


// console.log(first.flatMap())