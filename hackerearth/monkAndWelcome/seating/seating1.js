/*
read the first number
read the next numbers
create an array with the minimum seat plus 6 on the left side
and maximum number of seats on the right side

make two arrays, one of seats and one of seat placement,
pair up for answer the value at seat number and seat placement


*/


// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
    bmain(stdin_input);
});


function bmain(input) {
    process.stdout.write("Hi, " + input + ".\n");      // Writing output to STDOUT

    console.log(input[0]);

    extra();
    return "banana";
}
console.log("wow");

function extra(){
    console.log("i called the sherif");
}






