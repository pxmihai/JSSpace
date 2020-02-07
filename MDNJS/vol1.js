// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
let banana=12;
function Hello(){
    return 1;
}
function Person(first, last, age, gender, interests) {

    // property and method definitions
    this.name = {
        'first': first,
        'last' : last
    };
    this.age = age;
    this.gender = gender;
    //...see link in summary above for full definition
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

console.log(person1.age);

// console.log(Person.prototype);
// console.log(Object.prototype);

let myString = 'This is my string.';

let person2 = Object.create(person1);

let person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);

console.log(person3.name.first);
console.log(person3.age);
// console.log(person3.bio());

Person.prototype.farewell = function() {
    console.log(this.name.first + ' has left the building. Bye for now!');
};

person1.farewell();