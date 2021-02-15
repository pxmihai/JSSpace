// https://medium.com/better-programming/object-keys-values-and-entries-javascript-es6-feature-series-part-9-d71268791089

// --------------------------------------------------Object.keys
if (0) {
    const resistanceFighter = {
        name: "John Connor",
        age: 30,
        title: "Resistance Leader",
        fight() {
            return `${this.name} leads the resistance fight against the machines.`
        },
        1: 1,
        2: 2
    };
    console.log(Object.keys(resistanceFighter));
    // [ 'name', 'age', 'title', 'fight' ]
} // object the order favors numbers ?
// --------------------------------------------------
if (0) {
    const resistanceTeam = ["Sarah J Connor", "Terminator", "John Connor", 0, 1];
    console.log(Object.keys(resistanceTeam)); //
    // [ '0', '1', '2', '3', '4' ]
} // array
// --------------------------------------------------
if (0) {
    // Object.keys() with an array-like object:

    const movieTitles = {
        0: "The Terminator",
        1: "Judgment Day",
        2: "Rise of the Machines",
        3: "Salvation",
        4: "Genesis",
        5: "Dark Fate"
    }
    console.log(Object.keys(movieTitles));
    // [ '0', '1', '2', '3', '4', '5' ]
}
if (0) {
    // Object.keys() on an array-like object with random key ordering:
    const movieReleaseYears = {
        1991: "Judgment Day",
        2015: "Genisys",
        2003: "Rise of the Machines",
        1984: "The Terminator",
        2019: "Dark Fate",
        2009: "Salvation"
    }
    console.log(Object.keys(movieReleaseYears));
    // [ '1984', '1991', '2003', '2009', '2015', '2019' ]
} // returns in order
// --------------------------------------------------
if (0) {
    const movieDirectorsUnordered = {
        3: 3,
        1: 1,
        director2: "Tim Miller",
        director4: "Jonathan Mostow",
        director1: "James Cameron",
        director3: "McG",
        2: 2
    }
    console.log(Object.keys(movieDirectorsUnordered))
    // [ 'director2', 'director4', 'director1', 'director3' ]
    console.log(Object.keys(movieDirectorsUnordered).sort());
    // [ 'director1', 'director2', 'director3', 'director4' ]
} // sorts by default by the first symbol
// --------------------------------------------------
if (0) {
    const animal = "canine";
    console.log(Object.keys(animal));
    console.log(Object.values(animal));
    console.log(Object.entries(animal));
    // [ '0', '1', '2', '3', '4', '5' ]
}
// --------------------------------------------------Object.values
if (0) {
    const resistanceFighter = {
        name: "John Connor",
        age: 30,
        title: "Resistance Leader",
        fight() {
            return `${this.name} leads the resistance fight against the machines.`
        }
    };
    console.log(Object.values(resistanceFighter));
    // [ 'John Connor', 30, 'Resistance Leader', [Function: fight] ]
}

if (0) {
    // Object.values() with a simple array:
    const resistanceTeam = ["Sarah J Connor", "Terminator", "John Connor"];
    console.log(Object.values(resistanceTeam));
    // [ 'Sarah J Connor', 'Terminator', 'John Connor' ]
}

if (0) {
    // Object.values() on an array-like object:
    const movieTitles = {
        and: "then",
        0: "The Terminator",
        1: "Judgment Day",
        2: "Rise of the Machines",
        3: "Salvation",
        4: "Genisys",
        5: "Dark Fate"
    }
    console.log(Object.values(movieTitles));
    /*
    [
        'The Terminator',
        'Judgment Day',
        'Rise of the Machines',
        'Salvation',
        'Genisys',
        'Dark Fate',
        'then
    ]
    */
}

if (0) {
    //    Object.values() on an array-like object with random key ordering:
    const movieReleaseYears = {
        1991: "Judgment Day",
        2015: "Genisys",
        2003: "Rise of the Machines",
        1984: "The Terminator",
        2019: "Dark Fate",
        2009: "Salvation"
    }
    console.log(Object.values(movieReleaseYears));
    /*
    [
        'The Terminator',
        'Judgment Day',
        'Rise of the Machines',
        'Salvation',
        'Genisys',
        'Dark Fate'
    ]
   */
}

if (0) {
    const movieDirectorsUnordered = {
        2: 2,
        3: 3,
        director2: "Tim Miller",
        director4: "Jonathan Mostow",
        director1: "James Cameron",
        director3: "McG",
        1: 1,
    }
    console.log(Object.values(movieDirectorsUnordered));
    // [ 'Tim Miller', 'Jonathan Mostow', 'James Cameron', 'McG' ]
    console.log(Object.values(movieDirectorsUnordered).sort());
    // [ 'James Cameron', 'Jonathan Mostow', 'McG', 'Tim Miller' ]
} // again it sorts and defaults like keys

