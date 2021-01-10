// https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc
let arr = [1, 2, 3, 4];
{

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // sum = 10
    console.log(sum);
 }

{
    let sum = arr.reduce((acc, val) => {
        return acc + val;
    });
}

{
    let arr = [1, 2, 3, 4];
    let initValue = 0;
    let accumulator; // the accumulator accumulates all of the callbacks returned values, or previous value
    let val; //val — the current value being processed, or item
    let index; //index — the current index of the value being processed

    // let result = arr.reduce((accumulator, val, index, arr), initValue);
}

{
    let result=['foo', 'bar', 'baz'].reduce((acc, curr, i, arr) => acc + (i === arr.length - 1 ? ', and ' : ', ') + curr)
    console.log(result);
}

{
    let sum = arr.reduce((acc, val) => {
        return acc + val;
    },0);
    console.log(sum)
}

{

    let sum = arr.reduce((acc, val) => acc - val, 100);
    console.log(sum)
}



{

    let data = [
        {
            country: 'China',
            pop: 1409517397,
        },
        {
            country: 'India',
            pop: 1339180127,
        },
        {
            country: 'USA',
            pop: 324459463,
        },
        {
            country: 'Indonesia',
            pop: 263991379,
        }
    ]

    let result=data.reduce((acc,val)=>
        {
            console.log(acc,val)
            return val.country === 'China' ? acc : acc + val.pop;
        },0
    );
    console.log(result)
}