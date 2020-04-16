function ok(){
    console.log("------------");
}
// strings

{
    let name = "Nicholas";
    let selection = "a";
// numbers
    let count = 25;
    let cost = 1.51;
// boolean
    let found = true;
// null
    let object = null;
// undefined
    let flag = undefined;
    let ref; // assigned undefined automatically
    }


let color1 = "red";
let color2 = color1;
console.log(color1); // "red"
console.log(color2); // "red"
color1 = "blue";
console.log(color1); // "blue"
console.log(color2); // "red"
ok(); //
console.log(typeof "Nicholas"); // "string"
console.log(typeof 10); // "number"
console.log(typeof 5.1); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
ok()
console.log(typeof null);
let value=null;
console.log(value === null);
ok()

{
    console.log("5" == 5); // true
    console.log("5" === 5); // false
    console.log(undefined == null); // true
    console.log(undefined === null); // false
    }

//Primitive Methods 6
{
    let name = "Nicholas";
    let lowercaseName = name.toLowerCase(); // convert to lowercase
    let firstLetter = name.charAt(0); // get first character
    let middleOfName = name.substring(2, 5); // get characters 2-4
    let count = 10;
    let fixedCount = count.toFixed(2); // convert to "10.00"
    let hexCount = count.toString(16); // convert to "a"
    let flag = true;
    let stringFlag = flag.toString(); // convert to "true"
}

ok();

{
    let object = new Object();

        object.a=ok();
        object[0]=32;
        object[3]=12;
        object.stuff=[1,2,3];
        console.log(object);




}

ok();

{

    let object=
    [
        {

        },
        {

        },
        {

        }
    ]

    console.log(object);
}




