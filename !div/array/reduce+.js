// for (let i=2;i<100;i++){
//     if(normalTest(i)==true)
//         console.log("The number "+i+" is prime." );
// }
// function normalTest(num){
//
//     let upTo=Math.floor(Math.sqrt(num));
//     let isPrime = true;
//     for(let i = 2; i <= upTo; i++){
//         if(num%i === 0){
//             isPrime = false;
//             break;
//         }
//     }
//     return (isPrime) ;
// }
//
// //

// [1,2,3,4,5,6,7,8,9,10].filter((num, index, arr) => {
//
//
// }

[1,2,3,4,5,6,7,8,9,10].filter(function normalTest(num){
    let upTo=Math.floor(Math.sqrt(num));
    let isPrime = true;
    for(let i = 2; i <= upTo; i++){
        if(num%i === 0){
            isPrime = false;
            break;
        }
    }
    return (isPrime) ;
});