if (0) {
    const animal = "canine";
    console.log(Object.values(animal));
    // [ 'c', 'a', 'n', 'i', 'n', 'e' ]
}
// --------------------------------------------------Object.entries
if (0) {
    // Example of Object.entries() on an object:

    const resistanceFighter = {
        name: "John Connor",
        age: 30,
        title: "Resistance Leader",
        fight() {
            return `${this.name} leads the resistance fight against the machines.`
        }
    };
    if (0) {
        console.log(Object.entries(resistanceFighter));
        /*
        [
            [ 'name', 'John Connor' ],
            [ 'age', 30 ],
            [ 'title', 'Resistance Leader' ],
            [ 'fight', [Function: fight] ]
        ]
       */
    }
    if (1) {
        for (let [key, value] of Object.entries(resistanceFighter)) {
            console.log(`${key}: ${value}`);
        }
        /*
            name: John Connor
            age: 30
            title: Resistance Leader
            fight: function fight() {
              return this.name + " leads the resistance fight against the machines.";
            }
        */
    }// displays everything in text


    if (1) {
        Object.entries(resistanceFighter).forEach(([key, value]) => console.log(`${key}: ${value}`))
        /*
            name: John Connor
            age: 30
            title: Resistance Leader
            fight: function fight() {
                return this.name + " leads the resistance fight against the machines.";
            }
        */
    } // arrow function and the use of forEach instead of the above for
}
if (0) {
    // Object.entries() with a simple array:

    const resistanceTeam = ["Sarah J Connor", "Terminator", "John Connor"];
    console.log(Object.entries(resistanceTeam));
    /*
        [
            [ '0', 'Sarah J Connor' ],
            [ '1', 'Terminator' ],
            [ '2', 'John Connor' ]
        ]
    */
}
if (0) {
    // Object.entries() on an array-like object:

    const movieTitles = {
        0: "The Terminator",
        1: "Judgment Day",
        2: "Rise of the Machines",
        3: "Salvation",
        4: "Genisys",
        5: "Dark Fate"
    }
    console.log(Object.entries(movieTitles));
    /*
        [
            [ '0', 'The Terminator' ],
            [ '1', 'Judgment Day' ],
            [ '2', 'Rise of the Machines' ],
            [ '3', 'Salvation' ],
            [ '4', 'Genisys' ],
            [ '5', 'Dark Fate' ]
        ]
    */
}
if (0) {
    // Object.entries() on an array-like object with random key ordering:

    const movieReleaseYears = {
        1: 1,
        3: 3,
        1991: "Judgment Day",
        2015: "Genisys",
        2003: "Rise of the Machines",
        1984: "The Terminator",
        2019: "Dark Fate",
        2009: "Salvation",
        2: 2
    }
    console.log(Object.entries(movieReleaseYears));
    /*
    [
        [ '1984', 'The Terminator' ],
        [ '1991', 'Judgment Day' ],
        [ '2003', 'Rise of the Machines' ],
        [ '2009', 'Salvation' ],
        [ '2015', 'Genisys' ],
        [ '2019', 'Dark Fate' ]
    ]
    */
    console.log(Object.entries(movieReleaseYears).sort());
    // [
    //     [ '1', 1 ],
    //     [ '1984', 'The Terminator' ],
    //     [ '1991', 'Judgment Day' ],
    //     [ '2', 2 ],
    //     [ '2003', 'Rise of the Machines' ],
    //     [ '2009', 'Salvation' ],
    //     [ '2015', 'Genisys' ],
    //     [ '2019', 'Dark Fate' ],
    //     [ '3', 3 ]
    // ]


}
if (0) {
    // Object.entries() on an object’s values, both unsorted and sorted:

    const movieDirectorsUnordered = {
        director2: "Tim Miller",
        director4: "Jonathan Mostow",
        director1: "James Cameron",
        director3: "McG"
    }
    console.log(Object.entries(movieDirectorsUnordered));
    /*
        [
            [ 'director2', 'Tim Miller' ],
            [ 'director4', 'Jonathan Mostow' ],
            [ 'director1', 'James Cameron' ],
            [ 'director3', 'McG' ]
        ]
    */
    console.log(Object.entries(movieDirectorsUnordered).sort());
    /*
        [
            [ 'director1', 'James Cameron' ],
            [ 'director2', 'Tim Miller' ],
            [ 'director3', 'McG' ],
            [ 'director4', 'Jonathan Mostow' ]
        ]
    */
}
if (0) {
    const animal = "canine";
    console.log(Object.entries(animal));
    /*
        [
            [ '0', 'c' ],
            [ '1', 'a' ],
            [ '2', 'n' ],
            [ '3', 'i' ],
            [ '4', 'n' ],
            [ '5', 'e' ]
        ]
    */
} // again,as expected..

// done

