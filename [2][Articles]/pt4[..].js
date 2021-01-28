// https://itnext.io/spread-rest-parameters-javascript-es6-feature-series-pt-4-c9e9f0c0228f

// -------------------------------------------------- … Rest Parameters

if (0) {
    // Anatomy of Rest Parameters in a Function Declaration

    function f(x, y, ...a) {
        console.log(a);
        console.log(a.length);
        return (x + y) * a.length; // (1+2)*3
    }

    console.log(f(1, 2, "hello", true, 7))
    // prints: 9
} // works as expected, length is 3, position starts from 0 etc.
if (0) {
    // Rest Parameters in an Arrow Function

    const product = (e, f, ...g) => {
        return e * f + g.length; //4*7+3
    }
    console.log(product(4, 7, 2, 6, 3));
    // prints: 31
} // as expected
if (0) {
    // Only the Last Param Can Have …
    function myNumberFunction(a, b, c, ...d) {
        console.log("a", a);  // a 1
        console.log("b", b); // b 2
        console.log("c", c); // c 3
        console.log("...d", d); //...d [ 4, 5, 6, 7, 8]
    }

    myNumberFunction(1, 2, 3, 4, 5, 6, 7, 8);
} // etc
if (0) {
    // Easy Actioning on Rest Parameter Arrays

    function doubleUp(...simpleArgs) {
        const arr = simpleArgs;
        const secondArr = arr.map(num => num * 2);
        return secondArr;
    }

    console.log(doubleUp(2, 6, 12, 18));
    // [ 4, 12, 24, 36 ]
}
if (0) {
    // Array Destructuring with a Rest Parameter

    const [captain, coCaptain, ...devs] = ["Bridget", "Joe", "Kyle", "Drew", "Patrick", "Francisco"];
    console.log(captain); // ‘Bridget’
    console.log(coCaptain); // ‘Joe’
    console.log(devs); // [ ‘Kyle’, ‘Drew’, ‘Patrick’, ‘Francisco’ ]
    console.log(devs[3]);
    console.log(devs[3].length + 1);
} // array destructuring
if (0) {
    // Object Destructuring with a Rest Parameter
    const {pm1, pm2, ...restOfTeam} = {
        pm1: "Jeremy",
        pm2: "Tung",
        developer1: "Casey",
        developer2: "Mark",
        ux: "Christina"
    };
    console.log(pm1); // Jeremy
    console.log(pm2); // Tung
    console.log(restOfTeam); // { developer1: 'Casey', developer2: 'Mark', ux: 'Christina' }
}// object destructuring, same as array

