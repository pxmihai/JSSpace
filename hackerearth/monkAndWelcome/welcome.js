// read first line in var a
// read a vars in array A
// read b vars in array B
// create array C with each value as at.[i] from a[i]+b[i]
// Se da un numar, sa se identifice numarul de aparitii a fiecarui numar impreuna cu numarul.
console.log("------------------");
    let rawData=52134523213;
    let elenaData='5\n21345\n23213';

    function checkType(a,b,c){
        console.log(typeof a);
        console.log(typeof b);
        console.log(typeof c);
        console.log("eod");
    }

    checkType(rawData,elenaData);
    
    let stringData=rawData.toString();

let aSplit=stringData.split('')
    console.log(aSplit);
    console.log(aSplit[0]);

    let toStringData=rawData.toString()
    let someArray=[];
    let someObjects={};

console.log(toStringData[0]);

for(let i=0;i<aSplit[0];i++)
    // someObjects.push(someObjects{key:1,value:toStringData[0]});
    someArray.push(aSplit[i]);

// function readData(){
//
//     someArray[0].value=stringData.split(',');
//     console.log(someArray[0].value);
// }
// readData();


//
// let aLen=someArray[0].value;
//
// let b=someArray[1].value;
// let c=someArray[2].value;
// let d=[];
// function sum(){
//
//     for(let i=0;i<aLen;i++)
//         d[i]=(b[i]+c[i]);
// return d;
// }
// console.log(aLen);
// //5
// console.log(sum());
// // [ 4, 4, 5, 5, 8 ]








