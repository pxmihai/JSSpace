let array1=[1,2,3,4,5,6,7,8,9,10];
let array2= {1:"a",2:"b",3:"c",4:"d",5:"e",6:"f",7:"g",8:"h",9:"i",10:"j"};
let array3= [
    { id: 20, name: 'Captain Piett',gender: 'male',email:"a@b.c" },
    { id: 24, name: 'General Veers',gender: 'female',email:"b@a.c" },
    { id: 56, name: 'Admiral Ozzel',gender: 'male',email:"c@a.c" },
    { id: 88, name: 'Commander Jerjerrod',gender: 'female',email:"d@a.c" }
];
console.log([1,2,3,4].map(x=>x+1));
/*
array.map(function(currentValue, index, arr), thisValue)

let new_array = arr.map(function callback( currentValue[, index[, array]]) {
 // return element for new_array
}[, thisArg])
 */
