function presses(phrase) {
    let splits=phrase.split("");
    for(let i=0 ;i<splits.length;i++){
        getPos(splits[i])
    }
}

function getPos(chr){
    if (chr==" ") {return console.log(Number(1));}
    let x3 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","t","u","v"];
    let x4 = ["p", "q", "r", "s", "w", "x", "y", "z"];

    if (x3.includes(chr)){
        let first=x3.indexOf(chr)+1;
        let then =first%3;
        if (then==0) return console.log("3")
        console.log(then)
    }
    if (x4.includes(chr)){
        let first=x4.indexOf(chr)+1;
        let then=first%4;
        if (then==0) return console.log("4")
        console.log(then)
    }

}

presses("lol");
