// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
// 3 years = 94670777
// 1 year = 31556926
// (6 years 192 days 13 hours 3 minutes) + (54 seconds) = 205 977 390
// 109 days, 4 hours, 13 minutes and 54 seconds = 9432834
//Expected: '6 years, 192 days, 13 hours, 3 minutes and 54 seconds', instead got: 205851834
console.log(formatDuration(31556926));

function formatDuration(seconds) {

    let sec=seconds;
//    should create an object packed that does all the math
//    when constructed with seconds
let packed=[
    {year:Math.floor(sec / (60*60*24*365)),
    remain:sec-=Math.floor(sec / (60*60*24*365))-(60*60*24*365),
    },

    {
     day:   Math.floor(sec / (60*60*24)),
     remain:  sec-=Math.floor(sec / (60*60*24))*60*60*24,
    },
    {
        hour:Math.floor(sec / (60*60) ),
        remain: sec-=hours*(60*60),
    },

     Math.floor(sec / 60),
    sec-=minutes*60,
   Math.floor(sec % 60),
];

console.log(packed[1]);



    let years=Math.floor(sec / (60*60*24*365));
        sec-=years*60*60*24*365;
    let days=Math.floor(sec / (60*60*24));
        sec-=days*60*60*24;
    let hours = Math.floor(sec / (60*60) );
        sec-=hours*(60*60);
    let minutes = Math.floor(sec / 60);
        sec-=minutes*60;
    let second=Math.floor(sec % 60);

    // console.log("y"+years);
    // console.log("d"+days);
    // console.log("h"+hours);
    // console.log("m"+minutes);
    // console.log("s"+second);
    // console.log('------------------');

    if (seconds==0) return 'now';





    return ("y"+years+" "+"d"+days+" "+"h"+hours+" "+"m"+minutes+" "+"s"+second);

}
