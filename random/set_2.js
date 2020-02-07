const race ='100m dash';
const winners =['ala bala', 'o portocala','miss banana'];

const win =winners.map((winner,i)=>({name:winner,race:race,place:i+1,potato:42}) );

// console.log(win);

const ages=[1,2,3,4,5,6,7,8];
const old=ages.filter(age=> age>=6); // new array with values that comply
console.log(old);