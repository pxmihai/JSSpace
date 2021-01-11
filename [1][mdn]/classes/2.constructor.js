// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
if (0) {
    class Polygon {
        v = "some";

        constructor() {
            this.name = 'Polygon';
        }
    }

    const poly1 = new Polygon();

    console.log(poly1.v);
// expected output: "Polygon"
}
if (0) {
    class Triple {
        static customName = 'Tripler';
        static description = 'I triple any number you provide';

        static triple(n = 1) {
            return n * 3;
        }
    }

    class BiggerTriple extends Triple {
        static longDescription;
        static description = 'I square the triple of any number you provide';

        static triple(n) {
            return super.triple(n) * super.triple(n);
        }
    }

    console.log(Triple.description);   // 'I triple any number you provide'
    console.log(Triple.triple());      // 3
    console.log(Triple.triple(6));     // 18

    let tp = new Triple();

    console.log(BiggerTriple.triple(3));        // 81 (not affected by parent's instantiation)
    console.log(BiggerTriple.description);      // 'I square the triple of any number you provide'
    console.log(BiggerTriple.longDescription);  // undefined
    console.log(BiggerTriple.customName);       // 'Tripler'

    console.log(tp.triple());         // 'tp.triple is not a function'.

} //some code from another place
if (0) {
    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }

    let me = new Rectangle(1, 2)
}
if (0) {
    const p = new Rectangle(); // ReferenceError

    class Rectangle {
    }

} // as expected
if (0) {
    {// unnamed
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
if (0){
    class Person {

        constructor(name) {
            this.name = name;
        }

        introduce() {
            console.log(`Hello, my name is ${this.name}`);
        }

    }

    const otto = new Person('Otto');

    otto.introduce();
}
if (0){
    class ValidationError extends Error {

        printCustomerMessage() {
            return `Validation failed :-( (details: ${this.message})`;
        }

    }

    try {
        throw new ValidationError("Not a valid phone number");
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log(error.name); // This is Error instead of ValidationError!
            console.log(error.printCustomerMessage());
        } else {
            console.log('Unknown error', error);
            throw error;
        }
    }
} //todo come back here
if (1){

}

