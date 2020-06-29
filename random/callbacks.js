// https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4

function outer(values) {
    let b = 10;

        function inner() {

            let a = 20;
            return(a+b+values);
        }
        return inner();
}

// console.log(outer);
// console.log(outer());
// console.log(outer(12));

function multiplier(factor) {
    let marry="had a little lamb";
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10