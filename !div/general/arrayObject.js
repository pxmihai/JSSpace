// There is a set of questions, each true or false, a number of students give
// true or false values to the questions, the function returns their name and grade.

const validator = (bools, people) => {

    const names = Object.keys(people);

    const getScore = (answerKey, answers) => {
        let score = 1;
        answerKey.forEach((answer, index) => {
            if (answer && answers[index] > 0) {
                score += 1;
            } else if (!answer && answers[index] === 0) {
                score += 1;
            }
        });
        return score;
    }

    let result = {};
    names.forEach((name) => {
        result[name] = getScore(bools, people[name]);
    });
    return result;
    // fill with people and their grade
    // should returns={John: 5 , etc} // 0 0 1 0 1 0 1 1 0 + 1 => returns 5}

}


const boolArray = [false, false, true, false, true, false, true, true, true];

const studentMath = {
    John: [1, 1, 1, 1, 1, 1, 1, 1, 0],
    Mary: [1, 0, 1, 0, 1, 0, 1, 1, 1],
    Bob: [0, 0, 1, 0, 0, 1, 1, 0, 0],
    Alice: [0, 1, 0, 1, 1, 0, 0, 1, 1],
    Tom: [0, 1, 0, 1, 0, 1, 0, 1, 0],
}

console.log(validator(boolArray, studentMath));