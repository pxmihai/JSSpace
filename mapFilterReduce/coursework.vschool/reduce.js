//1) Turn an array of numbers into a total of all the numbers
function total(arr) {
    return arr.reduce((total,value)=>total+value);
}

console.log(total([1,2,3])); // 6

//2) Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) {
    return arr.reduce( (total,value)=>total +''+value);
}

console.log(stringConcat([1,2,3])); // "123"