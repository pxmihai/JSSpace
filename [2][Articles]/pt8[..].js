if (0) {
    //Example of traditional prototype-based inheritance

    function Superhero(superName, realName, powers) {
        this.superName = superName,
            this.realName = realName,
            this.powers = powers
    }

    function Tornado(a, b, c) {
        console.log("Hi!");
        return 1;
    }

    function what(a, b, c) {
        this.wind = a,
            this.water = b,
            this.fire = c
    }

    const wonderWoman = new Superhero('Wonder Woman', 'Diana Prince', 'Strength and flight');
    console.log(wonderWoman);
    let tornado = new Tornado("wind", "water", "fire");
    console.log(tornado)
    console.log(Superhero);
    /* Superhero {
        superName: 'Wonder Woman',
        realName: 'Diana Prince',
        powers: 'Strength and flight' } */
    Superhero.prototype.equipment = 'Lasso of truth';
    console.log(wonderWoman.realName);// Diana Prince
    console.log(wonderWoman.equipment); // Lasso of truth
    console.log(wonderWoman.catchPhrase); // undefined
    console.log(wonderWoman.hasOwnProperty('equipment')); // false
    console.log(Superhero.hasOwnProperty('equipment')); // false
    console.log(Superhero.prototype.hasOwnProperty('equipment')); // true
}
if (0) {
    // Examples of class expressions, both unnamed and named

// unnamed class expression
    let Drama = class {
        constructor(title, author) {
            this.title = title;
            this.author = author;
        }
    };
    console.log(Drama);
    console.log(Drama.name);
    // Drama
    // named class expression
    let Comedy = class Book2 {
        constructor(title, author) {
            this.title = title;
            this.author = author;
        }
    };
    console.log(Comedy.name);
    // Book2
}
if (0) {
    // Example of a prototype method on a class

    class Book {
        constructor(title, author) {
            this.title = title;
            this.author = author;
        }

        publicizeBook() {
            return `This book ${this.title} is written by renowned author ${this.author}.`;
        }
    }

    const novel = new Book('Harry Potter', 'J.K. Rowling');
    console.log(novel.publicizeBook());
    // This book Harry Potter is written by renowned author J.K. Rowling.
    console.log(Book.prototype.hasOwnProperty('publicizeBook'));
    // true
    //console.log(novel.prototype.hasOwnProperty('publicizeBook'));
    //TypeError: Cannot read property 'hasOwnProperty' of undefined
}
if (0) {

    //testing a static value
    class Test {
        a = 32;

        mood() {
            return console.log("play me some jazz")
        }
    }

    let ok = new Test();
    ok.mood();
    ok.a
}//todo comeback here
if (0) {
    // Example of a static method on a class

    class Book {
        constructor(title, author) {
            this.title = title;
            this.author = author;
        }

        static youMightLike(title, similarTitle) {
            return `If you like ${title}, you might also like ${similarTitle}.`
        }
    }

    const novel = new Book('Moby Dick', 'Herman Melville');
    console.log(novel.youMightLike);
    // undefined
    console.log(Book.youMightLike(novel.title, "A Midsummer Night's Dream"));
    // If you like Moby Dick, you might also like A Midsummer Night's Dream.
}//todo come back here 2
if (1) {
    class Holds {
         static x = 1;
         y=2;
         #what=12;
        constructor(a,b,c) {
            this.inside1=a;
            this.inside2=b;
            this.inside3=c;
        }
        add(a,b){
            return a+b;
        }
        subtract(a,b){
            return a-b;
        }
        useLocal(a,b,c){
            return a+b+c+x; // x is not defined
        }
    }
    let begin= new Holds(3,4,5);
    // console.log(begin.useLocal(1,1,1)) // this does not work
    // console.log(Holds.add(1,2)) // this does not work
    console.log(Holds.x);   // i can call the x
    console.log(Holds.y) // i can not call the y 
    // console.log(begin.x);   // i can not call the x
    function a1(p1, p2, p3) {
        console.log("function  a1(p1,p2,p3)")

    }

    let a2 = function () {
        console.log("let a2= function()")
    }

}
// break