
let big1=100;
let a=[1];
console.log(a);
let b=[12,3,5,11,6,4,8]
console.log(b[1]);
let c=[
    Math.floor(b[0]/b[1]),
    Math.floor(b[3]/b[2]),
    Math.floor(b[4]/b[1])
];
console.log(c);

console.log(big1);
let d=[
    {
        formula:Math.floor(b[0]/b[1]),
        decrease:big1-=Math.floor(b[0]/b[1]),
        a:"test"
    },
    {
        formula:Math.floor(b[3]/b[2]),
        decrease:big1-=Math.floor(b[3]/b[2])
    },
    {
        formula:Math.floor(b[4]/b[1]),
        decrease:big1-=Math.floor(b[4]/b[1])
    },
];
console.log(d[0].formula); //2
console.log(d);
console.log(big1);


// is object order preserved