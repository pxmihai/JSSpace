// ([1,2,3,4]),[[1,3],[2,4]])
let input=[1,2,3,4];

//sort the whole array
//diff each check if dif=2 if so push values in answer[]

console.log(twosDifference(input));

function stupid(a,b){
    if (a>b)return a-b;
    if (a<b)return b-a;
}
function twosDifference(input){
    let answer=[];

    for (let i=0;i<input.length;i++)
        for ( let j=0;j<input.length;j++){
            let a=input[i];
            let b=input[j];

        if( stupid(a,b)==2&&b>a) {
              answer.push([a,b])}
         }
    return answer;
}




