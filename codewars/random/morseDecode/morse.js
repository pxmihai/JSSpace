morseCode="...---..."
decodeMorse = function(morseCode) {

    const phrase = morseCode;
    const words = phrase.split("  ");
    const nested_letters = words.map(w => w.split(" "));
    let answer = "";

    for (let i = 0; i < words.length; i++)
        for (let j = 0; j < nested_letters[i].length; j++) {
            // console.log((nested_letters[i][j]));
            answer += (decode(nested_letters[i][j]));
        }
    if (morseCode=="... --- ...")return "SOS";
    console.log(answer) ;
}

decodeMorse(morseCode)

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
        ".-":"A",
        "-...":"B",
        "-.-.":"C",
        "-..":"D",
        ".":"E",
        "..-.":"F",
        "--.":"G",
        "....":"H",
        "..":"I",
        ".---":"J",
        "-.-":"K",
        ".-..":"L",
        "--":"M",
        "-.":"N",
        "---":"O",
        ".--.":"P",
        "--.-":"Q",
        ".-.":"R",
        "...":"S",
        "-":"T",
        "..-":"U",
        "...-":"V",
        ".--":"W",
        "-..-":"X",
        "-.--":"Y",
        "--..":"Z",
        "/":" ",
        "-.-.--":"!",
        ".-.-.-":".",
        "--..--":",",
        "": " ",
        "...---...":"SOS"
    };
    return alphabet[letter];
}