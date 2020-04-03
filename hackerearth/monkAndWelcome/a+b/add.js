main("1 2\n2 5\n10 14");

main("9 1\n0 1\n12 8");
// console.log("3\n7\n24");

function main(input){

    // let split=input.split("\n");
    // console.log(split);
    let split =input.split("\n").map(
        (line, index) => {
            const [value1, value2] = line.split(" ").map(BigInt);
            return { id: index + 1, value1, value2 };
            }
        );

    // console.log(split.length);
    // let result1="";
    // for ( i=0;i<split.length;i++){
    //
    //     result1+=(split[i].value1+split[i].value2+"\n");
    // }
   let result2=  split.map(o => ({ id: o.id, value: o.value1 + o.value2 }));
    let final=result2.map(x => x.value).join("\n");
    // put input in an arraylet a=a;
   // create another array with results
// console.log(typeof(split[0].value1));
// console.log(result);
// console.log(result.map(x=> ({value:x.value})));
console.log(final)
}



