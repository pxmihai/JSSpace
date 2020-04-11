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
    ]
    let dice=[
        packed[0].year>0? 1:0,
        packed[1].day>0? 1:0,
        packed[2].hour>0? 1:0,
        packed[3].minute>0? 1:0,
        packed[4].second>0? 1:0

    ]
    let plural=[
        packed[0].year==0? "": packed[0].year==1? "year":"years",
        packed[1].day==0? "": packed[1].day==1? "day":"days",
        packed[2].hour==0? "": packed[2].hour==1? "hour":"hours",
        packed[3].minute==0? "": packed[3].minute==1? "minute":"minutes",
        packed[4].second==0? "": packed[4].second==1? "second":"seconds",
    ]

    console.log(plural);
    let sum = dice.reduce(function(a, b){
        return a + b;
    }, 0);

    let readable;/*4 values fit here*/
    console.log('I am the oracle '+oracle);
    console.log('I am the dice '+dice);
    console.log(sum);

    if(sum==0)  return 'now';
    if(sum==1)  readable=["","","",""];
    if(sum==2)  readable=[" and "];
    if(sum>=2&&sum<=4)/*3-4*/
        readable=[
            dice[0]==0?"":readable[0]=", ",
            dice[1]==0?"": ", ",
            dice[2]==0?"": ", ",
            dice[3]==0?"":", ",



        ]
    if(sum==5)  readable=[", ",", ",", "," and "];




    return ("y"+packed[0].year+" "+"d"+packed[1].day+" "+"h"+packed[2].hour+" "+"m"+packed[3].minute+" "+"s"+packed[4].second);

}
