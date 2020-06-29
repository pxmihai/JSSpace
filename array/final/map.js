/*
let newArray = oldArray.map(function callback(currentValue, index, array) {
    // return element for new_array
}, thisArg)
*/
//val
{
    let oldArray=[1,2,3,4,5];
    let newArray=oldArray.map(function callback(val,index,array){
        return val*2;
    })
    console.log(newArray);
}
// val, index
{
    let oldArray=[1,2,3,4,5];
    let newArray=oldArray.map(function callback(val,index,array){
        return val*(2+index);
    })
    console.log(newArray)
}
// val, index, array
{
    let oldArray=[1,2,3,4,5];
    let newArray=oldArray.map(function callback(val,index,array){
        return val*(2+index)+array[index];
    })
    console.log(newArray)
}
// val, index, array, this
{
    let school=0;
    let oldArray=[1,2,3,4,5];
    let newArray=oldArray.map(function callback(val,index,array){
        return (val*(2+index)+array[index])*this.school;
    })
    console.log(newArray,{school:1})
}

{
    let windowSize=12;
    const oldArray = [1, 4, 9, 16];

    function ourFunc(val, index, arr){
        return val * this.windowSize
    }

    const newArray = oldArray.map(ourFunc, {windowSize: 10});
    console.log(newArray);
// newArray = [10, 40, 90, 169]
}

