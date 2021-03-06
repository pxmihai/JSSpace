//1) Turn an array of numbers into a total of all the numbers
function total(arr) {
    return arr.reduce((total,value)=>total+value);
}

console.log(total([1,2,3])); // 6

//2) Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) {
    return arr.reduce( (total,value)=> total + '' +value);
}

console.log(stringConcat([1,2,3])); // "123"

//3) Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
//       for loop voters.length if voters[i].voted=true;
//       voted++ return voted;
    let final=0;
    for(let i=0;i<arr.length;i++)
    if (voters[i].voted==true)
        final++;
    return final;
}

let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

function shoppingSpree(arr) {
    // return arr.reduce( (a,b)=>( {price: a.price + b.price  }));
    return  arr.reduce( (total,{price}) => total + price ,0);
}
let wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
console.log(shoppingSpree(wishlist)); // 227005

//5) Given an array of arrays, flatten them into a single array

function flatten(arr) {
    // return arr;
    return arr.reduce(( flatten,arr ) =>[...flatten, ...arr ]);
}
let arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

//6) Given an array of potential voters, return an object representing the results of the vote

// let voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},y
//     {name:'Sam' , age: 20, voted: false},y
//     {name:'Phil' , age: 21, voted: true},y
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}y
// ];

function voterResults(arr) {
        let result={
            youngVotes:0,
            youth:0,
            midVotes:0,
            mids:0,
            oldVotes:0,
            olds:0
        };

    let r = (s, e) => Array.from('?'.repeat(e - s+1), (_, i) => s + i);
    

    let youth =[18,25];
    let mids =[26,35];
    let olds =[36,55];
    let y=r(youth[0], youth[1]);/*console.log(y);*/
    let m=r(mids[0], mids[1]);/*console.log(m);*/
    let o=r(olds[0], olds[1]);/*console.log(o);*/
    //age + voted:true
    for(let i=0;i<voters.length;i++){
        if (y.includes(voters[i].age)) {
            result.youth++;
        }
        if (m.includes(voters[i].age)) {
            // console.log(voters[i].age);
            result.mids++;
        }
        if (m.includes(voters[i].age)) {
            // console.log(voters[i].age);
            result.olds++;
        }
      //   if (voters[i].voted==true && y.includes(voters[i].age)) {
      //       result.youngVotes++;
      //   }
      //    else if (voters[i].voted==true && m.includes(voters[i].age))
      //   {
      //       result.midVotes++;
      //   }
      // else  if(voters[i].voted==true && o.includes(voters[i].age))
      //   {
      //       result.oldVotes++;
      //   }
        (voters[i].voted==true && y.includes(voters[i].age)) ?result.youngVotes++:
        (voters[i].voted==true && m.includes(voters[i].age)) ?result.midVotes++:
        (voters[i].voted==true && o.includes(voters[i].age)) ?result.oldVotes++:
                0;




    }

    return result;
}
console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4
}
*/