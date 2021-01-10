// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
if (0) {
    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }
}
if (0) {
    //hoisting
    ok();

    function ok() {
        console.log("ok")
    }

    ok();
}
if (0) {
    // const me=new Ok(); // not hoisted
    class Ok {
        prints() {
            console.log("ok")
        }
    }

    const metoo = new Ok();
}
if (0) {
    {    // unnamed
        let Rectangle = class {
            constructor(height, width) {
                this.height = height;
                this.width = width;
            }
        };
        console.log(Rectangle.name);
        // output: "Rectangle"
    }

    {// named
        let Rectangle = class Rectangle2 {
            constructor(height, width) {
                this.height = height;
                this.width = width;
            }
        };
        console.log(Rectangle.name);
        // output: "Rectangle2"
    }

}
if (0) {
    class Rectangle {
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

    const square = new Rectangle(10, 10);

    console.log(square.area); // 100
}
if (0) {
    // generator methods
    class Polygon {
        constructor(...sides) {
            this.sides = sides;
        }

        // Method
        * getSides() {
            for (const side of this.sides) {
                yield side;
            }
        }
    }

    const pentagon = new Polygon(1, 2, 3, 4, 5);

    console.log([...pentagon.getSides()]); // [1,2,3,4,5]
}// todo come back to generator and yield
if (0) {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        static displayName = "Point";
        static used = 1;

        static distance(a, b) {
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            return Math.hypot(dx, dy);
        }
    }

    const p1 = new Point(5, 5);
    const p2 = new Point(10, 10);
    // p1.displayName; // undefined
    // p1.distance;    // undefined
    // p2.displayName; // undefined
    // p2.distance;    // undefined
    console.log(Point.displayName);      // "Point"
    console.log(Point.distance(p1, p2)); // 7.0710678118654755
}/* i can access a static member of the class with the this.member but not with member and i can access it only when i acess the class directly and not as a new object of that class.*/
if (0) {
    class Animal {
        speak() {
            return this;
        }

        static eat() {
            return this;
        }
    }

    let obj = new Animal();
    obj.speak(); // the Animal object // as expected
    let speak = obj.speak;
    speak(); // undefined // interesting

    Animal.eat() // class Animal
    let eat = Animal.eat;
    eat(); // undefined
}
if (0) {
    function Animal() {
    }

    Animal.prototype.speak = function () {
        return this;
    }

    Animal.eat = function () {
        return this;
    }

    let obj = new Animal();
    let speak = obj.speak;
    speak(); // global object (in non–strict mode)

    let eat = Animal.eat;
    eat(); // global object (in non-strict mode)

}// todo not sure of the implications and relevance of this, check again later
if (0) {
    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }

    Rectangle.staticWidth = 20;
    Rectangle.prototype.prototypeWidth = 25;

    console.log(Rectangle.staticWidth);
    console.log(Rectangle.prototypeWidth); //undefined
    console.log(Rectangle.prototype.prototypeWidth); //25
}//adding data to classes after cration
if (0) {
    class Rectangle {
        height = 0;
        width = 12;

        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }

}// explicitly create variables for constructors, maybe they can be used as default values if an object is not created or the object is created with partial or missing params
if (0) {
    //Private field declarations
    class Rectangle {
        #height = 1;
        #width = 1;
        x = 12;

        constructor(height, width) {
            this.#height = height;
            this.#width = width;
        }

        sum(a, b) {
            return a + b;
        }

        get1() {
            return this.x
        };

    }

    let test = new Rectangle();
    console.log(test.height);// undefined
    //console.log(Rectangle.#height)//    SyntaxError: Private field '#height' must be declared in an enclosing class
    console.log(test.sum(2, 2));
    console.log(test.get1())
}
if (0) {
    class Plant {
        value1 = 10;
        value2 = 20;
        value3 = 30;
        a;

        constructor(a, b, c) {
            this.a = a;
            this.b = b;
            this.c = c;
        }

        set(a) {
            this.a = a;
        }

        get() {
            return this.a;
        }
    }

    let ok = new Plant(1, 2, 3);
    // Plant.set(12);
    ok.set(12);

    console.log(ok.get());
}// todo need a better grasp on the this usage
if (0) {
    // sub classing with extends
    class Animal {
        constructor(name) {
            this.name = name;
        }

        speak() {
            console.log(`${this.name} makes a noise.`);
        }
    }

    class Dog extends Animal {
        constructor(name) {
            super(name); // call the super class constructor and pass in the name parameter
        }

        speak() {
            console.log(`${this.name} barks.`);
        }
    }

    let d = new Dog('Mitzie');// uses the same constructor but changes the speak method
    d.speak(); // Mitzie barks.

}
if (0) {
    class Parent {
        skill1 = 2;
        skill2 = 7;

        constructor(pConst1, pConst2) {
            this.skill1 = pConst1;
            this.skill2 = pConst2;
        }

        parentWay(a, b) {
            let v1 = a;
            let v2 = b;
            let bias = Math.random();
            return v1 + v2 + bias;
        }

    }

    class Child extends Parent {
        constructor(a, b) {
            super(a, b);
        }

        parentWay(a, b) {
            let bias = Math.random() / 2;
            return super.parentWay(a, b) - bias;
        }

    }

    let eve = new Parent();
    let adam = new Child(11, 12);
    console.log(adam.parentWay(1, 2));
    console.log(eve.parentWay(1, 2))
}// test hypothesis //todo recheck here
if (0) {//Sub classing with extends
    function Animal(name) {
        this.name = name;
    }

    Animal.prototype.speak = function () {
        console.log(`${this.name} makes a noise.`);
    }

    class Dog extends Animal {
        speak() {
            console.log(`${this.name} barks.`);
        }
    }

    let d = new Dog('Mitzie');
    d.speak(); // Mitzie barks.

// For similar methods, the child's method takes precedence over parent's method
}// all good
if (0) {
    const Animal = {
        speak() {
            console.log(`${this.name} makes a noise.`);
        }
    };

    class Dog {
        constructor(name) {
            this.name = name;
        }

        speak() {
            console.log(`${this.name} just testing.`); // this one takes precedence because it exists in the present class
        }
    }

// If you do not do this you will get a TypeError when you invoke speak
    Object.setPrototypeOf(Dog.prototype, Animal);
// set inheritance with no extends previously
    let d = new Dog('Mitzie');
    d.speak(); // Mitzie makes a noise.

} // looks good
if (0) {
    class MyArray extends Array {
        // Overwrite species to the parent Array constructor
        static get [Symbol.species]() {
            return Array;
        }
    }

    let a = new MyArray(1, 2, 3);
    let mapped = a.map(x => x * x);

    console.log(mapped instanceof MyArray); // false
    console.log(mapped instanceof Array);   // true

}// no idea what's going on
if (0) {
    // super class with super
    class Cat {
        constructor(name) {
            this.name = name;
        }

        speak() {
            console.log(`${this.name} makes a noise.`);
        }
    }

    class Lion extends Cat {
        speak() {
            super.speak();
            // ok so we can call inside a method the same method from the parent class
            // can we call any super.method from anywhere in the child class?
            console.log(`${this.name} roars.`);
        }
    }

    let l = new Lion('Fuzzy');
    l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.

} // basic example of some logic
if (1){
    //mix ins
    let calculatorMixin = Base => class extends Base {
        calc() { }
    };

    let randomizerMixin = Base => class extends Base {
        randomize() { }
    };

    class Foo { }
    class Bar extends calculatorMixin(randomizerMixin(Foo)) { }
}// logic looks good, implementation unknown

