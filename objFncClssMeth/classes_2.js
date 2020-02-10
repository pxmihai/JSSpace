const Animal = {
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

class Dog {
    constructor(name) {
        this.name = name;
    }
}

// If you do not do this you will get a TypeError when you invoke speak
Object.setPrototypeOf(Dog.prototype, Animal);

let d = new Dog('Mitzie');
d.speak(); // Mitzie makes a noise.

// x

function Animale (name) {
    this.name = name;
}

Animale.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
}

class Doog extends Animale {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dd = new Doog('Mitzie');
d.speak(); // Mitzie barks.

//NB: For similar methods, the child's method takes precedence over parent's method

// x