// https://itnext.io/arrow-functions-javascript-es6-feature-series-pt-2-e8c31c823392
if (0) {
    //Anatomy of A Function Declaration
    function multiply(number1, number2) {
        return number1 * number2;
    }

    console.log(multiply(4, 9));
    // prints: 36 to the console
}
// --------------------------------------------------’
if (0) {
    function returnsNothing(item1, item2) {
        item1 + item2;
    }

    console.log(returnsNothing(1, 9));

// prints: undefined
    function returnsSomething(item1, item2) {
        return item1 + item2;
    }

    console.log(returnsSomething(1, 9));

// prints: 10
}
// --------------------------------------------------
if (0) {
    console.log(hoistedFunction());

    // prints: Hello, I work even though I am called before being declared
    function hoistedFunction() {
        return 'Hello, I work even though I am called before being declared';
    }

    // console.log(notHoisted());
    // prints: TypeError: notHoisted is not a function

    var notHoisted = function () {
        return 'I am not hoisted, so I will not be found if called before my declaration';
    }
    console.log(notHoisted());
    // prints: I am not hoisted, so I will not be found if called before my declaration
}
// --------------------------------------------------
if (0) {
//Anatomy of A Function Expression

    const divide = function (number1, number2) {
        return number1 / number2;
    }
    console.log(divide(15, 5));
    // prints: 3
}
// --------------------------------------------------
if (0) {
    const anonymous = function () {
        return 'I do not need my own name, as I am assigned to the variable anonymous';
    }
    console.log(anonymous());
    // prints: I do not need my own name, as I am assigned to the variable anonymous
}
// --------------------------------------------------
if (0) {
    // Named Function Expression (Explicit Naming at Work)

    const math = {
        'factit': function factorial(n) {
            console.log(n);
            if (n <= 1) {
                return 1;
            }
            return n * factorial(n - 1);
        }
    };
    math.factit(3)
    // console.log(math.factit(3));
    // prints: 3; 2; 1;
}
// --------------------------------------------------
if (0) {
    const cogitoErgoSum = (function () {
        const quote = "I think therefore I am";
        return quote;
    })();
    // immediately creates the output
    console.log(cogitoErgoSum);
    // prints: I think therefore I am
    (function () {
        const quote2 = "I am not outside this IIFE";
    })();
    quote2; // prints: ReferenceError: quote2 is not defined
}
// --------------------------------------------------
if (0) {
    // Function Declaration Hoisting vs. Function Expression Not Hoisting

    console.log(hoistedFunction()); // prints: I am a function declaration so I am hoisted to the top of the scope at run time
    function hoistedFunction() {
        return 'I am a function declaration so I am hoisted to the top of the scope at run time';
    }

    console.log(stillNotHoisted());
    // prints: TypeError: stillNotHoisted is not a function
    const stillNotHoisted = function () {
        return 'I am a function expression and therefore, hoisting does not apply to me';
    }
    console.log(stillNotHoisted()); // prints: I am a function expression and therefore, hoisting does not apply to me
}
// --------------------------------------------------
if (0) {
    // Anatomy of Two Basic Arrow Function Expressions

    if (0) {
        const basicArrow = () => {
            return 'The most basic of basic arrow functions';
        }
        console.log(basicArrow());
        // prints: The most basic of basic arrow functions
    }
    const basicArrow2 = oneParam => `Single line with ${oneParam} is also valid`;
    console.log(basicArrow2('only one param')); // prints: Single line with only one param is also valid
    const basicArrow3 = (and = 2, then = 3) => `${and}ok${then}`;
    console.log(basicArrow3(1, 2));
    console.log(basicArrow3());
    const basicArrow4 = (a = [1, 2, 3]) => `${a[2]}`
    console.log(basicArrow4());
    const basicArrow5 = (a = {sun: 21, moon: 12}) => `${a.moon}`
    console.log(basicArrow5());
}
// --------------------------------------------------
if (0) {
    // Traditional Function Expression:
    if (0) {
        let elements = ["Hydrogen", 'Helium', 'Lithium', 'Beryllium'];
        // console.log(elements.map(function (element) {
        //     return element.length;
        // }));
        // this statement returns the array: [8, 6, 7, 9]}

    }

    [1, {ok: 11, then: 12}, 2].map(function (a, b, c) {
        console.log("Current value " + a);
        console.log("Index " + b);

        console.log("[Value in the array 1] " + c[0] + " type " + typeof c[0]);
        console.log("[Value in the array 2] " + c[1] + " type " + typeof c[1]);
        console.log("[Value in the array 3] " + c[2] + " type " + typeof c[2]);

        console.log("---")
    });

}
// --------------------------------------------------
if (0) {
    //New Arrow Function Expression:
    let elements = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
    elements.map((element) => element.length);
    // this statement still returns the same array: [8, 6, 7, 9]
}
// --------------------------------------------------
if (0) {
    // No Hoisting, Only TypeErrors
    // console.log(fish());
    // prints: TypeError: fish is not a function
    const fish = (a, b) => ['perch' + a, 'salmon' + b, 'trout' + a, 'bass' + b];
    console.log(fish(1, 2));
    // prints: [ 'perch', 'salmon', 'trout', 'bass' ]
}
// --------------------------------------------------
if (0) {
    function Person() {
        // The Person() constructor defines `this` as an instance of itself.
        this.age = 0;

        setInterval(function growUp() {
            // In non-strict mode, the growUp() function defines `this`
            // as the global object (because it's where growUp() is executed.),
            // which is different from the `this`
            // defined by the Person() constructor.
            this.age++;
        }, 1000);
    }

    let p = new Person();

    while (1) console.log(p.age);


}//  maybe not the best example
// --------------------------------------------------
if (0) {
    function Person() {
        this.age = 0;

        setInterval(() => {
            this.age++; // |this| properly refers to the Person object
        }, 1000);
    }

    let p = new Person();
    while (1) console.log(p.age);
} //  maybe not the best example
// --------------------------------------------------
if (0) {
    //arguments with Arrow Functions

    if (0) {
        let arguments = [1, 2, 3];
        let arr = () => arguments[0];

        console.log(arr()); // prints: 1
    }

    if (0) {
        function foo(n) {
            let f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
            return f();
        }

        console.log(foo(3)); // prints: 6
    }

} // come back later , why does it only work with arguments[0]? because it only receives one parameter, thus naming is confusing
// --------------------------------------------------
if (0) {
    // Rest Parameters Instead of arguments with Arrow Functions
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

    function foo(n) {
        let f = (...args) => args[0] +args[1] + n;
        return f(10,20,30);
    }

    console.log(foo(1)); // prints: 31
}
// --------------------------------------------------
if (0){
    let Foo = () => {};
    let foo = new Foo(); // prints: TypeError: Foo is not a constructor
}
// --------------------------------------------------

// done !




























