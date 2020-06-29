const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
// element merge in element conditionat


const examplu=[1,2,3,4,5,6,7,8,9];
// console.log([1,2,3,4,5,6,7,8,9,10].filter(num=>num % 2 !== 0));
// console.log([1,2,3,4,5,6,7,8,9,10].filter(num=>num % 2 !== 0));

const prime = (number) => {
     number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 71, 83];

    return number.filter((num, i, arr) => {
        if (num % 5 !== 0 && num % 2 !== 0 && num % 3 !== 0) {
            return num;
        }
    });
};
console.log(prime());

let me=99; const mindblown1=(me)=>{console.log(me)}; mindblown1();

 const mindblown2=(me)=>{ me=99; console.log(me)}; mindblown2();



 function isPrime(num){


 }

let array=[1,2,3,4,5,6,7,8,9,10]
array.filter((num, index, arr) => {
    console.log("banana")
});
 /*
banana
banana
banana
banana
banana
banana
banana
banana
banana
banana
 * */

console.log(array.filter((num, index, arr) => {
    return "banana";
}));
/*[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]*/
