let coptura="5\n1 2 3 4 5\n5 4 3 2 10";
let cacat = coptura.split("\n").map(r => r.split(" ").map(Number));
let pisat= cacat.slice(1).reduce((acc,x) => { x.forEach((v, i) => acc[i] = (acc[i]||0) /*+ split3[0][0]*/ + v); return acc; }, [])
console.log(pisat);

let number="31 3131 3133 31 13  20 10 10";


    let stringG="soparla";
    let numarG=32;
    let boolG=0;
    console.log(typeof boolG);


    let rosie="100 2 3 12 23 54 2 54 35 2 332 35 54 342 35".split(" ").map(Number).map(a=>a*2).map(b=>b-3).reduce((total,x)=>x+1);




    // console.log(rosie);

    let noi="1 2 3 4 5 6".split(" ").map(Number).reduce( (total,partial)=>{  return total+partial;});
    console.log(noi);


    let filtru1="21 34 65 6346 4 4 2 3 54 ";
    let filtru2=3332103277;
    console.log(typeof filtru1);
    console.log(filtru1);
    console.log(typeof filtru2);
    console.log(filtru2);

    let max=-Infinity;
   let oops= "13 4 2 3 4 6 32".split(" ").map(Number).filter(function(num) { return num>5   });
     console.log(oops);


console.log();

let boss="13 4 2 3 4 6 32".split(" ").map(Number).reduce((acc,x) => Math.max(acc,x), -Infinity);
console.log(boss);
