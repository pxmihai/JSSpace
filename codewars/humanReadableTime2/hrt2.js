// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
// 3 years = 94670777
// 1 year = 31556926
// (6 years 192 days 13 hours 3 minutes) + (54 seconds) = 205 977 390
// 109 days, 4 hours, 13 minutes and 54 seconds = 9432834
//Expected: '6 years, 192 days, 13 hours, 3 minutes and 54 seconds', instead got: 205851834
// 1 60 61
console.log(main(205851834));/*205851781*/
// 402979283057
function main(seconds) {
    let sec=seconds;
    let time=[
        {
            a:Math.floor(sec / (60*60*24*365)),
            b:sec-=Math.floor(sec / (60*60*24*365))*(60*60*24*365),
        },
        {
            a:Math.floor(sec / (60*60*24)),
            b:sec-=Math.floor(sec / (60*60*24))*60*60*24,
        },
        {
            a:Math.floor(sec / (60*60) ),
            b: sec-=Math.floor(sec / (60*60) )*(60*60),
        },
        {
            a:Math.floor(sec / 60),
            b:sec-=Math.floor(sec / 60)*60,
        },
        {
            a:Math.floor(sec % 60),
        }
    ];
    console.log(time);
    let slot=[time[0].a>0? 1:0, time[1].a>0? 1:0, time[2].a>0? 1:0, time[3].a>0? 1:0, time[4].a>0? 1:0];
    let sum = slot.reduce(function(a, b){
        return a + b;
    }, 0);
    console.log("total: "+sum);
    let plural=[
        time[0].a==0? "void": time[0].a==1? " year":" years",
        time[1].a==0? "void": time[1].a==1? " day":" days",
        time[2].a==0? "void": time[2].a==1? " hour":" hours",
        time[3].a==0? "void": time[3].a==1? " minute":" minutes",
        time[4].a==0? "void": time[4].a==1? " second":" seconds",
    ]/*single,plural*/
    console.log(plural);

    let readable= [];/*4 values fit here*/
    let answer=[]; /*zip stores the remaining time, removing blanks*/
        for (let i=0;i<slot.length;i++){
            if(slot[i]==1)
                answer.push(time[i].a+plural[i]);
        }
    console.log("answer: "+answer);

    if(sum==0)  return 'now';
    if(sum==1)
    {
        return answer[0];
    }
    if(sum==2)  {
            return answer[0]+ " and "+answer[1];
    }

    if(sum==3){
        readable=[", "," and "];
        return answer[0]+", "+answer[1]+" and "+answer[2];

    }
    if(sum==4){
        return answer[0]+", "+answer[1]+", "+answer[2]+" and "+answer[3];
    }
    if(sum==5)  readable=[", ",", ",", "," and "];

    console.log(readable);

    return (
        time[0].a+plural[0]+readable[0]+
        time[1].a+plural[1]+readable[1]+
        time[2].a+plural[2]+readable[2]+
        time[3].a+plural[3]+readable[3]+
        time[4].a+plural[4]
    );

}


