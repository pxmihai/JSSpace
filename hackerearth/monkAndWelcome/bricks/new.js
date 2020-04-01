// main(9);
// console.log("--------");
// main(10);
// console.log("--------");
// main(11);
// console.log("--------");
// main(12);
// console.log("--------");
main(1);
main(2);
main(3);
main(4);
main(5);
main(8);
main(3694);


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


    let r=c-(d-input);
    if (r<=a) {
        console.log("Se termina in a cu: "+ r)
    }
    else console.log("Se termina in b cu: " + (r-a));






}