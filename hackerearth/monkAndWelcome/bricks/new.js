// main(9);
// console.log("--------");
// main(10);
// console.log("--------");
// main(11);
// console.log("--------");
// main(12);
// console.log("--------");
main(10);


function main(input){
    console.log(input);
    let a,b,c,d=0;

      for(let i=1;input>d;i++){
            a=i;
            b=2*a;
            c=a+b;
            d+=c;
            console.log("aul: "+a);
            console.log("beul: "+b);
            console.log("ceul: "+c);
            console.log("deul: "+d);
            console.log("--------");

        }

      console.log("finale " +a+" "+b+" "+c+" "+d);
      let diff=d-input;/*131*/

    if(input==d){
        console.log("se termina full in b")
    }
 console.log(diff);
    if( diff<=a ) console.log("se termina in a cu: "+ (c-diff))
    if( diff>a   ) console.log("se termina in b cu: "+ (diff-a))






}