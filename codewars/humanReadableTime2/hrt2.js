// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
// 3 years = 94670777
// 1 year = 31556926
// (6 years 192 days 13 hours 3 minutes) + (54 seconds) = 205 977 390
// 109 days, 4 hours, 13 minutes and 54 seconds = 9432834
//Expected: '6 years, 192 days, 13 hours, 3 minutes and 54 seconds', instead got: 205851834
console.log(formatDuration(205851781));

function formatDuration(seconds) {

    let sec=seconds;
//    should create an object packed that does all the math
//    when constructed with seconds
let packed=[
    {
        year:Math.floor(sec / (60*60*24*365)),
        remain:sec-=Math.floor(sec / (60*60*24*365))*(60*60*24*365),
    },

    {
        day:Math.floor(sec / (60*60*24)),
        remain:sec-=Math.floor(sec / (60*60*24))*60*60*24,
    },
    {
        hour:Math.floor(sec / (60*60) ),
        remain: sec-=Math.floor(sec / (60*60) )*(60*60),
    },
    {
        minute:Math.floor(sec / 60),
        remain:sec-=Math.floor(sec / 60)*60,

    },
    {
        second:Math.floor(sec % 60),
    }

];

console.log(packed[0]);
console.log(packed[1]);
console.log(packed[2]);
console.log(packed[3]);
console.log(packed[4]);



    // let years=Math.floor(sec / (60*60*24*365));
    //     sec-=years*60*60*24*365;
    // let days=Math.floor(sec / (60*60*24));
    //     sec-=days*60*60*24;
    // let hours = Math.floor(sec / (60*60) );
    //     sec-=hours*(60*60);
    // let minutes = Math.floor(sec / 60);
    //     sec-=minutes*60;
    // let second=Math.floor(sec % 60);
    //
    // console.log("y"+years);
    // console.log("d"+days);
    // console.log("h"+hours);
    // console.log("m"+minutes);
    // console.log("s"+second);
    // console.log('------------------');
    // return ("y"+years+" "+"d"+days+" "+"h"+hours+" "+"m"+minutes+" "+"s"+second);



    let oracle=[
        packed[0].year,
        packed[1].day,
        packed[2].hour,
        packed[3].minute,
        packed[4].second
    ];
    console.log('I am the oracle '+oracle);
    let dice=[
        packed[0].year>0? 1:0,
        packed[1].day>0? 1:0,
        packed[2].hour>0? 1:0,
        packed[3].minute>0? 1:0,
        packed[4].second>0? 1:0
    ];
    console.log('I am the dice '+dice);
    let plural=[
        packed[0].year==0? "": packed[0].year==1? " year":" years",
        packed[1].day==0? "": packed[1].day==1? " day":" days",
        packed[2].hour==0? "": packed[2].hour==1? " hour":" hours",
        packed[3].minute==0? "": packed[3].minute==1? " minute":" minutes",
        packed[4].second==0? "": packed[4].second==1? " second":" seconds",
    ]
    // console.log(plural);

    let sum = dice.reduce(function(a, b){
        return a + b;
    }, 0);

    let readable=[];/*4 values fit here*/


    console.log(sum);

    if(sum==0)  return 'now';
    if(sum==1)  readable=["","","",""];
    if(sum==2)  readable=[" and "];
    if(sum==3){
        dice[4]==1?


        if(dice[4]==1){
            found=1;

        }
        readable=[
            dice[0]==0?"":", ",
            dice[1]==0?"": ", ",
            dice[2]==0?"": "and ",
            dice[3]==0?"":"and",

        ]
    }


    if(sum==5)  readable=[", ",", ",", "," and "];
    console.log('I am readable'+readable)
    switch(dice) {
        case dice[3]==1:
            readable[3]=" and "
            break;
        case dice[2]==1:
            readable[2]=" and "
            break;
        case dice[1]==1:
            readable[1]=" and "
            break;
        default:
        // code block
    }





    return (
        packed[0].year+  plural[0]+
        packed[1].day+   plural[1]+
        packed[2].hour+  plural[2]+
        packed[3].minute+plural[3]+
        packed[4].second+plural[4]
    );

}

