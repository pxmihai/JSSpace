let adventure=[{
    a:1,
    b:{
        x:[1,2,3]
    }
}];
let entry=function(a,b){
    console.log("<----engage")
    console.log(a);
    console.log(typeof a);
    console.log(typeof b);

    if(typeof a=="number"){
        console.log("Launch iminent, please clear  platform 1!");
    }
    if(typeof a=="object"){
        console.log("This is an object drill");
    }

    if(typeof a=="object" && a[0].hasOwnProperty("b") ){
            console.log("done")
        if (a[0].b.x[0] == 1)
            console.log("That thing has 1 as value");
        if (typeof a[0].b.x[0] == "number" && a[0].b.x[0] == 1)
            console.log("Welcome to the twilight zone");
    }
    if(typeof a=="object"&& a && a[0].b && a[0].b.x )
        console.log("upgrades")
    if(a)
        console.log("a exists")
    if(typeof a=="object"&& a[0])
        console.log("a has value a[0]")
    if(typeof a=="object"&& a[0].b)
        console.log("a has property/value a[0].b")
}

console.log(adventure);
console.log(adventure[0].b.x[0])
    //[ { a: 1, b: { x: [Array] } } ]
    // 1
entry(adventure,34);
    // [ { a: 1, b: { x: [Array] } } ]
    // object
    // number
    // This is  an object drill
    // done
    // That thing has 1 as value
    // Welcome to the twilight zone
    // upgrades
    // a exists
    // a has value a[0]
    // a has property/value a[0].b
entry("!","?");
    // !
    // string
    // string
    // a exists
entry(2,1);
    // 2
    // number
    // number
    // Launch iminent, please clear  platform 1!
    // a exists
entry([-1,2,3],{sky:"blue"});
    // [ -1, 2, 3 ]
    // object
    // object
    // This is  an object drill
    // a exists
    // a has property b

let value=[-1];
    console.log(value[0]);
    if (value[0])console.log("why?");
//-1
//why?