// -------------------------------------------------- Spread syntax
if (0) {
    // The Spread Syntax at Work in Functions, Arrays, Strings and Objects


    if (0) {
        // For function calls:
        function multiply(x, y, z) {
            return x * y * z;
        }

        const args = [1, 2, 3];
        console.log(multiply(...args));
        // 6
    }

    if (0) {
        // For array literals or strings:
        const iterableObj = [{protein: "steak"}, {carb: "potato"}, 'milkshake'];
        const randomList = [...iterableObj, '4', 'five', 6];
        console.log(randomList);
        // [ { protein: 'steak' }, { carb: 'potato' }, 'milkshake', '4', 'five', 6 ]
    } // added/made a larger array from the initial array

    if (0) {
        // same as above but modified a bit
        const iterableObj = [{protein: "steak"}, {carb: "potato"}, 'milkshake'];
        const randomList = {...iterableObj, '4': 1, 'five': 2, 6: 3};
        console.log(randomList);
        // {
        //   '0': { protein: 'steak' },
        //   '1': { carb: 'potato' },
        //   '2': 'milkshake',
        //   '4': 1,
        //   '6': 3,
        //   five: 2
        // }
    }


    if (0) {
        const str = "foo"
        const chars = [...str]
        console.log(chars);
        // [ "f", "o", "o" ]
    }
    if (0) {
        // For object literals (new in ECMAScript 2018):
        const powerTool = {skuNumber: "‘996655’", skuDescription: "‘Drill Bit’"};
        let secondPowerTool = {...powerTool, toolDepartment: 25, toolClass: 7};
        console.log(secondPowerTool);
        // { skuNumber: ‘996655’, skuDescription: ‘Drill Bit’, toolDepartment: 25, toolClass: 7 }
    } // as expected
}
if (0) {
    if (0) {
        function myFunction(x, y, z) {
        }

        let args = [0, 1, 2];
        console.log(myFunction.apply(null, args));
    } // does nothing
    if (0) {
        function myFunction(x, y, z) {
            return x + y + z;
        }

        let args = [0, 1, 2];
        console.log(myFunction.apply(null, args));
    } // does something
    if (1) {
        //func.apply(thisArg, [ argsArray])
        let x = [1, 2, 3, 4];
        if (1) {


            function ok(a, b, c) {
                let save = c.reduce((a, b) => a + b, 0);
                return a + b + save
            };

            console.log(ok(1, 2, x));
        }

        x.push.apply(x, [9, 8, 7, 6]);
        console.log(x);
        console.log(ok(1, 2, x));


    }  // does something else
} // todo come back to the apply method https://www.w3schools.com/js/js_function_apply.asp https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
if (0) {
    // Spreading a List of Array Elements into a Function Call

    function myFunction(x, y, z) {
        return arguments[0] + arguments[1] + arguments[2];
    }

    let args = [0, 1, 2, 3];
    console.log(myFunction(...args));
} // changed the default a bit
if (0) {
    // Multiple Spreads in a Single Function Call

    function myFunction(v, w, x, y, z) {
    }

    let args = [0, 1];
    console.log(myFunction(-1, ...args, 2, ...[3]));
} // again this does not make sense, but is proof of concept apparently, hoping for a better example later on
if (0) {
    //Spread Syntax with the new Constructor

    let dateFields = [1989, 3, 13];
    let d = new Date(...dateFields);
    console.log(d); // 13 Apr 1989
} //ok
if (0) {
    const fruits1 = ['watermelon', 'peaches'];
    const fruits2 = ['strawberry', 'papaya']
    const fruitBasket = ['apples', 'grapes', ...fruits1, 'bananas', fruits2, 'kiwis', 'mango'];
    console.log(fruitBasket); // [ 'apples', 'grapes', 'watermelon', 'peaches', 'bananas', 'kiwis', 'mango' ]
}
if (0) {
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1];
    console.log(arr2); // [1, 2, 3]
    arr2.push(4);
    console.log(arr1); // [1, 2, 3]
    console.log(arr2); // [1, 2, 3, 4]
} //todo look over array proper copying

if (0) {
    // .concat() Arrays Together
    const germanCars = ['BMW', 'Audi', 'Mercedes'];
    const japaneseCars = ['Honda', 'Toyota', 'Datsun'];
    const concatCarMakers = germanCars.concat(japaneseCars);
    console.log(concatCarMakers); // [ 'BMW', 'Audi', 'Mercedes', 'Honda', 'Toyota', 'Datsun' ]
} // as expected
if (0) {
    const germanCars = ['BMW', 'Audi', 'Mercedes'];
    const japaneseCars = ['Honda', 'Toyota', 'Datsun'];
    const carMakers = [...germanCars, ...japaneseCars];
    console.log(carMakers);
    // [ 'BMW', 'Audi', 'Mercedes', 'Honda', 'Toyota', 'Datsun' ]
} // as above, as expected
if (0) {
    // Spread Elements into the Beginning of an Array
    let numbers = [6, 5, 4];
    const moreNumbers = [1, 2, 3];
    numbers = [...moreNumbers, ...numbers];
    console.log(numbers); // [ 1, 2, 3, 6, 5, 4 ]
}

if (0) {
    const markerSet = {copicMarkers: ['green', 'blue', 'red']};
    if (0) {
        // Shallow Cloning and Merging Objects is Simple
        // duplicate object properties

        const duplicateMarkerSet = {...markerSet};
        console.log(duplicateMarkerSet);
        // { copicMarkers: [ 'green', 'blue', 'red' ] }
    }

    if (1) {// merge two objects into a new one
        const markerSet2 = {copicSketchMarkers: ['pink', 'yellow', 'orange']};
        const giantMarkerSet = {...markerSet, ...markerSet2};
        console.log(giantMarkerSet);
        // { copicMarkers: [ 'green', 'blue', 'red' ], copicSketchMarkers: [ 'pink', 'yellow', 'orange' ] }
    }
} // as expected
if (0) {
    if (0) {    // Spread (Aside from Object Properties) is Only for Iterables
        // spreading in an object to an array does NOT work
        const obj = {key1: 'value1'};
        let array = [...obj];
        console.log(array);
        // []

    }
    if (1) {
        // spreading an array of objects into another array does work
        const objInArray = [{key2: 'value2'}];
        array = [...objInArray];
        console.log(array); // [ { key2: 'value2' } ]
    }
} //ok.. come back here

// done!



