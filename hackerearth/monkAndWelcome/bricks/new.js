
main(3694);


function main(input){
    console.log(input);
    let a,b,c,d=0;

    for(let i=1;input>d;i++){
        a=i;
        b=2*a;
        c=a+b;
        d+=c;

    }

    console.log("final " +a+" "+b+" "+c+" "+d);


    let r=c-(d-input);
    if (r<=a) {
        console.log("Ends with a  : "+ r)
    }
    else console.log("Ends with b: " + (r-a));






}