
// https://codeburst.io/useful-javascript-array-and-object-methods-6c7971d93230

// filter

const data1=[1,2,3,4,5,6];
const datareturn1=data1.filter(x=>x>3);
console.log(datareturn1);

// map

const numbersx = [2, 3, 4, 5];
const dollars = numbersx.map( number => '$' + number);// dollars will be equal to ['$2', '$3', '$4', '$5']
console.log(dollars)

// reduce

const numbersy = [5, 10, 15];
const total = numbersy.reduce( (accumulator, currentValue) => accumulator + currentValue);  // total will be equal to 30

console.log(total);

// todo add a function in a reduce

// fixme change this into a normal comment

let p = {
// x and y are regular read-write data properties.
    x: 2.0,
    y: 3.0,
// r is a read-write accessor property with getter and setter.
// Don't forget to put a comma after accessor methods.
    get r() { return Math.hypot(this.x, this.y); },
    set r(newvalue) {
        let oldvalue = Math.hypot(this.x, this.y);
        let ratio = newvalue/oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },
// theta is a read-only accessor property with getter only.
    get theta() { return Math.atan2(this.y, this.x); }
};
p.r // => Math.SQRT2
p.theta // => Math.PI / 4


let input = [
    {"type": "rotten apples", "material": "organic"},
    {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
    {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
    {"type": "amazon box", "material": "paper"},
    {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]