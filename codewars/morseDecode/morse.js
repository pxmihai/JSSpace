//(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
let morse="−− ·− ·−· ·−· −·−−  ···· ·− −··  ·−  ·−·· ·· − − ·−·· ·  ·−·· ·− −− −··· ";/*MARRY HAD A LITTLE LAMB*/
decodeMorse(morse);
function decodeMorse (morseCode){

    const phrase=morseCode;
    const words=phrase.split("  ");
    const nested_letters=words.map(w => w.split(" "));
    let answer=[];

    for (let i=0;i<words.length;i++)
        for (let j=0;j<nested_letters[i].length;j++)
        {
            console.log((nested_letters[i][j]));
            console.log(decode(nested_letters[i][j]));  /*WHAT AM I DOING WRONG*/
            answer.push(decode(nested_letters[i][j]));

        }
    console.log(">> "+answer);
    // for (let key in alphabet) {
    //
    //     if(alphabet.hasOwnProperty(letter)){
    //
    //         let the =alphabet.hasOwnProperty(letter)
    //         // console.log(the)
    //     }
    //
    // }
}
// console.log(decode("..---"));
function decode(letter){
    let alphabet = {
        "-----":"0",
        ".----":"1",
        "..---":"2",
        "...--":"3",
        "....-":"4",
        ".....":"5",
        "-....":"6",
        "--...":"7",
        "---..":"8",
        "----.":"9",
        ".-":"a",
        "-...":"b",
        "-.-.":"c",
        "-..":"d",
        ".":"e",
        "..-.":"f",
        "--.":"g",
        "....":"h",
        "..":"i",
        ".---":"j",
        "-.-":"k",
        ".-..":"l",
        "--":"m",
        "-.":"n",
        "---":"o",
        ".--.":"p",
        "--.-":"q",
        ".-.":"r",
        "...":"s",
        "-":"t",
        "..-":"u",
        "...-":"v",
        ".--":"w",
        "-..-":"x",
        "-.--":"y",
        "--..":"z",
        "/":" ",
        "-·-·--":"!",
        "·-·-·-":".",
        "--··--":","
    };
    return alphabet[letter];
}