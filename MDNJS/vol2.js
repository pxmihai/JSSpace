// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
let me='be';
console.log(me);
let start=0;
function status(){
    start++;
    console.log('['+start+' position]');
}

function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
};

Person.prototype.greeting = function() {
    console.log('Hi! I\'m ' + this.name.first + '.');
};

let them= new Person('someGreatLeader','KingPink',12,'male',['ski','tetris']);
them.greeting();

function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);

    this.subject = subject;
}


console.log(Object.getOwnPropertyNames(Person.prototype));
//person > constructor greeting
//teacher > constructor
console.log(status());
console.log(Person.prototype.greeting);
console.log(Teacher.prototype.greeting);
console.log(status());
Teacher.prototype = Object.create(Person.prototype);
