if(0){
    let rabbit = {a: 1};

    rabbit.speak = function (line) {
        console.log(`The rabbit says '${line}'`);
    };

    rabbit.b = function (boof) {
        console.log(boof);
    }

    rabbit.speak("I'm alive.");
    rabbit.b("iauzi " + rabbit.a);


    function speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }

// this.type is the calling function?
    let whiteRabbit = {type: "white", speak};
    let hungryRabbit = {type: "hungry", speak};

    whiteRabbit.speak("Oh my ears and whiskers, " +
        "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
    hungryRabbit.speak("I could use a carrot right now.");

// → The hungry rabbit says 'I could use a carrot right now.'

    function bark(say) {
        console.log("--!");
    }

    function ok(a) {
        console.log("un mesaj " + a)
    }

    let me = {1: 2, ok}

    let be = {
        1: 2,
        blabla: ok
    }
    me.ok("true")
// be.blabla()
    let play = {1: ok()}

    let okThen = {1: console.log("smile")}

    function tr() {
        let theUniverse = 42;
    }

    tr();

    let what = {
        1: 2
    };
    what.blabla = ok();

    function ok() {
        console.log("hirr")
    }

    let and = {1: 2};
    and.so = ok();

    function a() {
        console.log("aa")
    }

    function a() {
        console.log("ab")
    }

    a();
}
if(0){
    function speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
    let whiteRabbit = {type: "white", speak};
    let hungryRabbit = {type: "hungry", speak};

    whiteRabbit.speak("Oh my ears and whiskers, " +
        "how late it's getting!");

    hungryRabbit.speak("I could use a carrot right now.");


    speak.call(hungryRabbit, "Burp!");
    speak.call()
}
if(0){

    function c1(){
        console.log("TheWind");
    }
    let obj={
        c1

    }

    function ok(){console.log("ok")} let test={1:2,ok}
    // 'object method shorthand'
    // sugar for {ok: function(...

}
if(0){
    function normalize() {
        console.log(this.coords.map(n => n / this.length));
    }

    normalize.call({coords: [0, 2, 3], length: 5});
// → [0, 0.4, 0.6]
}
if(1){
    if(0){//    prototypes
            let empty = {};
            console.log(empty.toString);
            // → function toString(){…}
            console.log(empty.toString());
            // → [object Object]
        }

    if(0){
        let example= {};
        console.log(Object.getPrototypeOf(example));
        console.log(Object.getPrototypeOf(Object.prototype));

        console.log(Object.getPrototypeOf({}) ==
            Object.prototype);
        // → true
        console.log(Object.getPrototypeOf(Object.prototype));
        // → null
        // Object.prototype
        // Function.prototype
        // Array.prototype
    }


    if(1){
        let protoRabbit = {
            speak(line) {
                console.log(`The ${this.type} rabbit says '${line}'`);
            }
        };
        // let killerRabbit = Object.create(protoRabbit);
        let killerRabbit = protoRabbit;
        killerRabbit.type = "killer";
        killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'
    }
}

