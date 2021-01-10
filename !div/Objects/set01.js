// https://dev.to/zac_heisey/objects-vs-arrays-2g0e

// Basic object syntax
// let object = {
//     key: 'value'
// };
// console.log(object);
// console.log(object.key);

// Example 'person' object
let person = {
    name: 'Zac',
    age: 33,
    likesCoding: true
};

let vacationSpots = ['Tokyo', 'Bali', 'Mexico City', 'Vancouver'];


person.likesCoding=false;
person.hobbies = ['hiking', 'travel', 'reading'];
// console.log(person.age)
delete person.age;


// Dot notation
// console.log(person.name) // returns 33

// Bracket notation
// console.log(person['name']) // returns 33
// console.log(person.likesCoding) // returns false
// console.log(person.hobbies) // returns [ 'hiking', 'travel', 'reading' ]

// for (let key in person) {
//     console.log(key); // logs keys in myObject
//     console.log(person[key]); // logs values in myObject
// }

// Object.keys(person).forEach(function(key) {
//     console.log(key); // logs keys in myObject
//     console.log(person[key]); // logs values in myObject
// });

console.log(vacationSpots[2]); // returns 'Mexico City'

// push() - Adds item(s) to the end of an array
vacationSpots.push('Miami');
console.log(vacationSpots)

// pop() - Removes the last item from an array
vacationSpots.pop();
console.log(vacationSpots)

// unshift() - Adds item(s) to the beginning of an array
vacationSpots.unshift('Cape Town', 'Moscow');
console.log(vacationSpots)

// shift() - Removes the first item from an array
vacationSpots.shift();
console.log(vacationSpots)

for (let i = 0; i < vacationSpots.length; i++) {
    console.log(vacationSpots[i]); // logs items in myArray
}

for (let item of vacationSpots) {
    console.log(item); // logs items in myArray
}

vacationSpots.forEach(a =>console.log(a) );  // logs items in myArray









