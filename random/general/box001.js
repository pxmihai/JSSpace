// // There is a set of questions, each true or false, a number of students give
// // true or false values to the questions, the function returns their name and grade.
//
// const validator =(bools, people) =>{
//
//     let returns={}
//     // fill with people and their grade
//     // should returns={John: 5 , etc} // 0 0 1 0 1 0 1 1 0 + 1 => returns 5}
//
// }
//
// const boolArray=[false, false, true, false, true, false, true, true,true];
//
// const studentMath={
//     John:[1,1,1,1,1,1,1,1,0],
//     Mary:[1,0,1,0,1,0,1,1,1],
//     Bob:[0,0,1,0,0,1,1,0,0],
//     Alice:[0,1,0,1,1,0,0,1,1],
//     Tom:[0,1,0,1,0,1,0,1,0],
// }
//
// validator(boolArray,studentMath);

const validator = (bools, people) => {

    let studentsScore = {}

    const numToBool = Object.keys(people).map(student => people[student].map((studentChoice, idx) => studentChoice === 0 ? false : true))
    const findScore = numToBool.map((arr, idx) => arr.map((el, id) => el === bools[id] ? 1 : 0))
    const scoreArr = findScore.map(arr => arr.reduce((acc, current) => acc + current ))
    const obj = Object.keys(people).map((student, idx) => studentsScore[student] = scoreArr[idx] )
    return studentsScore
}
const boolArray=[false, false, true, false, true, false, true, true,true];
const studentMath={
    John:[1,1,1,1,1,1,1,1,0],
    Mary:[1,0,1,0,1,0,1,1,1],
    Bob:[0,0,1,0,0,1,1,0,0],
    Alice:[0,1,0,1,1,0,0,1,1],
    Tom:[0,1,0,1,0,1,0,1,0],
}

console.log(validator(boolArray,studentMath));
