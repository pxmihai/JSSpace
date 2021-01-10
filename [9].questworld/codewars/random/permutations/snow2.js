// credit https://levelup.gitconnected.com/find-all-permutations-of-a-string-in-javascript-af41bfe072d2
let permutations = (string) => {
     if (string.length < 2 ){ return Array.from(string) }
     let perm = [];

    for (let i = 0; i < string.length; i++){

        let char = string[i]

        if (string.indexOf(char) != i) continue /*skip&*/

        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

        for (let p of permutations(remainingChars)){ perm.push(char + p) }
    }
    return perm;
}

console.log(permutations("aabb"));