// https://morioh.com/p/50f61dc1e253?f=5c21fb01c16e2556b555ab32
// some array operations

let toys = ["car", "fish", "dinosaur", "tetris", "spaceman"];

let type = {
    car: 1,
    fish: 0,
    dinosaur: 0,
    tetris: 1,
    spaceman: 0
}

let hasBattery =(a)=>type[a] ;

let batteryToys=toys.filter((toy=>hasBattery(toy)));
console.log(batteryToys)

// index of
console.log(toys.lastIndexOf('fish')) ; // 1

console.log(toys.lastIndexOf('tetris')) ; // 3
// length delete

toys.length; // 5
toys.length = 0;

console.log(toys) ; // []

// push

 toys = ["car", "fish", "dinosaur", "tetris", "spaceman"];

toys.push('frog');

console.log(toys);

let num1 = [1,2,3];

let num2 = [4,5,6,7,8,9,10];

num1.push(...num2);
console.log(num1)
// unshift


toys.unshift('robot');

console.log(toys)
// pop
toys.pop();

console.log(toys)

// shift
toys.shift();
console.log(toys);

// join
 let joinedToys=toys.join("/+\\");
console.log(joinedToys)
//reverse






