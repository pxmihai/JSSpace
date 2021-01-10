// https://codeburst.io/learn-understand-javascripts-filter-function-bde87bce206
let arr = [1, 2, 3, 4, 5, 6];
let data = [
    {
        country: 'China',
        population: 1409517397,
    },
    {
        country: 'India',
        population: 1339180127,
    },
    {
        country: 'USA',
        population: 324459463,
    },
    {
        country: 'Indonesia',
        population: 263991379,
    }
]
{
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) even.push(arr[i]);
    }
    console.log(even);
   // [ 2, 4, 6 ]

}

{
    let even = arr.filter(x => x % 2 == 0)
    console.log(even)
}

{
    let cities = data.filter(val => (val.population) > 500000000);
    console.log(cities);
}
