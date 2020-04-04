// 5
// 1 2 3 4 5
// 4 5 3 2 10

main("5\n1 2 3 4 5\n5 4 3 2 10");
// main("9 1\n0 1\n12 8");

// console.log("3\n7\n24");

function main(input){

    // let split=input.split("\n");
    // console.log(split);
    let splits =input.split("\n").map(
        (line, index) => {
            const [value1] = line.split(" ").map(Number);
            return { id: index + 1, value1 };
        }
    );
    let other1=input.split("\n").map(line => line.split(" ").map(Number))
    let other2=input.split("\n").map((line,ridx) => line.split(" ").map(BigInt).reduce((acc, x, j) => (acc["value" + (j+1)] = x, acc), ({id:ridx})))

    // console.log(other1);
    // console.log(other2);
    // console.log(split.length);
    // let result1="";
    // for ( i=0;i<split.length;i++){
    //
    //     result1+=(split[i].value1+split[i].value2+"\n");
    // }
    // let result2=  split.map(o => ({ id: o.id, value: o.value1 + o.value2 }));
    // let final=result2.map(x => x.value).join("\n");
    // put input in an arraylet a=a;
    // create another array with results
// console.log(typeof(split[0].value1));
// console.log(result);
// console.log(result.map(x=> ({value:x.value})));
//     console.log(final)
//      let result = input.split("\n").map(r => r.split(" ").map(BigInt));
//      result.slice(1).reduce((acc,x) => { x.forEach((v, i) => acc[i] = (acc[i]||0n) + v); return acc; }, []);
//     console.log(result);
//     let split = input.split("\n").map(r => r.split(" ").map(BigInt));
//
//     var finale=split.slice(1).reduce((acc,x) => { x.forEach((v, i) => acc[i] = (acc[i]||0n) + v); return acc; }, []);
//     console.log(finale);


    // var split = "3\n1 2 3\n1 2 3".split("\n").map(r => r.split(" ").map(BigInt));
    // let result=split.slice(1).reduce((acc,x) => { x.forEach((v, i) => acc[i] = (acc[i]||0n) + split[0][0] + v); return acc; }, [])

    var split = input.split("\n").map(r => r.split(" ").map(Number));
    var result=split.slice(1).reduce((acc,x) => { x.forEach((v, i) => acc[i] = (acc[i]||0) + v); return acc; }, []);
    var final=result.join(" ");
    console.log(split);
    console.log(result);
    console.log(final);
}