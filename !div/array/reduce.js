if(0){
    const array1 = [1, 2, 3, 4];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer, 5));
// expected output: 15

    const x = [3245, 4758, 678, 324, 6578, 1, 23];

    let y = [1, 2, 3, 4, 5];
    let z = [9, 8, 7, 6, 5];

    const somethingElse = (y, z) => y[1] * Math.sqrt(z[0]);

    console.log(somethingElse(y, z));
    /*
    Accumulator (acc)
    Current Value (cur)
    Current Index (idx)
    Source Array (src)
    */
}
if(0){


    for (let i=2;i<100;i++){
        if(normalTest(i)==true)
        console.log("The number "+i+" is prime." );
    }
    function normalTest(num){

        let upTo=Math.floor(Math.sqrt(num));
        let isPrime = true;
        for(let i = 2; i <= upTo; i++){
            if(num%i === 0){
                isPrime = false;
                break;
            }
        }
        return (isPrime) ;
    }

}

[1,2,3,4,5,6,7,8,9,10].filter( num=> {
    let upTo=Math.floor(Math.sqrt(num));
    let isPrime = true;
    for(let i = 2; i <= upTo; i++){
        if(num%i === 0){
            isPrime = false;
            break;
        }
        if (isPrime)
            console.log("The number "+i+" is prime.")
    }


});


