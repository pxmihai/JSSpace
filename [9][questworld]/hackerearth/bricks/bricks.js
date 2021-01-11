/*
* 9, 10, 17 , 3694
*
* 0 0 0 0
* 1  2  3   3
* 2  4  6   5
* 3  6  9  18
* 4  8  12 30
*
*
* */
main(5);

function main(input){
    let round, first , second , totalRounds;
    totalRounds=getTotalRounds(input);
    // console.log(totalRounds);
}
function getTotalRounds(input){
    let total=0,round=0,a=0,b=0;

                    while( total <= input ){
                        a++;
                        b=a*2;
                        total+=a+b;
                        console.log("----");
                        console.log(a);
                        console.log(b);
                        console.log(a+b);
                        console.log(total);

                        if (total==input) console.log("Ultima runda este: "+ a);
                        if (total==input) break;

                        console.log("----");

                        if(total>input){console.log( "se termina in a "+ (input>=(total+b+a))+" input: "+ input+ " total: "+ total+" a: "+a+" b: "+b)}
                           // console.log("Ultimul total: " +total+"ultimul a "+a+" ultimul b "+b);
                           // console.log("Input: " +input);}

                        if(total>input){console.log( "se termina in b "+ (input>=total+b))}
                           // console.log("Ultimul total: " +total);
                           // console.log("Input: " +input);}





                    }
    console.log("Ultimul total: " +total);
    console.log("Input: " +input);

    // daca?(18<10)

    //this just loops, creates a, b and makes the total
    let actual=input-total;

    return total;
}