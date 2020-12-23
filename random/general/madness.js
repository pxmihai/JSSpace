// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
let log = (...args) => {
    if (typeof (console) !== 'undefined')
        console.log(...args)
};

let global = [11, 12];
let a, b;
[a, b] = [...global];
log(a, b);

let at01 = () => {
    log("t01");
    at02();

    let at001 = () => {
        log("at001");
        at02();
    }

    at001();

    let at002 = () => {
        log("at002");
        at02();
    }

    at002();

    let at003 = () => {
        log("at003");
        at02();
        at002();

        // at01();

        let at0001 = () => {
            log("at0001");
            at02();

            let at00001 = () => {
                log("at00001");
                at02();
            }

            at00001();
        }

        at0001();

    }

    at003();
}

let at02 = () => {
    log("at02");
}

at02();
at01();
