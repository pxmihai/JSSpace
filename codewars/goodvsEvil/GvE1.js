goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1');
goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0');
goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0');


function goodVsEvil(good, evil){
    let goodScore=[1,2,3,3,4,10];
    let evilScore=[1,2,2,2,3,5,10];

    let left=good.split(" ").map(Number);
    let right=evil.split(" ").map(Number);
    // console.log(left);
    // console.log(right);

    let c1=goodScore.map(function(num,id){ return num*left[id]});
    let c2=evilScore.map(function(num,id){ return num*right[id]});
    // console.log(c1);
    // console.log(c2);

    let tLeft=c1.reduce( (total,partial)=>{  return total+partial;});
    const tRight=c2.reduce( (total,partial)=>{  return total+partial;});
    // console.log(tLeft);
    // console.log(tRight);
     if(tLeft>tRight)console.log('Battle Result: Good triumphs over Evil', 'Good should win');
     if(tLeft<tRight)console.log('Battle Result: Evil eradicates all trace of Good', 'Evil should win');
     if(tLeft===tRight)console.log('Battle Result: No victor on this battle field', 'Should be a tie');

}
