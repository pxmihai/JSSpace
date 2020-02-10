//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

class Animal{
    constructor(picioare,cap,culoare,dinti){
        this.picioare=picioare;
        this.cap=cap;
        this.culoare=culoare;
        this.dinti=dinti;
    }
     bark(){
        console.log('HamHam');
    }
}

let Rover= new Animal();
Rover.bark();

let mouse = new Rectangle();

mouse.height=1;
mouse.width=2;

console.log(mouse.height=1, ' ',mouse.width=2);

// x

class Rectangle2 {}
const p = new Rectangle2(); // ReferenceError
// x
// unnamed
let Rectangle3 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle3.name);
// output: "Rectangle3"
// x
let Rectangle5 = class Rectangle4 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle5.name);
// output: "Rectangle4"
// x
class Rectangle6 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle6(10, 10);

console.log(square.area); // 100

// x

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.distance; //undefined
p2.distance; //undefined

console.log(Point.distance(p1, p2)); // 7.0710678118654755

// x

class Animalx {
    speak() {
        console.log('Just Visiting');
        return this;
    }
    static eat() {
        console.log('Just Checking');
        return this;
    }
}

let obj = new Animalx();
obj.speak(); // Animalx {}
let speak = obj.speak;
console.log(speak()); // undefined

Animalx.eat() // class Animal
let eat = Animalx.eat;
console.log(eat()); // undefined

// x

function Animaly() { }

Animaly.prototype.speak = function() {
    return this;
}

Animaly.eatx = function() {
    return this;
}

let objx = new Animaly();
let speakx = objx.speak;
console.log(speakx()); // global object

let eatx = Animaly.eat;
console.log(eat()); // global object

// x
class Rectangles {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

Rectangles.staticWidth = 20;
Rectangles.prototype.prototypeWidth = 25;

let meTry = new Rectangles(11,11);
console.log('----------');
console.log(meTry.height);
console.log(meTry.width);
console.log(meTry.prototypeWidth);
console.log(meTry.staticWidth);

// x

class Rectangle1 {
    height = 0;
    width;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

let meSee=new Rectangle1(99,12);
console.log(meSee.height); //99

// x

class Rectongle {
    #height = 0;
    #width;
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }
}

let ohReally= new Rectongle(3,3);
console.log(ohReally.height); //undefined

// x

class Animalo {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animalo {
    constructor(name) {
        super(name); // call the super class constructor and pass in the name parameter
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.

// x

class MyArray extends Array {
    // Overwrite species to the parent Array constructor
    static get [Symbol.species]() { return Array; }
}

let a = new MyArray(1,2,3);
let mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
// x

class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a (Cat)noise.`);
    }
}

class Lion extends Cat {
    speak() {
        super.speak();
        console.log(`${this.name} (Lion)roars.`);
    }
}

let l = new Lion('Fuzzy');
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.
//x

let calculatorMixin = Base => class extends Base {
    calc() { }
};

let randomizerMixin = Base => class extends Base {
    randomize() { }
};

class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }

