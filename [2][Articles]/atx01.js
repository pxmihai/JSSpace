// https://itnext.io/arrow-functions-javascript-es6-feature-series-pt-2-e8c31c823392
if (0) {
    //Anatomy of A Function Declaration
    function multiply(number1, number2) {
        return number1 * number2;
    }

    console.log(multiply(4, 9));
    // prints: 36 to the console
}
// --------------------------------------------------
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
            console.log(n)

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
if (1){
    // Function Declaration Hoisting vs. Function Expression Not Hoisting

    console.log(hoistedFunction()); // prints: I am a function declaration so I am hoisted to the top of the scope at run time
    function hoistedFunction() {
    return 'I am a function declaration so I am hoisted to the top of the scope at run time';
}
console.log(stillNotHoisted());
    // prints: TypeError: stillNotHoisted is not a function
    const stillNotHoisted = function() {
return 'I am a function expression and therefore, hoisting does not apply to me';
}
console.log(stillNotHoisted()); // prints: I am a function expression and therefore, hoisting does not apply to me
}






























