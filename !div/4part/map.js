// https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4
    let array1 = Object.freeze([1, 2, 3, 4, 5,6,7,8,9,10,11]);
{
    let array2 = array1.map((val, index, arr) => {
        // val = array1[index] + (index%2==0?1:2);
        val = (array1[index] + index%2==0)?1:2;
        return val;
    });
    console.log(array1);
    console.log(array2);
    // [ 1, 2, 3, 4, 5 ]
    // [ 2, 2, 2, 2, 2 ]

}
{
    let array2 = array1.map((val, i, arr) => {
        return {
            value: val,
            index: i
        };
    });
    console.log(array2)
        // [
        // { value: 1, index: 0 },
        //     { value: 2, index: 1 },
        //     { value: 3, index: 2 },
        //     { value: 4, index: 3 },
        //     { value: 5, index: 4 }
        // ]

}
{
    let arr = [1,2,3,4];
    let newArr = arr.map(() => {
    return 'cats';
});
    console.log(newArr)
    // newArr = ['cats', 'cats', 'cats', 'cats']
}

{
    let arr = [1,2,3,4];
    let newArr = arr.map((v,i,a) => {
        return 1 + (v % 2 === 0 ? v * 2 : v);
    });
    console.log(newArr)
    // newArr = [1,4,3,8];
}
